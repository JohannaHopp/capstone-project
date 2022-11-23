import styled from "styled-components";

export default function Overview({ bankAccount }) {
  return (
    <main>
      <StyledHeader>
        <StyledHeadline>Willkommen {bankAccount.name}</StyledHeadline>
      </StyledHeader>
      <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
      <StyledDiv>{bankAccount.kontostand}€</StyledDiv>
    </main>
  );
}

const StyledHeader = styled.header`
  padding-bottom: 4%;
  margin: 0%;
  border-bottom: 2px solid black;
`;

const StyledHeadline = styled.h1`
  margin: 7% 0% 10%;
  font-family: san-serif;
  font-size: 2.1em;
  color: var(--red-headline);
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin: 15% 1% 0%;
  font-size: 1em;
`;

const StyledDiv = styled.section`
  margin: 5% 1% 0%;
  border: 2px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 345%;
`;
