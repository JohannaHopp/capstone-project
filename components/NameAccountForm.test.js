import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import NameAccountForm from "./NameAccountForm";

describe("NameAccountForm", () => {
  it("should render", () => {
    render(<NameAccountForm />);
  });
});
