import React from 'react';
import Accordion from './Accordion';
import { ACCORDION_MOCK_LIST } from './accordion.mock';

function AccordionExample() {
	return <Accordion items={ACCORDION_MOCK_LIST} />;
}

export default AccordionExample;
