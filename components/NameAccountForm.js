import React, { useState } from "react";
import styled from "styled-components";

export default function NameAccountForm() {
  const [name, setName] = useState("");
  const [kontostand, setKontostand] = useState("");
  const [newValue, setNewValue] = useState([]);

  const submitData = (event) => {
    event.preventDefault();
    const newData = { name: name, kontostand: kontostand };
    setNewValue([...newValue, newData]);
  };

  return (
    <>
      <StyledForm onSubmit={submitData}>
        <StyledLabel htmlFor="name">Bitte verrate uns deinen Namen:</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <StyledLabel htmlFor="kontostand">und jetzt gib bitte deinen Kontostand an:</StyledLabel>
        <StyledInput
          type="number"
          name="kontostand"
          placeholder="Kontostand (in €)"
          value={kontostand}
          onChange={(event) => setKontostand(event.target.value)}
          required
        />
        <StyledButton type="submit">bestätigen</StyledButton>
      </StyledForm>
      <div>
        {newValue.map((values) => {
          return (
            <>
              <StyledHeadline>Hallo {values.name},</StyledHeadline>
              <StyledParagraph>dein Kontostand beträgt zur Zeit:</StyledParagraph>
              <StyledSection>{values.kontostand} €</StyledSection>
            </>
          );
        })}
      </div>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2%;
  border-top: 2px solid lightgray;
`;

const StyledLabel = styled.label`
  margin: 7% 0% 1%;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 1%;
`;

const StyledButton = styled.button`
  margin: 7% 30%;
  border-radius: 5px;
  background-color: var(--green-button);

  &: hover {
    background-color: var(--green-button-hover);
  }
`;

const StyledHeadline = styled.h3`
  margin: 10% 2% 0%;
  font-size: 20px;
`;

const StyledParagraph = styled.p`
  margin: 5% 2% 0%;
  font-size: 15px;
`;

const StyledSection = styled.section`
  margin: 1% 2% 0%;
  border: 2px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 5em;
`;
