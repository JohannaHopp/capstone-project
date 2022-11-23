import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [bankAccount, setBankAccount] = useLocalStorage(
    "bankAccount",

    {}
  );

  function addBankAccount(bankAccount) {
    setBankAccount((previousBankAccount) => {
      return {
        ...previousBankAccount,
        name: bankAccount.name,
        kontostand: bankAccount.kontostand,
      };
    });
  }

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} bankAccount={bankAccount} onAddBankAccount={addBankAccount} />
    </>
  );
}

export default MyApp;
