import styled from "styled-components";
import NameAccountForm from "../components/NameAccountForm";

export default function Home({ onAddBankAccount }) {
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
`;

const StyledHeadlineOne = styled.h1`
  margin: 5% 2% 0%;
  font-size: 1.7em;
  text-align: left;
  padding-left: 0.5em;
`;

const StyledHeadlineTwo = styled.h2`
  color: var(--red-headline);
  font-family: san-serif;
  font-style: italic;
  font-size: 2.4em;
  text-align: right;
  margin: 0% 2% 15%;
  padding: 1% 0.5em 20px 0;
  border-bottom: 3px outset #e7e7e7;
`;
