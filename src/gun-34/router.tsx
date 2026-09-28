import { createBrowserRouter } from "react-router";
import { Home, ItemList, ItemDetail, NotFound } from "./pages";
import { Layout } from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Tüm rotaları sarmalayan ana kabuk
    children: [
      {
        index: true, // Ana yol ("/") ile eşleştiğinde varsayılan olarak bu render edilir
        element: <Home />,
      },
      {
        path: "items",
        element: <ItemList />,
      },
      {
        path: "items/:id",
        element: <ItemDetail />,
      },
      {
        path: "*", // Eşleşmeyen tüm adresler buraya düşer
        element: <NotFound />,
      },
    ],
  },
]);
