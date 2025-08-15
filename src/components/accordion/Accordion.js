import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleSection = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='accordion'>
			{items.map((item, index) => (
				<div key={index} className='accordion-item'>
					<button
						className={`accordion-header ${
							activeIndex === index ? 'active' : ''
						}`}
						onClick={() => toggleSection(index)}
						aria-expanded={activeIndex === index}
						aria-controls={`accordion-content-${index}`}
					>
						{item.title}
						<span className='accordion-icon' aria-hidden='true'>
							{activeIndex === index ? '−' : '+'}
						</span>
					</button>
					<div
						id={`accordion-content-${index}`}
						className={`accordion-content ${
							activeIndex === index ? 'active' : ''
						}`}
						role='region'
						aria-labelledby={`accordion-header-${index}`}
					>
						<div className='accordion-content-inner'>{item.content}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
