import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Table from "./Table";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mocks } from "../../../_mocks/mocks";
import "@testing-library/jest-dom/extend-expect";

const queryClient = new QueryClient();

const renderTable = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

jest.mock("../../services/post-services", () => ({
  getAllBooks: jest.fn(() => Promise.resolve(mocks)),
}));

describe("table", () => {
  test("Should display title on top of the page", () => {
    renderTable();
    expect(screen.getByText("Books on Flowers")).toBeInTheDocument();
  });

  test("Should display table on the page", () => {
    renderTable();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  test("Should display title header on the page", () => {
    renderTable();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  test("Should display Authors header on the page", () => {
    renderTable();
    expect(screen.getByText("Authors")).toBeInTheDocument();
  });

  test("Should display publisher header on the page", () => {
    renderTable();
    expect(screen.getByText("publisher")).toBeInTheDocument();
  });

  test("Should display book details on the page", async() => {
    renderTable();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("Author 1")).toBeInTheDocument();
    expect(screen.getByText("Publisher 1")).toBeInTheDocument();
    expect(screen.getByText("UnKnown Title")).toBeInTheDocument();
    expect(screen.getByText("UnKnown Author")).toBeInTheDocument();
    expect(screen.getByText("No Publisher")).toBeInTheDocument();
  });
});
