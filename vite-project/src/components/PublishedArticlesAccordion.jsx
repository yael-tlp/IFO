import React from "react";
import { Accordion } from "react-bootstrap";
import { publishedArticles } from "../items.js";
import Item from './Item';


const PublishedArticlesAccordion = () => {
  return (
    <div>
        <Accordion style={{ direction: "rtl"}}>
        <Item items={publishedArticles.items} eventKey="0" />
      </Accordion>
    </div>
  )
}

export default PublishedArticlesAccordion