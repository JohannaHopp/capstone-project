import { userEvent } from "@storybook/testing-library";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NameAccountForm from "./NameAccountForm";

describe("NameAccountForm", () => {
  it("should render", () => {
    render(<NameAccountForm />);
  });

  it("type name in name input", () => {
    render(<NameAccountForm />);

    userEvent.type(screen.getByLabelText(/name/i), "Max Mustermann");
  });

  it("type kontostand in kontostand input", () => {
    render(<NameAccountForm />);

    userEvent.type(screen.getByLabelText(/kontostand/i), 3213);
  });

  it.todo("only numbers in kontostand input");
  it.todo("only letters in name input");
  it.todo("submit button works");
});
