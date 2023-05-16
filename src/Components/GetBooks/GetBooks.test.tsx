import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import GetBooks from "./GetBooks";
import { render, screen } from "@testing-library/react";
import { mocks } from "../../../_mocks/mocks";
import "@testing-library/jest-dom/extend-expect";

const queryClient = new QueryClient();

jest.mock("../../services/post-services", () => ({
  getAllBooks: jest.fn(() => Promise.resolve(mocks)),
}));

const renderGetBooks = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <GetBooks />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe("tests for GetBooks", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render loading before there are books to display", () => {
    renderGetBooks();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should not render loading after there are books to display", async () => {
    renderGetBooks();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("should render all books", async () => {
    renderGetBooks();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("Author 1")).toBeInTheDocument();
    expect(screen.getByText("Publisher 1")).toBeInTheDocument();
  });

  it("should display error message if there is an error while fetching the data", async() => {
    renderGetBooks();
  });

  it("should display Unknown Title if title value is empty", async() => {
    renderGetBooks();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText("UnKnown Title")).toBeInTheDocument();
  })

  it("should display Unknown Author if Author value is empty", async() => {
    renderGetBooks();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText("UnKnown Author")).toBeInTheDocument();
  })

  it("should display Unknown Publisher if Publisher value is empty", async() => {
    renderGetBooks();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText("No Publisher")).toBeInTheDocument();
  })
});
