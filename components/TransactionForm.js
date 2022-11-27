import { useRouter } from "next/router";
import styled from "styled-components";

export default function TransactionForm({ onAddEntry, title }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEntry(data);
  }

  const router = useRouter();

  return (
    <main>
      <StyledHeader>
        <StyledHeadline>{`${title}`}</StyledHeadline>
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="spending">ausgegeben:</StyledLabel>
        <StyledInput
          type="number"
          step="0.01"
          min="0"
          id="spending"
          name="spending"
          placeholder="Betrag in €"
          required
        />
        <StyledLabel htmlFor="spendFor">für:</StyledLabel>
        <StyledInput
          type="text"
          id="spendFor"
          name="spendFor"
          placeholder=" kurze Beschreibung"
          required
        />
        <ButtonGroup>
          <StyledCancelButton onClick={() => router.push("./overview")}>zurück</StyledCancelButton>
          <StyledSubmitButton type="submit" onClick={() => router.push("./overview")}>
            bestätigen
          </StyledSubmitButton>
        </ButtonGroup>
      </StyledForm>
    </main>
  );
}

const StyledHeader = styled.header`
  padding-bottom: 3%;
  margin: 0%;
  border-bottom: 2px solid black;
`;

const StyledHeadline = styled.h1`
  margin: 5% 0% 5%;
  font-family: san-serif;
  font-size: 2.1em;
  color: var(--red-headline);
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1%;
`;

const StyledLabel = styled.label`
  margin: 2% 0% 2%;
  padding-bottom: 4%
  font-size: 1em;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 1%;
  margin-bottom: 5%;
  font-size: 1em;
`;

const ButtonGroup = styled.div`
margin-top: 80%;
display: flex;
flex-direction row;
align-items: flex-end;
justify-content: space-between;
`;

const StyledCancelButton = styled.button`
  justify-content: flex-start;
  width: 140px;
  font-size: 1em;
  border-radius: 5px;
  background-color: var(--back-button);
`;

const StyledSubmitButton = styled.button`
  margin: ;
  width: 140px;
  font-size: 1em;
  border-radius: 5px;
  background-color: var(--green-button);
`;
