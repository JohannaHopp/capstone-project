import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledGoBackLink href="/overview">zurück</StyledGoBackLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: white;
  height: 100px;
  width: 100%;
  padding: 21px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledGoBackLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 23px;
  width: 140px;
  height: 30px;
  color: black;
  background-color: var(--back-button);
  border: 1px solid;
  border-radius: 5px;
  border-style: none;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;
