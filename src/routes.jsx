import { HomePage } from "./components/HomePage";
import { ShopPage } from "./components/ShopPage";
import App from "./App";

const routes = [
    {
        path: "/",
        element: <App />,
      },
      {
        path: "homepage",
        element: <HomePage />
      },
      {
        path: "shoppage",
        element: <ShopPage />
      },
    ];

    export default routes;