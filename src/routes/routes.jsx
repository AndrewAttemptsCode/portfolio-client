import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import HomePage from "../pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <HomePage /> },
    ],
  },
]);

export default routes;
