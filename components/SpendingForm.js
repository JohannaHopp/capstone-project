import { useRouter } from "next/router";
import styled from "styled-components";
import Footer from "./Footer";

export default function TransactionForm({ onAddEntry, title }) {
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
        <StyledSubmitButton type="submit">bestätigen</StyledSubmitButton>
      </StyledForm>
      <Footer />
    </main>
  );
}

const StyledHeader = styled.header`
  padding-bottom: 1em;
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

const StyledForm = styled.form`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 1em;
`;

const StyledInput = styled.input`
  border-style: none;
  border-bottom: 3px solid #e7e7e7;
  border-radius: 5px;
  padding: 3px;
  margin: 1em 0 1em 0;
  font-size: 1em;
`;

const StyledSubmitButton = styled.button`
  width: 140px;
  height: 30px;
  font-size: 23px;
  color: black;
  border-radius: 5px;
  background-color: var(--green-button);
  align-self: center;
  border-style: none;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  margin-top: 2em;
`;
