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

  function addBankAccount(bankAccount) {
    setBankAccount((previousBankAccount) => {
      return {
        ...previousBankAccount,
        name: bankAccount.name,
        bankAccountBalance: parseFloat(bankAccount.bankAccountBalance),
      };
    });
  }

  function addSpendingValues(spendingValues) {
    setSpendingValues((previousSpendingValues) => [
      ...previousSpendingValues,
      {
        spending: parseFloat(spendingValues.spending),
        spendFor: spendingValues.spendFor,
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
      />
    </>
  );
}

export default MyApp;
