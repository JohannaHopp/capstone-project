import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

export default function Moneyspending({ spendingValues, onAddSpendingValues }) {
  return (
    <>
      <TransactionForm title="Ausgaben" onAddEntry={onAddSpendingValues} />
    </>
  );
}
