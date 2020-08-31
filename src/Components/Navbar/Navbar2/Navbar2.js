import React from "react";
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./Navbar2.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

const Navbar = () => (
  <div style={styles}>
    <Popup
      modal
      overlayStyle={{ background: "#D4EBFF" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={(open) => <BurgerIcon open={open} />}
    >
      {(close) => <Menu close={close} />}
    </Popup>
  </div>
);

export default Navbar;
