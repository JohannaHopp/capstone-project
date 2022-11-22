import styled from "styled-components";
import NameAccountForm from "../components/NameAccountForm";

export default function Home({ bankAccount, onAddBankAccount }) {
  return (
    <StyledMain>
      <StyledHeadlineOne>Willkommen beim</StyledHeadlineOne>
      <StyledHeadlineTwo>Money-Manager!</StyledHeadlineTwo>
      <NameAccountForm onAddEntry={onAddBankAccount} />
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
