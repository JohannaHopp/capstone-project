import { createElement, useState } from "react";

export default function NameAccountForm() {
  const [input, setInput] = useState({
    name: "",
    kontostand: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Bitte verrate uns deinen Namen:</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <label htmlFor="kontostand">und jetzt gib bitte deinen Kontostand an:</label>
        <input
          type="number"
          name="kontostand"
          placeholder="Kontostand (in €)"
          onChange={handleChange}
          required
        />
        <button type="submit">bestätigen</button>
      </form>
    </>
  );
}
