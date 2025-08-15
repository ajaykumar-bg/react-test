import React from 'react';
import './Main.css';

function Main(props) {
	const { title, children } = props;

	return (
		<div className='main'>
			<h1>{title}</h1>
			<div className='main-container'>{children}</div>
		</div>
	);
}

export default Main;
