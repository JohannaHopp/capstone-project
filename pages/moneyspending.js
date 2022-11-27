import TransactionForm from "../components/TransactionForm";

export default function Moneyspending({ onAddSpendingValues }) {
  return (
    <>
      <TransactionForm title="Ausgaben" onAddEntry={onAddSpendingValues} />
    </>
  );
}
