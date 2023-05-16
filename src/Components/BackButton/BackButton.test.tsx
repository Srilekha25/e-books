import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BackButton from "./BackButton";
import "@testing-library/jest-dom/extend-expect";

const renderBackButton = () => {
  render(
    <MemoryRouter>
      <BackButton />
    </MemoryRouter>
  );
};


describe("Render Back button", () => {
  test("BackButton should render properly", () => {
    renderBackButton();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });
  // test("On Clicking the button should navigate and display all books", () => {
  //   renderBackButton();
  //   fireEvent.click(screen.getByText("Back"));
  //   expect(screen.getByText("Books on Flowers")).toBeInTheDocument();
  // })
});
