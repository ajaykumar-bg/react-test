import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.runOnlyPendingTimers();
		jest.useRealTimers();
	});

	it('renders initial timer state', () => {
		render(<Timer />);

		expect(screen.getByText('0')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
	});

	it('starts counting when start button is clicked', () => {
		render(<Timer />);

		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		// Advance timer by 3 seconds
		act(() => {
			jest.advanceTimersByTime(3000);
		});

		expect(screen.getByText('3')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
	});

	it('pauses counting when pause button is clicked', () => {
		render(<Timer />);

		// Start the timer
		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		// Advance timer by 2 seconds
		act(() => {
			jest.advanceTimersByTime(2000);
		});

		// Pause the timer
		fireEvent.click(screen.getByRole('button', { name: /pause/i }));

		// Advance timer by 2 more seconds
		act(() => {
			jest.advanceTimersByTime(2000);
		});

		// Should still show 2 seconds as timer was paused
		expect(screen.getByText('2')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
	});

	it('resets the timer when reset button is clicked', () => {
		render(<Timer />);

		// Start the timer
		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		// Advance timer by 5 seconds
		act(() => {
			jest.advanceTimersByTime(5000);
		});

		// Reset the timer
		fireEvent.click(screen.getByRole('button', { name: /reset/i }));

		expect(screen.getByText('0')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
	});

	it('continues counting from current value after pause and restart', () => {
		render(<Timer />);

		// Start timer
		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		// Advance by 3 seconds
		act(() => {
			jest.advanceTimersByTime(3000);
		});

		// Pause timer
		fireEvent.click(screen.getByRole('button', { name: /pause/i }));

		// Start timer again
		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		// Advance by 2 more seconds
		act(() => {
			jest.advanceTimersByTime(2000);
		});

		expect(screen.getByText('5')).toBeInTheDocument();
	});

	it('cleans up interval on unmount', () => {
		const { unmount } = render(<Timer />);

		// Start timer
		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		// Unmount component
		unmount();

		// Ensure all timers are cleared
		expect(jest.getTimerCount()).toBe(0);
	});

	it('maintains accurate timing over longer periods', () => {
		render(<Timer />);

		// Start timer
		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		// Advance by 60 seconds
		act(() => {
			jest.advanceTimersByTime(60000);
		});

		expect(screen.getByText('60')).toBeInTheDocument();
	});
});
