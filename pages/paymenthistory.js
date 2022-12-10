import styled from "styled-components";
import Footer from "../components/Footer";

export default function HistoryList({ spendingValues, addingValues }) {
  return (
    <>
      <StyledHeader>
        <StyledHeadline>Zahlungsverlauf</StyledHeadline>
      </StyledHeader>
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
      <Footer />
    </>
  );
}

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
