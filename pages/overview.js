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
      <StyledHeadlineTwo>Zahlungsverlauf</StyledHeadlineTwo>
      <StyledTable>
        {spendingValues.map((spendingValues) => (
          <StyledTr>
            <LeftTd>{spendingValues.spendFor}</LeftTd>
            <RightTd>-{spendingValues.spending}€</RightTd>
          </StyledTr>
        ))}
      </StyledTable>
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
  margin-top: 15%;
  font-size: 50px;
`;

const StyledHeadlineTwo = styled.h2`
  margin-top: 15%;
  font-family: san-serif;
  font-size: 2.1em;
  border-bottom: 2px solid var(--red-headline);
  text-align: center;
`;

const StyledTable = styled.table`
  margin: 0;
  padding: 0;
  text-align: justify;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
`;

const StyledTr = styled.tr`
  border: 2px solid black;
  border-radius: 5px;
  background-color: var(--red-button);
  margin: 2%;
`;

const LeftTd = styled.td`
  float: left;
  padding: 3%;
`;

const RightTd = styled.td`
  float: right;
  padding: 3%;
`;
