import React from 'react'
import { Accordion } from 'react-bootstrap'
import Item from './Item'
import {financialConference} from "../items.js";

const FinancialConferenceAccordion = () => {
    return (
        <div>
            <Accordion style={{ direction: "rtl"}}>
                <Item items={financialConference.items} eventKey="0" />
            </Accordion>
        </div>
    )
}

export default FinancialConferenceAccordion