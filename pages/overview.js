import styled from "styled-components";

export default function Overview({ bankAccount }) {
  return (
    <>
      <StyledHeadline>Willkommen {bankAccount.name}</StyledHeadline>
      <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
      <StyledDiv>{bankAccount.kontostand}€</StyledDiv>
    </>
  );
}

const StyledHeadline = styled.h1`
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
