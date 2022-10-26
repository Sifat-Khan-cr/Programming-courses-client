import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import CourseDetail from "../Pages/CourseDeatail/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import Blog from "../Pages/Shared/Blog/Blog";
import Faq from "../Pages/Shared/FAQ/Faq";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUP/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    }


])