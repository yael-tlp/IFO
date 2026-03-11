import React from "react";
import Item from "./Item";
import { Accordion } from "react-bootstrap";
import {businessDevelopment, benefits, realizationBenefits} from "../items.js";
const BenefitsAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
            <Item items={benefits.items} eventKey="0" />
            <Item items={realizationBenefits.items} eventKey="1" />
            <Item items={businessDevelopment.items} eventKey="2" />
      </Accordion>
    </div>
  )
}

export default BenefitsAccordion