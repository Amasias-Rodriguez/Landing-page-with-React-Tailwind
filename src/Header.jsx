import logo from '../assets/logo.svg'
import { Navbar } from '../Navbar'


export const Header = () => {
    return (
        <header className="bg-red-500">
            <img src={logo} alt="logo" />
        </header>
    )
}
