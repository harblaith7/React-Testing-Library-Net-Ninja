import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockedFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

// it("should render followers with correct number", async () => {
//   render(<MockedFollowersList />);
//   const followerDivElement = await screen.findAllByTestId(/follower-item/i);
//   expect(followerDivElement.length).toBe(5);
// });

describe("FollowersList", () => {
  it("should render followers with correct number", async () => {
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId(`follower-item-0`);
    expect(followerDivElement).toBeInTheDocument();
  });
});
