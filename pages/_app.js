import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [bankAccount, setBankAccount] = useLocalStorage(
    "bankAccount",

    []
  );

  function addBankAccount(bankAccount) {
    setBankAccount((previousBankAccount) => [
      ...previousBankAccount,
      {
        id: crypto.randomUUID(),
        text: bankAccount,
      },
    ]);
  }

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} bankAccount={bankAccount} onAddBankAccount={addBankAccount} />
    </>
  );
}

export default MyApp;
