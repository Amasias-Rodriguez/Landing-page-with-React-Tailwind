import logo from "../assets/logo.svg"
import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <header className="absolute w-full px-6 pt-8 ">
            <div className="flex place-content-between font-Barlow">
                <img src={logo} alt="logo" />
                <Navbar />
            </div >
        </header>
    )
}
