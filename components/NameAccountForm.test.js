import { userEvent } from "@storybook/testing-library";
import "@testing-library/jest-dom";
import { getByLabelText, render, screen } from "@testing-library/react";

import NameAccountForm from "./NameAccountForm";

describe("NameAccountForm", () => {
  it("should render", () => {
    render(<NameAccountForm />);
  });

  it("type name in name input", () => {
    render(<NameAccountForm />);

    const nameInput = screen.getByRole("textbox", {
      name: /bitte gib deinen namen an:/i,
    });
    userEvent.type(nameInput, "mia");
  });

  it("type kontostand in kontostand input", () => {
    render(<NameAccountForm />);

    const kontoInput = screen.getByLabelText(/kontostand/i);

    userEvent.type(kontoInput, 123);
  });

  /* it("only numbers in kontostand input", () => {
    render(<NameAccountForm />);

    const input = getByLabelText(/kontostand/i);

    expect(input).toHaveAttribute("type", "number");
  });

  it.todo("only letters in name input");

  it.todo("submit button works", ()=> {


  });*/
});
