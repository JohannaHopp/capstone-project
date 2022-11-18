import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NameAccountForm from "./NameAccountForm";

describe("Form", () => {
  it("Check name", () => {
    render(<NameAccountForm />);
    const nameInput = screen.getByLabelText(/name/i);

    expect(nameInput).toHaveValue("");
  });
});
