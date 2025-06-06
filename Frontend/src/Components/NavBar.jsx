import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logOut = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken("")
    setCartItems({})
  }

  return (
    <>

      {/* <p className=" w-full h-10 flex justify-center items-center font-medium text-sm bg-blue-200 px-4 sm:px-6 lg:px-8">
        Get free delivery on orders over $25{" "}
      </p> */}

      <div className="flex items-center justify-between py-5 font-medium">
        <Link to={'/'}> <img className="w-36" src={assets.logo} alt="logo" /></Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>Collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/About" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img onClick={() => setShowSearch(true)} className="w-5 cursor-pointer" src={assets.search_icon} alt="search" />

          <div className="group relative">

            <img
              onClick={() => token ? null : navigate('/login')}
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="profile"
            />

            {/* --------------------------------------drop down-------------------------------------- */}
            {token &&
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                  <p onClick={logOut} className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
            }
          </div>
          <Link to="/cart" className="relative">
            <img className="w-5 min-w-5" src={assets.cart_icon} alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            className="w-5 cursor-pointer sm:hidden"
            src={assets.menu_icon}
            alt="menu"
          />
        </div>

        {/* side  bar menu for smaller screen  */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"
            } `}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
              <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-gray-300' to='/'>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-gray-300' to='/collection'>Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-gray-300' to='/about'>About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-gray-300' to='/contact'>Contact</NavLink>
          </div>
        </div>
      </div>

    </>
  );
};

export default NavBar;
