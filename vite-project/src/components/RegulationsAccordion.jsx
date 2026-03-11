import React from 'react'
import { Accordion } from 'react-bootstrap'
import Item from './Item'
import { regulations } from '../items.js'

const RegulationsAccordion = () => {
    return (
        <div>
            <Accordion style={{ direction: "rtl"}}>
                <Item items={regulations.items} eventKey="0" />
            </Accordion>
        </div>
    )
}

export default RegulationsAccordion