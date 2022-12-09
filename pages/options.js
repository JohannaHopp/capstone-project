import styled from "styled-components";
import Footer from "../components/Footer";
import NameAccountForm from "../components/NameAccountForm";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Options({ onAddBankAccount }) {
  const router = useRouter();

  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeadline>Optionen</StyledHeadline>
      </StyledHeader>
      <NameAccountForm onAddEntry={onAddBankAccount} />

      <StyledLink href="/delete">alles löschen</StyledLink>

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

const StyledLink = styled(Link)`
  align-self: flex-end;
  margin-top: 5em;
  width: 140px;
  height: 30px;
  text-align: center;
  font-size: 1.3em;
  border-radius: 5px;
  background-color: var(--red-button);
  color: black;
  margin-top: 161px;
  z-index: 1;
  border: 1px solid black;
  text-decoration: none;
`;
