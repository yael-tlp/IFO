import React from 'react'
import Item from './Item'
import {Accordion} from 'react-bootstrap'
import {Newsletters, professionalSpace, Year2024, Year2025} from '../items.js'

const ProfessionalSpaceAccordion = () => {
    return (
        <div>
            <Accordion style={{direction: "rtl"}}>
                <Item items={Year2025.items} eventKey="0"/>
                <Item items={Year2024.items} eventKey="1"/>
                <Item items={Newsletters.items} eventKey="2"/>
                <Item items={professionalSpace.items} eventKey="3"/>
            </Accordion>
        </div>
    )
}

export default ProfessionalSpaceAccordion