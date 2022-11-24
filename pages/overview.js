import styled from "styled-components";
import { useRouter } from "next/router";

export default function Overview({ bankAccount }) {
  const router = useRouter();
  return (
    <main>
      <StyledHeader>
        <StyledHeadline>Willkommen {bankAccount.name}</StyledHeadline>
      </StyledHeader>
      <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
      <StyledDiv>{bankAccount.kontostand}€</StyledDiv>
      <MinusBtn onClick={() => router.push("/moneyspending")}>-</MinusBtn>
    </main>
  );
}

const StyledHeader = styled.header`
  padding-bottom: 3%;
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

const MinusBtn = styled.button`
  background-color: var(--red-button);
  border-radius: 5px;
  width: 45%;
  margin-top: 20%;
  font-size: 50px;
`;
