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
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin: 1em 0;
  padding-bottom: 4%;
  font-size: 1em;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 1em;
  font-size: 1em;
`;

const StyledButton = styled.button`
  align-self: center;
  margin-top: 5em;
  width: 140px;
  height: 30px;
  text-align: center;
  font-size: 1.3em;
  border-radius: 5px;
  background-color: var(--green-button);
  color: black;
`;
