import React, { useState } from "react";
import { Accordion, Button, Row, Col } from "react-bootstrap";
import {HashLoader} from 'react-spinners';


const Item = (props) => {

  const [loadingStates, setLoadingStates] = useState(Array(props.items.length).fill(false));

  const handleClick = (index) => {
    const newLoadingStates = [...loadingStates];
    newLoadingStates[index] = true;
    setLoadingStates(newLoadingStates);

    setTimeout(() => {
      const resetLoadingStates = [...loadingStates];
      resetLoadingStates[index] = false;
      setLoadingStates(resetLoadingStates);
    }, 2000);
  };

  return (
    <Accordion.Item style={{backgroundColor:"#fff"}} eventKey={props.eventKey}>
      <Accordion.Header>{props.items[0].head}</Accordion.Header>
      <Accordion.Body>
        <Row style={{maxHeight:'25vh',overflowY:'auto'}}>
          {props.items.map((item, index) => (
            <React.Fragment key={index}>
              <Col lg={2} md={3} sm={8} xs={6} className={index % 2 === 0 ? "border-v2 my-1" : "border-v1 my-1"}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  {item.showImage && (
                      <img
                          src={`/images/${item.image}`}
                          alt={item.name}
                          style={{width: '35px', marginLeft: '5%'}}
                      />
                  )}
                  <p style={{color:"#0d2c4b"}}>{item.name}</p>
                </div>
              </Col>
              <Col lg={2} md={3} sm={4} xs={6}>
                <div>
                  {loadingStates[index] ? (
                      <div style={{marginRight: "40px"}}>
                        <HashLoader size={40} color="#1181f8" loading={true}/>
                      </div>
                  ) : (
                      <a href={item.ref} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-primary mx-1" style={{color:"#fff", backgroundColor:"#0d2c4b"}} onClick={() => handleClick(index)}>לחץ לפתיחה</Button>
                      </a>
                  )}
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Item;
