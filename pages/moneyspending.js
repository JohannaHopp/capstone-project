import TransactionForm from "../components/SpendingForm";

export default function Moneyspending({ onAddSpendingValues }) {
  return <TransactionForm title="Ausgaben" onAddEntry={onAddSpendingValues} />;
}
