import React from 'react'
import { Accordion } from 'react-bootstrap'
import Item from './Item'
import { mislaka } from '../items.js'

const MislakaAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
        <Item items={mislaka.items} eventKey="0" />
      </Accordion>
    </div>
  )
}

export default MislakaAccordion