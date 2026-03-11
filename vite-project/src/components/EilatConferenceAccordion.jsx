import React from "react";
import Item from "./Item";
import { Accordion } from "react-bootstrap";
import {eilatConferenceArticles, eilatConferencePhotos} from "../items.js";
const EilatConferencesAccordion = () => {
    return (
        <div>
            <Accordion style={{ direction: "rtl"}}>
                <Item items={eilatConferenceArticles.items} eventKey="0" />
                <Item items={eilatConferencePhotos.items} eventKey="1" />
            </Accordion>
        </div>
    )
}

export default EilatConferencesAccordion