import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from './mainPage';
import { ErrorPage } from './errorPage';
import DetailPage from './detailPage';

function Route() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainPage />,
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