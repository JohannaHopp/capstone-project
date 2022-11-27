import styled from "styled-components";
import { useRouter } from "next/router";

export default function Overview({ bankAccount, spendingValues }) {
  const router = useRouter();
  let newKontostand = 0;
  let allSpendingsTogether = 0;

  if (spendingValues.length > 0) {
    spendingValues.map((spendingValues) => {
      allSpendingsTogether = allSpendingsTogether + parseFloat(spendingValues.spending);
    });
  }

  newKontostand = bankAccount.kontostand - allSpendingsTogether;

  return (
    <main>
      <StyledHeader>
        <StyledHeadline>Willkommen {bankAccount.name}</StyledHeadline>
      </StyledHeader>
      <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
      <StyledDiv>{newKontostand}€</StyledDiv>
      <MinusBtn onClick={() => router.push("/moneyspending")}>-</MinusBtn>
      <h3>Zahlungsverlauf</h3>
      <ul>
        {spendingValues.map((spendingValues) => (
          <li>
            {spendingValues.spendFor}&nbsp;
            {spendingValues.spending}€
          </li>
        ))}
      </ul>
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
