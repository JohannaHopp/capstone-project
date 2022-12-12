import styled from "styled-components";
import { useRouter } from "next/router";

export default function NameAccountForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEntry(data);
    router.push("./overview");
  }

  const router = useRouter();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="name">Bitte gib deinen Namen an:</StyledLabel>
      <StyledInput
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        title="Nur Buchstaben möglich"
        pattern="\D+"
        required
      />
      <StyledLabel htmlFor="bankAccountBalance">
        und jetzt gib bitte deinen Kontostand an:
      </StyledLabel>
      <StyledInput
        type="number"
        step="0.01"
        id="bankAccountBalance"
        name="bankAccountBalance"
        placeholder="Kontostand (in €)"
        required
      />
      <StyledButton type="submit">bestätigen</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  flex-direction: column;
  grid-column-start: span 2;
`;

const StyledLabel = styled.label`
  margin: 1em;
  padding-bottom: 4%;
  font-size: 1.1em;
  grid-column-start: span 2;
`;

const StyledInput = styled.input`
  border-style: none;
  border-bottom: 3px solid #e7e7e7;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 1em;
  font-size: 1em;
  grid-column-start: span 2;
`;

const StyledButton = styled.button`
  width: 140px;
  height: 30px;
  text-align: center;
  font-size: 23px;
  border-radius: 5px;
  background-color: var(--green-button);
  color: black;
  border-style: none;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  margin-top: 2em;
  grid-column-start: span 2;
  justify-self: center;
`;
