import { useState } from "react";
import React from "react";
import Welcome from "./welcome";

function HomePage() {
  const [fname, setName] = useState("Krishna");
  const Change = () => {
    console.log("Button Clicked");
    setName("Sai Krishna");
  };

  return (
    <div>
      <Welcome name={fname} />
      <a href="/data">Data</a>
      <br></br>
      <a href="/fruit">List</a>
      <br></br>
      <a href="/form">Form</a>
      <a href="/welcome">Welcome</a>
      <button onClick={Change}>Submit</button>
    </div>
  );
}

export default HomePage;
