import userEvent from "@storybook/testing-library";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NameAccountForm from "./NameAccountForm";

describe("NameAccountForm", () => {
  it("should display two labels/inputs and one button", () => {
    render(<NameAccountForm />);

    expect(screen.getAllByRole("label")).toHaveLength(2);
    expect(screen.getAllByRole("input")).toHaveLength(2);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  it("type only letters in name input", async () => {
    render(<NameAccountForm />);

    const input = screen.getByLabelId("name");
    await userEvent.getByPlaceholderText(input, "Mia");
    expect(input).toHaveValue("Mia");
  });

  it("type only numbers in bankAccountBalance input", async () => {
    render(<NameAccountForm />);

    const input = screen.getByLabelText("bankAccountBalance");
    await userEvent.getByPlaceholderText(input, "123");
    expect(input).toHaveValue("123");
  });

  it.todo("submit button works");
});
