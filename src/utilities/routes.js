
import Blog from "../components/Blog";
import Main from "../components/Main";
import Quizzes from "../components/Quizzes";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> ,
        errorElement: <errorElement></errorElement>,
        children: [
            {
                path: '/',
                loader: () => {
                    return fetch ('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Topics></Topics>
            },
            {
                path: 'quiz/:Id',
                loader: ({params}) => {
                    return fetch (`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
                },
                element: <Quizzes></Quizzes>
            },
            {
                path: 'statistics',
                loader: () => {
                    return fetch ('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Statistics></Statistics>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
]);


export default router;