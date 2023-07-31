import burgerMenu from '../assets/icon-hamburger.svg'
import { useState } from 'react'



export const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false)

    const handleClick = () => {
        setMenuClicked(prevState => !prevState)
    }


    console.log(menuClicked)
    return (
        <nav>
            <ul
                className={` ${menuClicked ? 'flex' : 'hidden'} bg-white py-[39px] w-[329px] h-[305px] absolute 
                left-0 right-0 mx-auto top-[106px] flex-col         items-center place-content-around
                after:content[""] after:absolute after:top-[-24px]      after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent     after:border-b-white after:border-r-white      text-Dark-grayish-blue text-xl 
                
                sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm_top-0 sm:w-[40px] sm:bg-white-500 sm:h-[12px] sm:mx-0 sm:right-0 sm:relative`}>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Projects</li>
                <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desatured-blue'>Contact</li>
            </ul>
            <div className='cursor-pointer sm:hidden' onClick={handleClick}>
                <img src={burgerMenu} alt="menu hamburger" />
            </div>
        </nav>

    )
}
