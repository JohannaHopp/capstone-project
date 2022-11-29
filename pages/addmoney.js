import TransactionForm from "../components/AddingForm";

export default function Moneyadding({ onAddAddingValues }) {
  return <TransactionForm title="Einnahmen" onAddEntry={onAddAddingValues} />;
}
