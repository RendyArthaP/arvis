import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Hamburger from '../assets/icons/Hamburger';
import { useDispatch } from 'react-redux'

const Navbar = ({getToken, logOutActions, isLogin}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOutActions(history))
  }

  const [navbarMobile, setNavbarMobile] = useState(false)
  const handleNavbarMobile = () => {
    setNavbarMobile(!navbarMobile)
  }

  return (
    <div className="bg-blue-400 w-full h-16 z-10">
      <div className="flex flex-row justify-between p-4 lg:px-10">
        <Link 
          to="/" 
          className="text-2xl font-bold font-roboto text-white tracking-wider"
        >
          Arvis
        </Link>
        <div className="hidden md:flex flex-row items-center">
          
              <div>
                <h1>

                </h1>
                <button
                  className="text-white focus:outline-none"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            
              <>
                <Link to="/login">
                  <span className="mx-2 text-base font-medium font-roboto text-white">
                    Login
                  </span>
                </Link>
                <Link to="/register">
                  <span className="mx-2 text-base font-medium font-roboto text-white">
                    Register
                  </span>
                </Link>
              </>
          
          <Link to="/cart">
            <span className="mx-2 text-base font-medium font-roboto text-white">
              Cart
            </span>
          </Link>
        </div>
        <div 
          className="flex md:hidden"
          onClick={handleNavbarMobile}
        >
          <Hamburger />
        </div>
        {navbarMobile && (
          <ul className="flex flex-col absolute bg-blue-400 w-full left-0 top-14 z-10 pb-6 md:hidden">
            <li className="mx-4 pt-4 pb-2 font-medium font-roboto text-base text-white border-b border-white">
              <Link to="/login">
                Login
              </Link>
            </li>
            <li className="mx-4 pt-4 pb-2 font-medium font-roboto text-base text-white border-b border-white">
              <Link to="/register">
                Register
              </Link>
            </li>
            <li className="mx-4 pt-4 pb-2 font-medium font-roboto text-base text-white border-b border-white">
              <Link to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar
