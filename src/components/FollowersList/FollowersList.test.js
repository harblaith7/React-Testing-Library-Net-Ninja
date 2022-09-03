import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { withBrowserRouter } from "../helpers/helpers";

import FollowersList from "./FollowersList";

import axios from "axios";

jest.mock("axios");

describe("FollowersList", () => {
  beforeEach(() => {
    axios.mockImplementation(() => ({
      get: jest.fn()
    }));

    axios.get.mockResolvedValue({
      data: {
        results: [
          {
            name: {
              first: "Laith",
              last: "Harb"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg"
            },
            login: {
              username: "ThePhonyGOAT"
            }
          }
        ]
      }
    })
  })
  it("initially renders empty container with no items", () => {
    render(withBrowserRouter(<FollowersList />));
    const list = screen.getByTestId("followerslist-container");
    const items = list.querySelectorAll('.follower-item');
    expect(list).toBeInTheDocument();
    expect(items.length).toBe(0);
  })

  it("fetches list from API", async () => {
    render(withBrowserRouter(<FollowersList />));
    expect(axios.get).toHaveBeenCalled();
  })

  it("renders items based on returned data", async () => {
    render(withBrowserRouter(<FollowersList />));
    const item = await screen.findByTestId('follower-item-0');
    expect(item).toBeInTheDocument();
  })
})

