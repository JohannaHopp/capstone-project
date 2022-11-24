import styled from "styled-components";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  return (
    <main>
      <header>
        <h1>Ausgaben</h1>
      </header>
      <form>
        <label htmlFor="spending">ausgegeben:</label>
        <input
          type="number"
          step="0.01"
          id="spending"
          name="spending"
          placeholder="Betrag in €"
          required
        />
        <label htmlFor="spendFor">für:</label>
        <input
          type="text"
          id="spendFor"
          name="spendFor"
          placeholder=" kurze Beschreibung"
          maxLength={30}
          required
        />
        <button onClick={() => router.push("./overview")}>abbrechen und zurück</button>
        <button type="submit">bestätigen</button>
      </form>
      <h2>Zahlungsverlauf</h2>
    </main>
  );
}
