import { userEvent } from "@storybook/testing-library";
import "@testing-library/jest-dom";
import { getByLabelText, render, screen } from "@testing-library/react";

import NameAccountForm from "./NameAccountForm";

describe("NameAccountForm", () => {
  it("should render", () => {
    render(<NameAccountForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const kontostandInput = screen.getByLabelText(/kontostand/i);

    expect(nameInput).toHaveValue("");
    expect(kontostandInput).toHaveValue("");
  });
});
/*  it("type name in name input", async () => {
    render(<NameAccountForm />);
    const name = "Mia";

    const nameInput = screen.getByLabelText(/name/i);

    await userEvent.type(nameInput, name);

    expect(nameInput).toHaveValue(name);
  });

it("type kontostand in kontostand input", async () => {
  render(<NameAccountForm />);

  const kontostand = 4212;

  const kontostandInput = screen.getByLabelText(/kontostand/i);

  await userEvent.type(kontostandInput, kontostand);

  expect(kontostandInput).toHaveValue(kontostand);
});

   it("only numbers in kontostand input", () => {
    render(<NameAccountForm />);

    const input = getByLabelText(/kontostand/i);

    expect(input).toHaveAttribute("type", "number");
  });

  it.todo("only letters in name input");

  it.todo("submit button works", ()=> {


  });*/
