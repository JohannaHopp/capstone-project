import SpendingForm from "../components/SpendingForm";

export default function Moneyspending({ spendingValues, onAddSpendingValues }) {
  return (
    <>
      <SpendingForm onAddEntry={onAddSpendingValues} />
      <h3>Zahlungsverlauf</h3>
      <ul>
        {spendingValues.map((spendingValues) => (
          <li>
            {spendingValues.spendFor}
            {spendingValues.spending}
          </li>
        ))}
      </ul>
    </>
  );
}
