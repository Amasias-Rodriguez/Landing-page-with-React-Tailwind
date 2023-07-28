import burgerMenu from '../assets/icon-hamburger.svg'



export const Navbar = () => {
    return (
        <nav className='bg-blue-500 w-[329px] h-[305px]'>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div>
                <img src={burgerMenu} alt="" />
            </div>
        </nav>

    )
}
