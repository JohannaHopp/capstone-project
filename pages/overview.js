import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Overview({ bankAccount, spendingValues, addingValues }) {
  const router = useRouter();
  let newbankAccountBalance = 0.0;
  let allSpendingsTogether = 0.0;
  let allAddingsTogether = 0.0;

  if (addingValues.length) {
    addingValues.map((addingValues) => {
      allAddingsTogether = Number(allAddingsTogether) + Number(addingValues.adding);
    });
  }

  if (spendingValues.length) {
    spendingValues.map((spendingValues) => {
      allSpendingsTogether = Number(allSpendingsTogether) + Number(spendingValues.spending);
    });
  }

  newbankAccountBalance =
    Number(bankAccount.bankAccountBalance) +
    Number(allAddingsTogether) -
    Number(allSpendingsTogether);

  let money = newbankAccountBalance.toFixed(2);

  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeadline>Willkommen {bankAccount.name}</StyledHeadline>
      </StyledHeader>
      <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
      <StyledDiv>{money}€</StyledDiv>
      <MinusLink href="/moneyspending">-</MinusLink>
      <PlusLink href="/addmoney">+</PlusLink>
      <PaymentLink href="/paymenthistory">Zahlungsverlauf</PaymentLink>
      <OptionsLink href="/options">Optionen</OptionsLink>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledHeader = styled.header`
  padding-bottom: 1em;
  border-bottom: 2px solid black;
  grid-column-start: span 2;
`;

const StyledHeadline = styled.h1`
  margin: 0;
  font-family: san-serif;
  font-size: 2.3em;
  color: var(--red-headline);
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin-top: 3em;
  font-size: 1rem;
  grid-column-start: span 2;
`;

const StyledDiv = styled.section`
  border: 2px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 5em;
  grid-column-start: span 2;
`;

const MinusLink = styled(Link)`
  background-color: var(--red-button);
  border: 1px solid;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 50px;
  width: 160px;
  height: 60px;
  margin-top: 1em;
`;

const PlusLink = styled(Link)`
  background-color: var(--green-button);
  border: 1px solid;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 50px;
  width: 160px;
  height: 60px;
  justify-self: end;
  margin-top: 1em;
`;

const PaymentLink = styled(Link)`
  background-color: var(--back-button);
  border: 1px solid;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 20px;
  width: 160px;
  height: 60px;
  margin-top: 1em;
  padding-top: 17px;
`;

const OptionsLink = styled(Link)`
  background-color: var(--back-button);
  border: 1px solid;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 20px;
  width: 160px;
  height: 60px;
  margin-top: 1em;
  padding-top: 17px;
  justify-self: end;
`;
