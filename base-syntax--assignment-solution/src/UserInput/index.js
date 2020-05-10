import React from "react";

const UserInput = (props) => {
  return <input type="text" onChange={props.change} value={props.username} />;
};

export default UserInput;
