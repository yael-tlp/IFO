import React from 'react'
import { Accordion } from 'react-bootstrap'
import Item from './Item'
import { diploma } from '../items.js'

const DiplomaAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
        <Item items={diploma.items} eventKey="0" />
      </Accordion>
    </div>
  )
}

export default DiplomaAccordion