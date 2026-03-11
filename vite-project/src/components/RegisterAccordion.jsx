import React from 'react'
import { Accordion } from 'react-bootstrap'
import Item from './Item'
import { register } from '../items.js'

const DiplomaAccordion = () => {
    return (
        <div>
            <Accordion style={{ direction: "rtl"}}>
                <Item items={register.items} eventKey="0" />
            </Accordion>
        </div>
    )
}

export default DiplomaAccordion