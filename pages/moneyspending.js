import SpendingForm from "../components/SpendingForm";

export default function Moneyspending({ onAddSpendingValues }) {
  return (
    <>
      <SpendingForm onAddEntry={onAddSpendingValues} />
    </>
  );
}
