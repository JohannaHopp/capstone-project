import { useState } from "react";

export default function NameAccountForm() {
  const [username, setUsername] = useState("");
  const [account, setAccount] = useState("");

  return (
    <>
      <form>
        <label htmlFor="name">Bitte verrate uns deinen Namen:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label htmlFor="kontostand">und jetzt gib bitte deinen Kontostand an:</label>
        <input
          type="number"
          name="kontostand"
          placeholder="Kontostand (in €)"
          value={account}
          onChange={(event) => setAccount(event.target.value)}
          required
        />
        <button type="submit">submit</button>
      </form>
      <p>{username}</p>
      <p>{account}</p>
    </>
  );
}
