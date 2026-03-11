import React from 'react'
import { Accordion } from 'react-bootstrap'
import Item from './Item'
import { legalRepresentation } from '../items.js'

const LegalRepresentationAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
        <Item items={legalRepresentation.items} eventKey="0" />
      </Accordion>
    </div>
  )
}

export default LegalRepresentationAccordion