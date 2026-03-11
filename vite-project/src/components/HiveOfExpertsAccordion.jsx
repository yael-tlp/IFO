import React from 'react'
import { Accordion } from 'react-bootstrap'
import Item from './Item'
import {hiveOfExperts} from "../items.js";

const HiveOfExpertsAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
        <Item items={hiveOfExperts.items} eventKey="0" />
      </Accordion>
    </div>
  )
}

export default HiveOfExpertsAccordion