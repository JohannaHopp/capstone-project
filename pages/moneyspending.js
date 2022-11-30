import TransactionForm from "../components/spendingForm";

export default function Moneyspending({ onAddSpendingValues }) {
  return <TransactionForm title="Ausgaben" onAddEntry={onAddSpendingValues} />;
}
