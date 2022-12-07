import { useRouter } from "next/router";
import styled from "styled-components";
import Footer from "./Footer";

export default function TransactionForm({ onAddEntry, title, label }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEntry(data);
    router.push("./overview");
  }

  const router = useRouter();

  return (
    <main>
      <StyledHeader>
        <StyledHeadline>{`${title}`}</StyledHeadline>
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="adding">{`${label}`}:</StyledLabel>
        <StyledInput
          type="number"
          step="0.01"
          min="0"
          id="adding"
          name="adding"
          placeholder="Betrag in €"
          required
        />
        <StyledLabel htmlFor="addFor">für:</StyledLabel>
        <StyledInput
          type="text"
          id="addFor"
          name="addFor"
          placeholder=" kurze Beschreibung"
          required
        />
        <StyledSubmitButton type="submit">bestätigen</StyledSubmitButton>
      </StyledForm>
      <Footer />
    </main>
  );
}

const StyledHeader = styled.header`
  padding-bottom: 1em;
  border-bottom: 2px solid black;
  grid-column-start: span 2;
`;

const StyledHeadline = styled.h1`
  margin: 0;
  font-family: san-serif;
  font-size: 2.3em;
  color: var(--red-headline);
  text-align: center;
`;

const StyledForm = styled.form`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 1em;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 3px;
  margin: 0.5em 0 1em 0;
  font-size: 1em;
`;

const StyledSubmitButton = styled.button`
  width: 140px;
  height: 30px;
  font-size: 1em;
  border: 1px solid;
  border-radius: 5px;
  background-color: var(--green-button);
  align-self: center;
`;
