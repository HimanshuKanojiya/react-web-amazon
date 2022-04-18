import React from "react";
import { FooterContainer } from "components/styles/Login/FooterContainer";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ul className="footer-links">
        <li>
          <Link to="/">Condition of Use</Link>
        </li>
        <li>
          <Link to="/">Privacy Notice</Link>
        </li>
        <li>
          <Link to="/">Help</Link>
        </li>
      </ul>
      <small className="footer-disclaimer">
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </small>
    </FooterContainer>
  );
};
