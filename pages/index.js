import styled from "styled-components";
import NameAccountForm from "../components/NameAccountForm";

export default function Home() {
  return (
    <StyledMain>
      <StyledHeadlineOne>Willkommen beim</StyledHeadlineOne>
      <StyledHeadlineTwo>Money-Manager!</StyledHeadlineTwo>
      <NameAccountForm />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5%;
`;

const StyledHeadlineOne = styled.h1`
  margin: 10% 2% 0%;
  font-size: 20px;
  text-align: left;
`;

const StyledHeadlineTwo = styled.h2`
  color: var(--red-headline);
  font-family: san-serif;
  font-style: italic;
  font-size: 250%;
  text-align: right;
  margin: 0% 2% 10%;
  padding-top: 1%;
`;
