import Logo from "../../assets/logo.png"
import { IoIosCall } from "react-icons/io";
import { Navlinks } from "../../constants/NavLink";
import DarkMode from "./DarkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Navbar = () =>{
  const [showMenu, setShowMenu]= useState(false);
  const handleMenuToggle = () => setShowMenu(!showMenu);
    return(
        <div className='relative shadow-md w-full bg-white dark:bg-black dark:text-white'>
        <div className='container'>
        <div className='flex justify-between items-center'>
         <div className='hidden sm:flex item-center gap-3 font-semibold text-gray-500 dark:text-gray-400'>
         <IoIosCall className='text-2xl text-primary hover:scale-125'  />
         <span className='font-display'>+977 9800000000</span>
         </div>
         <div>
           <img src={Logo} alt="Image1" className='w-24 top-0 left-0 absolute  sm:w-24 sm:left-1/2 m-2 sm:m-0'/>
         </div>
         <nav className="hidden md:block" >
           <ul className="flex gap-8 items-center">
            {Navlinks.map(({name, link, id})=>(
                <li key={id} className="py-4 ">
                    <a 
                    href={link}
                    className="font-display text-lg font-semibold
                    hover:text-primary duration-500"
                    >
                      {name}
                      </a>
                    
                </li>

            ))}
            <DarkMode/>
           
           </ul>
         </nav>
         <div className="md:hidden flex items-center gap-4">
         <DarkMode/>
         {showMenu ? (
         <GiHamburgerMenu className="text-2xl" onClick={handleMenuToggle} />
         ) : (
         <IoClose className="text-2xl" onClick={handleMenuToggle} />
         )}
         </div>
       </div>
         </div>
     </div>
    )
}
export default Navbar;