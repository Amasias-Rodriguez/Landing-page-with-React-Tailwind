import logo from "../assets/logo.svg"
import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <header className="relative">
            <img src={logo} alt="logo" />
            <Navbar />
        </header>
    )
}
