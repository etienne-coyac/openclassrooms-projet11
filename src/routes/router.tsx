import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../views/AboutPage";
import HomePage from "../views/HomePage";
import HousingPage from "../views/HousingPage";
import NotFoundPage from "../views/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/not-found",
    element: <NotFoundPage />
  },
  {
    path: "/fiche-logement",
    element: <HousingPage />
  },
  {
    path: "/a-propos",
    element: <AboutPage />
  }
]);
