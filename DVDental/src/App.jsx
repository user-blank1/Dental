import "./App.css";
import Contacts from "./Pages/contacts/contacts.jsx";
import Index from "./Pages/index/index.jsx";
import Main from "./Comps/Main.jsx";
import More from "./Pages/More/More.jsx";
import Paslaugos from "./Pages/Paslaugos/Paslaugos.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, NavLink } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/more",
                element: <More />,
            },
            {
                path: "/paslaugos",
                element: <Paslaugos />,
            },
        ],
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
