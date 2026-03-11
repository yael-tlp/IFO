import React from 'react'
import {Accordion} from 'react-bootstrap'
import Item from './Item'
import { mailsInvestments, managementFeeInvestments } from '../items.js'

const InvestmentsAccordion = () => {
  return (
    <div>
         <Accordion style={{ direction: "rtl"}}>
        <Item items={managementFeeInvestments.items} eventKey="0" />
        <Item items={mailsInvestments.items} eventKey="1" />
      </Accordion>
    </div>
  )
}

export default InvestmentsAccordion