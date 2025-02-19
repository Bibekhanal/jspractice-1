import Logo from "../../assets/logo.png"
import { IoIosCall } from "react-icons/io";
import { Navlinks } from "../../constants/NavLink";
const Navbar = () =>{
    return(
        <div className='shadow-md w-full bg-white'>
        <div className='container'>
        <div className='flex justify-between'>
         <div className='flex'>
         <IoIosCall className='text-2xl text-primary '  />
         <span className='font-display'>+977 9800000000</span>
         </div>
         <div>
           <img src={Logo} alt="Image1" className='w-24' />
         </div>
         <nav>
           <ul>
            {Navlinks.map(({name, link, id})=>(
                <li key={id}>
                    <a href={link}>{name}</a>
                    
                </li>

            ))}
           
           </ul>
         </nav>
       </div>
   
      </div>
     </div>
    )
}
export default Navbar;