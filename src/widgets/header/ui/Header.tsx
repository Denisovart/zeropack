import { Link } from "react-router-dom";
import s from "./styles.module.scss"

export const Header = () => {
    return (
        <header className={s.header}>
            <Link to="/about">
                About
            </Link>
            <Link to="/">
                Home
            </Link>
        </header>
    );
}
 