import React from "react";
import Input from "../UserInput";

import "./styles.css";

const UserOutput = (props) => {
  return (
    <div className="card">
      <p>{props.username}</p>
      <Input change={props.change} username={props.username} />
    </div>
  );
};

export default UserOutput;
