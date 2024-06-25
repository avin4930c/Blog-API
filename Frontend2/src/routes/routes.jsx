import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ErrorPage } from '../errorPage';
import MainPage from '../pages/mainPage';
import DetailPage from '../pages/detailPage';
import AddBlogForm from '../components/addBlogForm';
import SignupForm from '../components/signupForm';
import LoginForm from '../components/loginForm';

function Route() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/signup',
            element: <SignupForm />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/login',
            element: <LoginForm />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/addBlog',
            element: <AddBlogForm />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/blog/:id',
            element: <DetailPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: '*',
            errorElement: <ErrorPage />,
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export { Route }