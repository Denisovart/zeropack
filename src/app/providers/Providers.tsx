import { RouterProvider } from "react-router-dom";
import type { Router } from "@remix-run/router/dist/router";

interface IProvidersProps {
    router: Router
}

export const Providers: React.FC<IProvidersProps> = ({ router }) => {
    return (
        <RouterProvider router={router} />
    );
}
 