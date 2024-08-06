import React from "react";
// import FocusInput from "./useRef";
import Counter from "./counter";

const Welcome = (props) => {
  return (
    <>
      <Counter />
      <br></br>
      <h1> Welcome {props.name}</h1>;
    </>
  );
};

export default Welcome;
