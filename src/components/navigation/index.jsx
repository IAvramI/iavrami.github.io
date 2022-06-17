import React from "react";
import { Link } from "react-router-dom";
import LogoFor from "../logo";
import { Button } from "../../shared";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <LogoFor />
        </Link>
      </div>
      <div>
        <Link to="/">
          <Button label="Product" />
        </Link>
        <Link to="/">
          <Button label="Customers" />
        </Link>
        <Link to="/">
          <Button label="Solution" />
        </Link>
        <Link to="/FAQ">
          <Button label="FAQ" variant="blueBackground" />
        </Link>
        <Link to="/">
          <Button label="Home" variant="blueColor" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
