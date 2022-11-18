import styled from "styled-components";

export default function NameAccountForm({ onAddEntry }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEntry(data);
  };

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
      <StyledLabel htmlFor="kontostand">und jetzt gib bitte deinen Kontostand an:</StyledLabel>
      <StyledInput
        type="number"
        step="0.01"
        max="1000000"
        id="kontostand"
        name="kontostand"
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
  margin: 1%;
`;

const StyledLabel = styled.label`
  margin: 7% 0% 1%;
  font-size: 1.1em;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 1%;
  font-size: 1.1em;
`;

const StyledButton = styled.button`
  margin: 7% 30%;
  font-size: 1.3em;
  border-radius: 5px;
  background-color: var(--green-button);
`;
