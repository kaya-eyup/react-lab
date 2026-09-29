import { RouterProvider } from "react-router/dom";
import { router } from "./gun-34/router";
import { Day35 } from "./gun-35/Day35";

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <Day35 />
    </>
  );
}

export default App;
