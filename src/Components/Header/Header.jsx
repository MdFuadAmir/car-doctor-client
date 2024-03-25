import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const {user, signOutUser} = useContext(AuthContext);

  const handleLogOut = () =>{
    signOutUser()
    .then(() =>{})
    .catch(error =>{
      console.log(error);
    })

  }
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    {
      user?.email ? <li><button onClick={handleLogOut}>Log Out</button></li> :
    <li><NavLink to='/login'>Log in</NavLink></li>
    }
    </>
    return (
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img src={logo} className="w-16" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="px-6 py-2 border border-red-500 text-red-500 rounded-md">Appointment</button>
    
  </div>
</div>
    );
};

export default Header;