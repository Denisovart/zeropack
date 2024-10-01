import { Link } from "react-router-dom";
import s from "./styles.module.scss"
import logoPng from "@/assets/logo.png"
import logoJpg from "@/assets/logo.jpg"
import Logo from "@/assets/logo.svg"

export const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <img 
                    src={logoPng} 
                    alt="logo" 
                    width={100}
                    height={100}
                />
                <img 
                    src={logoJpg} 
                    alt="logo" 
                    width={100}
                    height={100}
                />
                <Logo
                    width={30} 
                    height={30}
                />
            </div>
            <Link to="/about">
                About
            </Link>
            <Link to="/">
                Home
            </Link>
        </header>
    );
}
 