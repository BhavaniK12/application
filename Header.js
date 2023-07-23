import React from "react";
import "../src/components/Header.css";

export default function Header(props) {
  return (
    <>
      <div className="header">
        <div onClick={() =>props.handleShow(false)}>Shopping Cart </div>
        <div
          onClick={() => {props.handleShow(true)
          }}
        >
          Cart
          <sup>{props.count}</sup>
        </div>
      </div>
    </>
  );
}
