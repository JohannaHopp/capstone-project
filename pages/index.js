import styled from "styled-components";
import NameAccountForm from "../components/NameAccountForm";
import { useState } from "react";

export default function Home() {
  const [bankAccount, setBankAccount] = useState([]);

  function addAccountBalanceAndName(balanceAndName) {
    setBankAccount(balanceAndName);
  }

  return (
    <StyledMain>
      <StyledHeadlineOne>Willkommen beim</StyledHeadlineOne>
      <StyledHeadlineTwo>Money-Manager!</StyledHeadlineTwo>
      <NameAccountForm onAddEntry={addAccountBalanceAndName} />
      <StyledHeadlineThree>Hallo {bankAccount.name},</StyledHeadlineThree>
      <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
      <StyledSection>{bankAccount.kontostand}€</StyledSection>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5%;
`;

const StyledHeadlineOne = styled.h1`
  margin: 10% 2% 0%;
  font-size: 20px;
  text-align: left;
`;

const StyledHeadlineTwo = styled.h2`
  color: var(--red-headline);
  font-family: san-serif;
  font-style: italic;
  font-size: 250%;
  text-align: right;
  margin: 0% 2% 10%;
  padding-top: 1%;
`;

const StyledHeadlineThree = styled.h3`
  margin: 10% 2% 0%;
  font-size: 20px;
`;

const StyledParagraph = styled.p`
  margin: 5% 2% 0%;
  font-size: 15px;
`;

const StyledSection = styled.section`
  margin: 5% 2% 0%;
  border: 2px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 5em;
`;
