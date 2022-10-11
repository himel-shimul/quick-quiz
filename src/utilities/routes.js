
import Main from "../components/Main";
import Home from "../Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> ,
        errorElement: <errorElement></errorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);


export default router;