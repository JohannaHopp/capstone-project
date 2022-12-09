import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [bankAccount, setBankAccount] = useLocalStorage(
    "bankAccount",

    {}
  );

  const [spendingValues, setSpendingValues] = useLocalStorage(
    "spendingValues",

    []
  );

  const [addingValues, setAddingValues] = useLocalStorage(
    "addingValues",

    []
  );

  function addBankAccount(bankAccount) {
    setBankAccount((previousBankAccount) => {
      return {
        ...previousBankAccount,
        name: bankAccount.name,
        bankAccountBalance: Number(bankAccount.bankAccountBalance),
      };
    });
  }

  function addSpendingValues(spendingValues) {
    setSpendingValues((previousSpendingValues) => [
      ...previousSpendingValues,
      {
        spending: Number(spendingValues.spending),
        spendFor: spendingValues.spendFor,
      },
    ]);
  }

  function addAddingValues(addingValues) {
    setAddingValues((previousAddingValues) => [
      ...previousAddingValues,
      {
        adding: addingValues.adding,
        addFor: addingValues.addFor,
      },
    ]);
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        bankAccount={bankAccount}
        onAddBankAccount={addBankAccount}
        spendingValues={spendingValues}
        onAddSpendingValues={addSpendingValues}
        addingValues={addingValues}
        onAddAddingValues={addAddingValues}
      />
    </>
  );
}

export default MyApp;

/*   const [moneyValues, setMoneyValues] = useLocalStorage(
    "moneyValues",

    []
  ); 
  
  function addMoneyValues(moneyValues) {
    setMoneyValues((previousMoneyValues) => [
      ...previousMoneyValues,
      {
        spending: parseFloat(spendingValues.spending),
        spendFor: spendingValues.spendFor,
        adding: parseFloat(addingValues.add),
        addFor: addingValues.addFor,
      },
    ]);
  }
  
  moneyValues={moneyValues}
        onAddMoneyValues={addMoneyValues}     */
