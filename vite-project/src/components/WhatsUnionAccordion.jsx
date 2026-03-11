import React from "react";
import { Accordion } from "react-bootstrap";
import { whatsUnion } from "../items.js";
import Item from './Item';


const WhatsUnionAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
        <Item items={whatsUnion.items} eventKey="0" />
      </Accordion>
    </div>
  )
}

export default WhatsUnionAccordion