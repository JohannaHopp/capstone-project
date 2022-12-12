import Footer from "../components/Footer";
import styled from "styled-components";

export default function Delete() {
  function handleClick() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeadline>Löschen</StyledHeadline>
      </StyledHeader>
      <StyledParagraph>
        Bist du sicher,
        <br /> dass du <br />
        <StyledSpan>alles löschen</StyledSpan>
        <br /> möchtest?
      </StyledParagraph>
      <StyledButton onClick={handleClick}>löschen</StyledButton>
      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  padding: 1em 0;
  margin: 0.5em;
  border-bottom: 2px solid #e7e7e7;
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
  justify-content: center;
  font-size: 2em;
  text-align: center;
  grid-column-start: span 2;
`;

const StyledSpan = styled.span`
  color: red;
`;

const StyledButton = styled.button`
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
  position: fixed;
  bottom: 28px;
  right: 21px;
  bottom: 50px;
`;
