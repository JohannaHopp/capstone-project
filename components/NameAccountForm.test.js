import { userEvent } from "@storybook/testing-library";
import "@testing-library/jest-dom";
import { getByLabelText, render, screen } from "@testing-library/react";

import NameAccountForm from "./NameAccountForm";

describe("NameAccountForm", () => {
  it("should render", () => {
    render(<NameAccountForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const bankAccountBalanceInput = screen.getByLabelText(/bankAccountBalance/i);

    expect(nameInput).toHaveValue("");
    expect(bankAccountBalanceInput).toHaveValue("");
  });
});
/*  it("type name in name input", async () => {
    render(<NameAccountForm />);
    const name = "Mia";

    const nameInput = screen.getByLabelText(/name/i);

    await userEvent.type(nameInput, name);

    expect(nameInput).toHaveValue(name);
  });

it("type bankAccountBalance in bankAccountBalance input", async () => {
  render(<NameAccountForm />);

  const bankAccountBalance = 4212;

  const bankAccountBalanceInput = screen.getByLabelText(/bankAccountBalance/i);

  await userEvent.type(bankAccountBalanceInput, bankAccountBalance);

  expect(bankAccountBalanceInput).toHaveValue(bankAccountBalance);
});

   it("only numbers in bankAccountBalance input", () => {
    render(<NameAccountForm />);

    const input = getByLabelText(/bankAccountBalance/i);

    expect(input).toHaveAttribute("type", "number");
  });

  it.todo("only letters in name input");

  it.todo("submit button works", ()=> {


  });*/
