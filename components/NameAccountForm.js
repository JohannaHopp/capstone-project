import React, { useState } from "react";

export default function NameAccountForm() {
  const [name, setName] = useState("");
  const [kontostand, setKontostand] = useState("");
  const [newValue, setNewValue] = useState([]);

  const submitData = (event) => {
    event.preventDefault();
    const newData = { name: name, kontostand: kontostand };
    setNewValue([...newValue, newData]);
  };

  return (
    <>
      <form onSubmit={submitData}>
        <label htmlFor="name">Bitte verrate uns deinen Namen:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="kontostand">und jetzt gib bitte deinen Kontostand an:</label>
        <input
          type="number"
          name="kontostand"
          placeholder="Kontostand (in €)"
          value={kontostand}
          onChange={(event) => setKontostand(event.target.value)}
          required
        />
        <button type="submit">bestätigen</button>
      </form>

      <div>
        {newValue.map((values) => {
          return (
            <>
              <h3>Hallo {values.name},</h3>
              <p>dein Kontostand beträgt zur Zeit:</p>
              <div>{values.kontostand}€</div>
            </>
          );
        })}
      </div>
    </>
  );
}
