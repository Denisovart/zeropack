import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <footer>This is footer</footer>
        </>
    );
}