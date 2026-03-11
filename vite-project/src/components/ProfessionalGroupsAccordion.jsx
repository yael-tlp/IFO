import React from "react";
import { Accordion } from "react-bootstrap";
import { professionalGroups } from "../items.js";
import Item from './Item';


const ProfessionalGroupsAccordion = () => {
    return (
        <div>
            <Accordion style={{ direction: "rtl"}}>
                <Item items={professionalGroups.items} eventKey="0" />
            </Accordion>
        </div>
    )
}

export default ProfessionalGroupsAccordion