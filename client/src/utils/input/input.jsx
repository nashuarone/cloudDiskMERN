import React from "react"
import "../../components/main.css"

function Input(props) {
  return (
    <input
      value={props.value}
      onChange={e => props.setValue(e.target.value)}
      className="input"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input
