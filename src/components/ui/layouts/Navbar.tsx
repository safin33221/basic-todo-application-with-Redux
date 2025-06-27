import { NavLink } from 'react-router';
import { ModeToggle } from '../mood-toggler';


const Navbar = () => {
    return (
        <div className='  py-5 flex justify-between '>
            <div className='flex items-center gap-2'>
                {/* <img src={logo} className='w-20 h-16' alt="" /> */}
                <h1 className='font-bold text-3xl '>ToDis</h1>
            </div>
            <div className='flex items-center '>
                <ul className='flex items-center justify-center text-xl font-semibold   gap-4'>
                    <li className='hover:text-red-500 duration-300 transition-all ease-in-out'><NavLink to={`/`}>Task</NavLink></li>
                    <li className='hover:text-red-500 duration-300 transition-all ease-in-out'><NavLink to={`users`}>Users</NavLink></li>
                </ul>
            </div>
            <div className='flex items-center gap-3'>
                <ModeToggle />
                <button className='border p-3  rounded-2xl'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;