import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BookCard from "./BookCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom/extend-expect";

const queryClient = new QueryClient();

const book = {
  id: "1",
  volumeInfo: {
    title: "Book Title",
    authors: ["Author 1"],
    description: "Book description",
    imageLinks: {
      thumbnail: "image.jpg",
    },
    previewLink: "https://example.com",
  },
};

const renderBookCard = () => {
  queryClient.setQueryData(["books"], [book]); 
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/BookCard/1`]}>
        <Routes>
          <Route
            path="/BookCard/:id"
            element={<BookCard />}
          />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe("Render Book Card", () => {

  it("renders book details correctly", () => {
    renderBookCard();
    const renderedOutput = screen.debug();
    console.log(renderedOutput);
    expect(screen.getByText("Book Title")).toBeInTheDocument();
    expect(screen.getByText("By")).toBeInTheDocument();
    expect(screen.getByText("Author 1")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Book description")).toBeInTheDocument();
    expect(screen.getByText("Preview")).toHaveAttribute(
      "href",
      "https://example.com"
    );  
  });
  
});
