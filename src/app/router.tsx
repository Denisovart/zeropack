import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { MainLayout } from "@/app/layouts";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
        ]
    },
])