import React from "react";

const IfoImage = () => {
  const imgStyle = {
    width: "100%",
    maxWidth: "800px",
    height: "auto",
  };
  
  return (
      <div className="d-flex justify-content-center my-5 px-3">
          <img
            src="/images/home-screen.jpg"
            className="rounded-4 shadow"
            style={imgStyle}
            alt="Ifo"
          />
      </div>
  );
};

export default IfoImage;
