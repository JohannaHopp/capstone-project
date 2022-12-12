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

      <StyledLink href="/delete">löschen</StyledLink>

      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledHeader = styled.header`
  padding: 1em 0;
  margin: 0.5em;
  border-bottom: 2px solid #e7e7e7;
  grid-column-start: span 2;
  margin-bottom: 40px;
`;

const StyledHeadline = styled.h1`
  margin: 0;
  font-family: san-serif;
  font-size: 2.3em;
  color: var(--headline);
  text-align: center;
`;

const StyledLink = styled(Link)`
  width: 140px;
  height: 30px;
  text-align: center;
  font-size: 23px;
  border-radius: 5px;
  background-color: var(--red-button);
  color: black;
  z-index: 1;
  border-style: none;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  text-decoration: none;
  position: fixed;
  right: 21px;
  bottom: 50px;
`;
