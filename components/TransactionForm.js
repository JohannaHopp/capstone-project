import { useRouter } from "next/router";

export default function TransactionForm({ onAddEntry, title }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEntry(data);
  }

  const router = useRouter();

  return (
    <main>
      <header>
        <h1>{`${title}`}</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="spending">ausgegeben:</label>
        <input
          type="number"
          step="0.01"
          min="0"
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
          required
        />
        <button onClick={() => router.push("./overview")}>abbrechen und zurück</button>
        <button type="submit" onClick={() => router.push("./overview")}>
          bestätigen
        </button>
      </form>
    </main>
  );
}
