import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

export default function Moneyspending({ spendingValues, onAddSpendingValues }) {
  return (
    <>
      <TransactionForm title="Ausgaben" onAddEntry={onAddSpendingValues} />
      <h3>Zahlungsverlauf</h3>
      <ul>
        {spendingValues.map((spendingValues) => (
          <li>
            {spendingValues.spendFor}
            {spendingValues.spending}€
          </li>
        ))}
      </ul>
    </>
  );
}
