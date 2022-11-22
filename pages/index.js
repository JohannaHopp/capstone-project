import styled from "styled-components";
import NameAccountForm from "../components/NameAccountForm";

export default function Home({ bankAccount, onAddBankAccount }) {
  return (
    <StyledMain>
      <StyledHeadlineOne>Willkommen beim</StyledHeadlineOne>
      <StyledHeadlineTwo>Money-Manager!</StyledHeadlineTwo>
      <NameAccountForm onAddEntry={onAddBankAccount} />
      <StyledHeadlineThree>Hallo {bankAccount.name},</StyledHeadlineThree>
      <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
      <StyledDiv>{bankAccount.kontostand}€</StyledDiv>
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
  margin: 10% 1% 0%;
  font-size: 1.7em;
  text-align: left;
`;

const StyledHeadlineTwo = styled.h2`
  color: var(--red-headline);
  font-family: san-serif;
  font-style: italic;
  font-size: 2.6em;
  text-align: right;
  margin: 0% 1% 10%;
  padding-top: 1%;
`;

const StyledHeadlineThree = styled.h3`
  margin: 10% 1% 0%;
  font-size: 20px;
`;

const StyledParagraph = styled.p`
  margin: 5% 1% 0%;
  font-size: 15px;
`;

const StyledDiv = styled.section`
  margin: 5% 1% 0%;
  border: 2px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 345%;
`;
