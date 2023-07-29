import burgerMenu from '../assets/icon-hamburger.svg'



export const Navbar = () => {
    return (
        <nav>
            <ul className='bg-white w-[329px] h-[305px] absolute 
        left-0 right-0 mx-auto top-[106px] flex flex-col items-center place-content-around
        after:content[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white'>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Projects</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className=''>
                <img src={burgerMenu} alt="burgermenu" />
            </div>
        </nav>

    )
}
