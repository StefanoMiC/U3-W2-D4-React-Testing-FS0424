import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FetchUsers from "../components/FetchUsers";

describe("FetchUsers List functionality", () => {
  it("creates an empty list initially", () => {
    render(<FetchUsers />);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  it("populates the list after the fetch is done, with 10 elements", async () => {
    render(<FetchUsers />);

    const listItems = await screen.findAllByRole("listitem");

    // expect(listItems.length).toBeGreaterThan(0);
    expect(listItems).toHaveLength(10);
  });

  it("returns 4 elements if 'en' is typed in the input field", async () => {
    render(<FetchUsers />);

    // const inputField = screen.getByRole("textbox");
    // const inputField = screen.getByPlaceholderText(/Cerca un utente per nome/i);
    const inputField = screen.getByTestId("filterInput");

    // fireEvent.change(inputField, { target: { value: "en" } });
    const user = userEvent.setup();

    await user.type(inputField, "en");

    const filteredListitems = await screen.findAllByRole("listitem");

    expect(filteredListitems).toHaveLength(4);
  });
});
