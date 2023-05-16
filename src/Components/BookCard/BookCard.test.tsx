import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookCard from "./BookCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mocks } from "../../../_mocks/mocks";
import "@testing-library/jest-dom/extend-expect";

const queryClient = new QueryClient();

// const book = {
//   id: "1",
//   volumeInfo: {
//     title: "Title",
//     authors: ["Author 1", "Author 2"],
//     description: "Book Description",
//     imageLinks: {
//       thumbnail: "http://books.google.com/books/content?id=JdphDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//     },
//     previewLink:
//       "https://books.google.com.au/books?id=JdphDwAAQBAJ&printsec=frontcover&dq=flowers&hl=en&cd=1&source=gbs_api#v=onepage&q=flowers&f=false",
//   },
// };

const renderBookCard = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <BookCard />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

jest.mock("../../services/post-services", () => ({
  books: jest.fn(() => Promise.resolve(mocks)),
}));

describe("Render Book Card", () => {
  test("Description to be in the document", () => {
    renderBookCard();
    expect(screen.getByText("Description:")).toBeInTheDocument();
  });
});
