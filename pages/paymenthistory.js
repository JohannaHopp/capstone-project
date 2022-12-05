import styled from "styled-components";
import Link from "next/link";

export default function HistoryList({ spendingValues, addingValues }) {
  return (
    <>
      <StyledHeadlineTwo>Zahlungsverlauf</StyledHeadlineTwo>
      <StyledUl>
        {spendingValues.map((spendingValues) => (
          <StyledListItemRed>
            <span>{spendingValues.spendFor}</span>
            <Amount>-{spendingValues.spending}€</Amount>
          </StyledListItemRed>
        ))}
      </StyledUl>
      <StyledUl>
        {addingValues.map((addingValues) => (
          <StyledListItemGreen>
            <span>{addingValues.addFor}</span>
            <Amount>+{addingValues.adding}€</Amount>
          </StyledListItemGreen>
        ))}
      </StyledUl>
      <StyledGoBackLink href="/overview">zurück</StyledGoBackLink>
    </>
  );
}

const StyledHeadlineTwo = styled.h2`
  margin-top: 15%;
  font-family: san-serif;
  font-size: 2.1em;
  border-bottom: 2px solid var(--red-headline);
  text-align: center;
  grid-column-start: span 2;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  text-align: justify;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  grid-column-start: span 2;
`;

const StyledListItemRed = styled.li`
  border: 2px solid black;
  border-radius: 5px;
  background-color: var(--red-button);
  margin: 2%;
  padding: 5px;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const StyledListItemGreen = styled.li`
  border: 2px solid black;
  border-radius: 5px;
  background-color: var(--green-button);
  margin: 2%;
  padding: 5px;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const Amount = styled.span`
  justify-self: end;
`;

const StyledGoBackLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 1em;
  width: 140px;
  height: 30px;
  color: black;
  background-color: var(--back-button);
  border: 1px solid;
  border-radius: 5px;
  float: left;
  padding: 5px;
  margin-left: 7px;
`;
