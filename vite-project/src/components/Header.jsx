import React from "react";
import {Row, Col} from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Row style={{backgroundColor: "#fff", direction: 'rtl'}}>

                <Col xs={8} lg={5}>
                    <h1 className="me-2" style={{direction: "rtl", color: "#0d2c4b", backgroundColor: "#fff"}}>
                        הכר את איגוד מנהלי הפמילי אופיס של ישראל
                    </h1>
                </Col>
                <Col xs={4} lg={7} className=" text-end logo-container" style={{backgroundColor: "#fff"}}>
                    <img
                        className="my-1 logo"
                        src="/images/home-logo-ifo.png"
                        alt="Logo"
                    />
                </Col>
            </Row>
        </>
    );
};

export default Header;
