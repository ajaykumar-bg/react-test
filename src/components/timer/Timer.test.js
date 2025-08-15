import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import Timer from './Timer';

describe('Timer', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		act(() => {
			jest.runOnlyPendingTimers();
		});
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

		act(() => {
			jest.advanceTimersByTime(3000);
		});

		expect(screen.getByText('3')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
	});

	it('pauses counting when pause button is clicked', () => {
		render(<Timer />);

		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		act(() => {
			jest.advanceTimersByTime(2000);
		});

		fireEvent.click(screen.getByRole('button', { name: /pause/i }));

		act(() => {
			jest.advanceTimersByTime(2000);
		});

		expect(screen.getByText('2')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
	});

	it('resets the timer when reset button is clicked', () => {
		render(<Timer />);

		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		act(() => {
			jest.advanceTimersByTime(5000);
		});

		fireEvent.click(screen.getByRole('button', { name: /reset/i }));

		expect(screen.getByText('0')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
	});

	it('continues counting from current value after pause and restart', () => {
		render(<Timer />);

		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		act(() => {
			jest.advanceTimersByTime(3000);
		});

		fireEvent.click(screen.getByRole('button', { name: /pause/i }));
		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		act(() => {
			jest.advanceTimersByTime(2000);
		});

		expect(screen.getByText('5')).toBeInTheDocument();
	});

	it('cleans up interval on unmount', () => {
		const { unmount } = render(<Timer />);

		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		act(() => {
			unmount();
			jest.runOnlyPendingTimers();
		});

		expect(jest.getTimerCount()).toBe(0);
	});

	it('maintains accurate timing over longer periods', () => {
		render(<Timer />);

		fireEvent.click(screen.getByRole('button', { name: /start/i }));

		act(() => {
			jest.advanceTimersByTime(60000);
		});

		expect(screen.getByText('60')).toBeInTheDocument();
	});
});
