import React from "react";
import Item from "./Item";
import {Accordion} from "react-bootstrap";
import {danHotelConference} from "../items.js";
import EilatConferencesAccordion from "./EilatConferenceAccordion";

const ConferencesAndEventsAccordion = () => {
    return (
        <div>
            <Accordion style={{direction: "rtl"}}>
                <Accordion.Header>כנס איגוד אילת 2026</Accordion.Header>
                <Accordion.Body>
                    <EilatConferencesAccordion/>
                </Accordion.Body>
                <div style={{marginTop: "1px"}}>
                    <Item items={danHotelConference.items} eventKey="0"/>
                </div>
            </Accordion>
        </div>
    )
}

export default ConferencesAndEventsAccordion