import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { whereToRickRoll } from "./utils.jsx"

export default function Menu(props) {


  const [searchParams, setSearchParams] = useSearchParams();

  const handleClose = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.toggleMenu();
  };

  return (
    <div>
      <div className="menu--container">
        <Link
          onClick={handleClose}
          className="backdrop"
          style={{ zIndex: props.isOpen ? 1 : -1 }}
          to="."
        ></Link>
        <div
          className="menu"
          style={{
            right: props.isOpen ? 0 : "-320px",
            transition: "right 0.8s ease",
          }}
        >
          <Link className="close-menu" to=".." onClick={handleClose}>
            &times;
          </Link>
          <nav className="menu-links">
            <Link to="model-s" onClick={props.toggleMenu}>
              Model S
            </Link>
            <Link to="model-3" onClick={props.toggleMenu}>
              Model 3
            </Link>
            <Link to="model-x" onClick={props.toggleMenu}>
              Model X
            </Link>
            <Link to="model-y" onClick={props.toggleMenu}>
              Model Y
            </Link>
            <Link to="roof" onClick={props.toggleMenu}>
              Solar Roof
            </Link>
            <Link to="solarpanels" onClick={props.toggleMenu}>
              Solar Panels
            </Link>
            {
              whereToRickRoll("Existing Inventory", props.toggleMenu)
            }
            {
              whereToRickRoll("Used Inventory", props.toggleMenu)
            }
            {
              whereToRickRoll("Trade-In", props.toggleMenu)
            }
            {
              whereToRickRoll("Test Drive", props.toggleMenu)
            }
            <Link to="powerwall" onClick={props.toggleMenu}>
              Powerwall
            </Link>
            <Link to="commercial-energy" onClick={props.toggleMenu}>
              Commercial Energy
            </Link>
            <Link to="utilities" onClick={props.toggleMenu}>
              Utilities
            </Link>
            <Link to="charging" onClick={props.toggleMenu}>
              Charging
            </Link>
            {
              whereToRickRoll("Find Us", props.toggleMenu)
            }
            {
              whereToRickRoll("Support", props.toggleMenu)
            }
            {
              whereToRickRoll("Investor Relations", props.toggleMenu)
            }
            {
              whereToRickRoll("Shop", props.toggleMenu)
            }
            {
              whereToRickRoll("Account", props.toggleMenu)
            }
          </nav>
        </div>
      </div>
    </div>
  );
}