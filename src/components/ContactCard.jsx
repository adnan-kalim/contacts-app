import React from "react";
import userImage from "../images/user.png";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={userImage} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      />
    </div>
  );
}
