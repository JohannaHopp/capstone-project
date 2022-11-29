import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Overview({ bankAccount, spendingValues }) {
  const router = useRouter();
  let newbankAccountBalance = 0;
  let allSpendingsTogether = 0;

  if (spendingValues.length > 0) {
    spendingValues.map((spendingValues) => {
      allSpendingsTogether = allSpendingsTogether + parseFloat(spendingValues.spending);
    });
  }

  newbankAccountBalance = bankAccount.bankAccountBalance - allSpendingsTogether;

  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeadline>Willkommen {bankAccount.name}</StyledHeadline>
      </StyledHeader>
      <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
      <StyledDiv>{newbankAccountBalance}€</StyledDiv>
      <MinusLink href="/moneyspending">-</MinusLink>
      <StyledHeadlineTwo>Zahlungsverlauf</StyledHeadlineTwo>
      <StyledUl>
        {spendingValues.map((spendingValues) => (
          <StyledList>
            <span>{spendingValues.spendFor}</span>
            <Amount>-{spendingValues.spending}€</Amount>
          </StyledList>
        ))}
      </StyledUl>
    </StyledMain>
  );
}

const StyledHeader = styled.header`
  padding-bottom: 2em;
  border-bottom: 2px solid black;
`;

const StyledHeadline = styled.h1`
  margin: 0;
  font-family: san-serif;
  font-size: 2.1em;
  color: var(--red-headline);
  text-align: center;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin: 15% 1% 0;
  font-size: 1em;
`;

const StyledDiv = styled.section`
  margin: 5% 0;
  border: 2px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 345%;
`;

const MinusLink = styled(Link)`
  background-color: var(--red-button);
  border: 1px solid;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 50px;
  width: 140px;
`;

const StyledHeadlineTwo = styled.h2`
  margin-top: 15%;
  font-family: san-serif;
  font-size: 2.1em;
  border-bottom: 2px solid var(--red-headline);
  text-align: center;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  text-align: justify;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
`;

const StyledList = styled.li`
  border: 2px solid black;
  border-radius: 5px;
  background-color: var(--red-button);
  margin: 2%;
  padding: 5px;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const Amount = styled.span`
  justify-self: end;
`;
