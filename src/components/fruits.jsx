import React from "react";

const items = ["Apple", "Banana", "Cherry"];
const style = {
  color: "blue",
  backgroundColor: "lightgrey",
};
const listItems = items.map((item) => <li key={item}>{item}</li>);

function Fruit() {
  return <ul style={style}>{listItems}</ul>;
}

export default Fruit;
