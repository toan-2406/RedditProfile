import React from "react";
import "./footer.css";

const Footer = ({ IsOpenPost, setOpen }) => {
  return (
    <>
      <footer>
        <div className="footer-container">
          {IsOpenPost ? (
            <box-icon
              name="minus-circle"
              color="#ffffff"
              size="md"
              onClick={() => setOpen(!IsOpenPost)}
            ></box-icon>
          ) : (
            <box-icon
              name="plus-circle"
              color="#ffffff"
              size="md"
              onClick={() => setOpen(!IsOpenPost)}
            ></box-icon>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
