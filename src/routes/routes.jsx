import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
]);

export default routes;
