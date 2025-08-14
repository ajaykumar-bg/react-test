import { useState, useRef, useEffect } from 'react';
import './Timer.css'; // Assuming you have a CSS file for styling

const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef(null);

	const handleStart = () => {
		if (!isRunning) {
			setIsRunning(true);
			intervalRef.current = setInterval(() => {
				setSeconds((prev) => prev + 1);
			}, 1000);
		}
	};

	const handlePause = () => {
		if (isRunning) {
			clearInterval(intervalRef.current);
			setIsRunning(false);
		}
	};

	const handleReset = () => {
		setSeconds(0);
		clearInterval(intervalRef.current);
		setIsRunning(false);
	};

	useEffect(() => {
		return () => clearInterval(intervalRef.current);
	}, []);

	return (
		<div className='timer'>
			<div className='timer-display'>{seconds}</div>
			<div className='timer-controls'>
				{!isRunning ? (
					<button onClick={handleStart}>Start</button>
				) : (
					<button onClick={handlePause}>Pause</button>
				)}
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
};

export default Timer;
