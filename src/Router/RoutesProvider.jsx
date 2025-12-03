import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import RouteErrorPage from "./RouteErrorPage";
import HomePage from "../components/layouts/Home/HomePage";
import Plants from "../components/layouts/Plants/Plants";
import PlantDetailsPage from "../components/layouts/PlantDetails/PlantDetailsPage";
import MyProfilePage from "../components/layouts/MyProfile/MyProfilePage";
import LoginPage from "../components/layouts/Auth/LoginPage";
import Register from "../components/layouts/Auth/Register";
import ForgotPassPage from "../components/layouts/Auth/ForgotPassPage";
import LoginChecker from "./LoginChecker";

const RoutesProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <RouteErrorPage></RouteErrorPage>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "/plants",
          element: <Plants></Plants>,
        },
        {
          path: "/plant/:id",
          element: (
            <LoginChecker>
              <PlantDetailsPage></PlantDetailsPage>
            </LoginChecker>
          ),
        },
        {
          path: "/profile",
          element: (
            <LoginChecker>
              <MyProfilePage></MyProfilePage>
            </LoginChecker>
          ),
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/forgot",
          element: <ForgotPassPage></ForgotPassPage>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default RoutesProvider;
