import { BrowserRouter } from "react-router-dom";

const withBrowserRouter = Component => {
  return <BrowserRouter>{Component}</BrowserRouter>
}

export {
  withBrowserRouter
}

