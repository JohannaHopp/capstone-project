import styled from "styled-components";
import Footer from "../components/Footer";
import NameAccountForm from "../components/NameAccountForm";

export default function ChangeData({ onAddBankAccount }) {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeadline>Optionen</StyledHeadline>
      </StyledHeader>
      <NameAccountForm onAddEntry={onAddBankAccount} />
      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
