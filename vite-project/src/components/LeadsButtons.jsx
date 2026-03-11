import React, { useState } from "react";
import { Image, Container, Button } from "react-bootstrap";

const LeadsButtons = () => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
      window.location.href = "https://familyoffice.tlp-ins.co.il/referring/";
    }, 2000);
  };

  return (
    <Container className="text-center position-relative mt-5 mb-3">
      <div className="position-relative">
        <Image
          fluid
          src="https://familyoffice.tlp-ins.co.il/wp-content/uploads/2020/08/-מעודכן-e1615710844661.png"
          className={rotate ? "rotate" : ""}
          style={{ maxWidth: "700px", width: "100%", height: "auto" }} // Set initial max width to 700px
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <Button
            variant="warning"
            onClick={handleClick}
            className="button-link rounded-circle inner-shadow"
            style={{
              width: "240px",
              height: "240px",
              color: "white",
              fontSize: "1.7rem",
              fontFamily:'"Secular One", sans-serif',
              cursor:'pointer'
            }} 
          >
            להשארת פרטים <br />
            לחץ כאן
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default LeadsButtons;
