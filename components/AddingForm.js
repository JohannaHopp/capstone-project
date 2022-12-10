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
  padding: 1em 0;
  margin: 0.5em;
  border-bottom: 2px solid #e7e7e7;
  grid-column-start: span 2;
  margin-bottom: 70px;
`;

const StyledHeadline = styled.h1`
  margin: 0;
  font-family: san-serif;
  font-size: 2.3em;
  color: var(--green-headline);
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 1.1em;
  margin-left: 1em;
`;

const StyledInput = styled.input`
  border-style: none;
  border-bottom: 3px solid #e7e7e7;
  border-radius: 5px;
  padding: 10px;
  margin: 1em 0 1em 0;
  font-size: 1.1em;
`;

const StyledSubmitButton = styled.button`
  width: 140px;
  height: 30px;
  font-size: 23px;
  border: 1px solid;
  border-radius: 5px;
  background-color: var(--green-button);
  align-self: center;
  border-style: none;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  margin-top: 2em;
`;
