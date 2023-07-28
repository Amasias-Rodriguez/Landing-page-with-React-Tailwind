import burgerMenu from '../assets/icon-hamburger.svg'



export const Navbar = () => {
    return (
        <nav>
            <ul className='bg-white w-[329px] h-[305px] absolute 
        left-0 right-0 mx-auto top-[106px] flex flex-col items-center place-content-around'>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Projects</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className='bg-red-500'>
                <img src={burgerMenu} alt="" />
            </div>
        </nav>

    )
}
