import React from 'react'
import { Accordion } from 'react-bootstrap'
import Item from './Item'
import { associationIncorporation } from '../items.js'

const AssociationIncorporationAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
        <Item items={associationIncorporation.items} eventKey="0" />
      </Accordion>
    </div>
  )
}

export default AssociationIncorporationAccordion