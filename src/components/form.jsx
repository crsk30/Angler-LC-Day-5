import React, { useState } from "react";
import "./style.css";

function Form() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      setError("Name is required");
    } else {
      setError("");
      alert(`Form submitted with name: ${name}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      {error && <p className="danger">{error}</p>}
    </form>
  );
}

export default Form;
