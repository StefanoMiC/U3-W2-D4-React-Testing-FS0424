import { fireEvent, render, screen } from "@testing-library/react";
import ToggleSection from "../components/ToggleSection";

describe("Toggle section functionality", () => {
  it("mounts the button correctly", () => {
    render(<ToggleSection />);

    const button = screen.getByText(/mostra sezione/i);

    expect(button).toBeInTheDocument();
  });

  it("has card hidden by default", () => {
    render(<ToggleSection />);

    // selezione generica di un elemento immagine
    // (funziona finché l'ambito è circoscritto e l'immagine della card è l'unica in quel contesto)
    // const image = screen.queryByRole("img"); // dovrebbe tornare null
    const image = screen.queryByAltText("wall of pinned cards"); // dovrebbe tornare null
    console.log("image", image);
    // quindi ora ci aspettiamo che image contenga il valore null
    // expect(image).toBeNull();
    expect(image).not.toBeInTheDocument();
  });

  it("checks card/image presence after button click", () => {
    render(<ToggleSection />);
    const button = screen.getByText(/mostra sezione/i);
    fireEvent.click(button);

    const cardImage = screen.getByAltText("wall of pinned cards");
    expect(cardImage).toBeInTheDocument();
  });

  it("checks button text to be changed after click", () => {
    render(<ToggleSection />);
    const button = screen.getByText(/mostra sezione/i);

    fireEvent.click(button);

    const buttonChanged = screen.getByText(/nascondi sezione/i);
    expect(buttonChanged).toBeInTheDocument();
  });

  it("verifies the toggle functionality - card/image should not be visibile after dblClick", () => {
    render(<ToggleSection />);
    const button = screen.getByText(/mostra sezione/i);

    fireEvent.click(button);
    fireEvent.click(button);

    const cardImage = screen.queryByAltText("wall of pinned cards");

    expect(cardImage).not.toBeInTheDocument();
  });
});
