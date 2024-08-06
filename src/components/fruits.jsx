import React from "react";
import "./style.css";

const items = ["Apple", "Banana", "Cherry"];
const listItems = items.map((item) => <li key={item}>{item}</li>);

function Fruit() {
  return <ul className="Head">{listItems}</ul>;
}

export default Fruit;
