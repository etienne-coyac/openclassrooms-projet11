import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../views/AboutPage";
import HomePage from "../views/HomePage";
import HousingPage from "../views/HousingPage";
import Main from "../views/Main";
import NotFoundPage from "../views/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/fiche-logement",
        element: <HousingPage />
      },
      {
        path: "/a-propos",
        element: <AboutPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]);
