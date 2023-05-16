import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

const renderHeader = () => {
    render(
        <MemoryRouter>
            <Header/>
        </MemoryRouter>
    )
}

describe("Header", () => {
    test("Should display title on top of the page", () => {
        renderHeader();
        expect(screen.getByText("Books on Flowers")).toBeInTheDocument();
    })
})