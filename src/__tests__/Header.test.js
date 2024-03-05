import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/UI/Header";

import { fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Header", () => {
  test("renders Header component", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeDefined();
  });

  test("navigates to home page when logo is clicked", () => {
    // Mock the navigate function
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Router>
        <Header />
      </Router>
    );

    const logo = screen.getByAltText("AI Javascript");
    fireEvent.click(logo);

    // Verify that the navigate function was called with the correct argument
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  // test("navigates to correct routes when links are clicked", () => {
  //   render(
  //     <Router>
  //       <Header />
  //     </Router>
  //   );
  //   const aboutLink = screen.getByText("About");
  //   fireEvent.click(aboutLink);
  //   expect(mockNavigate).toHaveBeenCalledWith("/about");

  //   const pricingLink = screen.getByText("Pricing");
  //   fireEvent.click(pricingLink);
  //   expect(mockNavigate).toHaveBeenCalledWith("/pricing");
  // });

  // Additional tests for component structure and styling can be added here
});
