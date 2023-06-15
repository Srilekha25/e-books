import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom/extend-expect";

const queryClient = new QueryClient();

const renderHeader = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe("Header", () => {
  it("Should display title on top of the page", () => {
    renderHeader();
    expect(screen.getByText("Books on Flowers")).toBeInTheDocument();
  });

  it("expect sort By to be in the document", () => {
    renderHeader();
    expect(screen.getByText("Sort By:")).toBeInTheDocument();
  });

  it("Select Dropdown has 'None' when the page loads", () => {
    renderHeader();
    const select = screen.getByRole("select");
    expect(select).toHaveValue("None");
  });

  it("Should update selected value to Author upon selecting the Author option from the select dropdown", () => {
    renderHeader();
    const select = screen.getByRole("select");
    expect(select).toHaveValue("None");
    fireEvent.change(select, { target: { value: "Author" } });
    expect(select).toHaveValue("Author");
  })

  it("Should update selected value to Title upon selecting the Title option from the select dropdown", () => {
    renderHeader();
    const select = screen.getByRole("select");
    expect(select).toHaveValue("None");
    fireEvent.change(select, { target: { value: "Title" } });
    expect(select).toHaveValue("Title");
  })

  it("Should update selected value to Published Date upon selecting the Published Date option from the select dropdown", () => {
    renderHeader();
    const select = screen.getByRole("select");
    expect(select).toHaveValue("None");
    fireEvent.change(select, { target: { value: "Published Date" } });
    expect(select).toHaveValue("Published Date");
  })
});

