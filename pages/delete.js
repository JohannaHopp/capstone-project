import Footer from "../components/Footer";
import styled from "styled-components";

export default function Delete() {
  function handleClick() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <StyledMain>
      <StyledParagraph>
        Bist du sicher,
        <br /> dass du <br />
        <StyledSpan>alles löschen</StyledSpan>
        <br /> möchtest?
      </StyledParagraph>
      <StyledButton onClick={handleClick}>alles löschen</StyledButton>
      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: grid;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  justify-content: center;
  font-size: 3em;
  text-align: center;
`;

const StyledSpan = styled.span`
  color: red;
`;

const StyledButton = styled.button`
  width: 140px;
  height: 30px;
  text-align: center;
  font-size: 1.3em;
  border-radius: 5px;
  background-color: var(--red-button);
  color: black;
  z-index: 1;
  border: 1px solid black;
  position: absolute;
  bottom: 28px;
  right: 0px;
  margin: 1em;
`;
