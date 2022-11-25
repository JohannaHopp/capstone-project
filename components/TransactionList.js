export default function TransactionList({ spendingValues }) {
  return (
    <>
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
