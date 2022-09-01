import { render, screen } from "@testing-library/react";
import { withBrowserRouter } from "../helpers/helpers";

import TodoFooter from "./TodoFooter";

// Case sensitive; will match all of these:
// 0 tasks left
// 1 task left
// <n> tasks left
// 0 task left (wrong, but can't be fixed with just a regex)
// <n> task left (likewise)
// Will NOT match any of these:
// 0 TASKS left
// 5 TaSkS LeFt
// task left *or* tasks left (*some* number has to be present)
const footerTextRegex = /[0-9]+ tasks? left/;

describe("TodoFooter", () => {
  it("does not render with no props", () => {
    render(withBrowserRouter(<TodoFooter />));
    const todoFooter = screen.queryByText(footerTextRegex);
    expect(todoFooter).not.toBeInTheDocument();
  })

  it("renders value passed as prop", () => {
    render(withBrowserRouter(<TodoFooter numberOfIncompleteTasks={5} />));
    const todoFooter = screen.getByText(footerTextRegex);
    expect(todoFooter.textContent).toBe("5 tasks left");
  })

  it("says 'tasks' when number of tasks is 0", () => {
    render(withBrowserRouter(<TodoFooter numberOfIncompleteTasks={0} />));
    const todoFooter = screen.getByText(footerTextRegex);
    expect(todoFooter.textContent).toBe("0 tasks left");
  })

  it("says 'task' when number of tasks is 1", () => {
    render(withBrowserRouter(<TodoFooter numberOfIncompleteTasks={1} />));
    const todoFooter = screen.getByText(footerTextRegex);
    expect(todoFooter.textContent).toBe("1 task left");
  })

  it("renders nothing with an invalid prop", () => {
    render(withBrowserRouter(<TodoFooter numberOfIncompleteTasks={NaN} />));
    const todoFooter1 = screen.queryByText(footerTextRegex);
    expect(todoFooter1).not.toBeInTheDocument();

    render(withBrowserRouter(<TodoFooter numberOfIncompleteTasks={undefined} />));
    const todoFooter2 = screen.queryByText(footerTextRegex);
    expect(todoFooter2).not.toBeInTheDocument();

    render(withBrowserRouter(<TodoFooter numberOfIncompleteTasks={null} />));
    const todoFooter3 = screen.queryByText(footerTextRegex);
    expect(todoFooter3).not.toBeInTheDocument();

    render(withBrowserRouter(<TodoFooter numberOfIncompleteTasks={""} />));
    const todoFooter4 = screen.queryByText(footerTextRegex);
    expect(todoFooter4).not.toBeInTheDocument();

    render(withBrowserRouter(<TodoFooter numberOfIncompleteTasks={true} />));
    const todoFooter5 = screen.queryByText(footerTextRegex);
    expect(todoFooter5).not.toBeInTheDocument();
  })
})
