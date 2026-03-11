import React from "react";
import { Accordion } from "react-bootstrap";
import { realizationBenefits } from "../items.js";
import Item from './Item';


const RealizationBenefitsAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
        <Item items={realizationBenefits.items} eventKey="0" />
      </Accordion>
    </div>
  )
}

export default RealizationBenefitsAccordion