import { HiBars3BottomLeft } from "react-icons/hi2";
import logo from "/logo.png";
import { Link, NavLink, useNavigate } from "react-router";
import { useContext, useState } from "react";
import WebContext from "../../context/WebContext";

const NavbarSection = () => {
  const { user, image, handleLogout } = useContext(WebContext);
  const [showUser, setShowUser] = useState(false);
  const userShowHide = () => setShowUser((prev) => !prev);
  const navigate = useNavigate();

  return (
    <div className="md:max-w-[1440px] w-full max-w-svh mx-auto lg:px-12 md:px-8 px-5 py-5 bg-purple-100 fixed shadow-md z-50">
      <div className="flex items-center gap-3 justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-1">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <HiBars3BottomLeft className="text-2xl"></HiBars3BottomLeft>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:text-gray-600 text-purple-700 duration-300 py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                    : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:text-gray-600 text-purple-700 duration-300 py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                    : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
                }
                to={"/plants"}
              >
                Plants
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:text-gray-600 text-purple-700 duration-300 py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                    : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
                }
                to={"/about"}
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:text-gray-600 text-purple-700 duration-300 py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                    : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold hover:text-gray-600 text-purple-700 duration-300 py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                    : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
                }
                to={"/Profile"}
              >
                Profile
              </NavLink>
            </ul>
          </div>
          <Link to={"/"} className="group flex items-center gap-1">
            <img
              className="sm:w-10 w-8 border-b-2 border-l-2 border-black rounded-tl-lg rounded-br-lg group-hover:border-purple-700 duration-300 group-hover:-rotate-5 group-hover:scale-105 bg-white"
              src={logo}
              alt="logo"
            />
            <h1 className="md:text-xl text-lg font-bold sm:block hidden group-hover:text-purple-700 duration-300">
              GreenNest
            </h1>
          </Link>
        </div>
        <ul className="lg:flex items-center gap-3 text-lg font-medium hidden">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold hover:text-gray-600 text-purple-700 duration-300 bg-white py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold hover:text-gray-600 text-purple-700 duration-300 bg-white py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
            }
            to={"/plants"}
          >
            Plants
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold hover:text-gray-600 text-purple-700 duration-300 bg-white py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
            }
            to={"/about"}
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold hover:text-gray-600 text-purple-700 duration-300 bg-white py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold hover:text-gray-600 text-purple-700 duration-300 bg-white py-1 px-3 shadow-lg hover:bg-gray-200 border-b-2 rounded-lg"
                : "hover:text-cyan-600 text-gray-700 duration-300 py-1 px-3 hover:bg-cyan-50 rounded-lg"
            }
            to={"/profile"}
          >
            Profile
          </NavLink>
        </ul>
        {user ? (
          <div className="relative">
            <button onClick={userShowHide}>
              <img
                className="h-12 w-12 object-cover rounded-full border-2 border-purple-700 cursor-pointer"
                src={image || user.photoURL}
                alt="User-Photo"
              />
            </button>
            {showUser && (
              <div className="absolute top-16 right-2 flex flex-col gap-2 py-5 px-3 bg-gray-50 rounded-lg border-2">
                <h3 className="text-lg text-sky-700 font-bold">
                  {user.displayName}
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {user.email}
                </p>

                <div>
                  <button
                    onClick={() => {
                      handleLogout(), navigate("/");
                    }}
                    className="mt-3 text-xl text-left font-bold text-red-600 cursor-pointer hover:text-red-800 duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "py-2 font-semibold text-white sm:px-6 sm:text-lg text-sm px-3 rounded-lg bg-linear-to-br from-green-800 via-green-600 to-blue-800"
                  : "py-2 font-semibold text-white sm:px-6 sm:text-lg text-sm px-3 rounded-lg bg-linear-to-br from-green-700 via-green-600 to-green-400 hover:from-green-800 hover:via-green-700 hover:to-purple-500 duration-300 transition"
              }
              to={"/login"}
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "sm:flex hidden py-2 font-semibold text-white sm:px-6 sm:text-lg text-sm px-3 rounded-lg bg-linear-to-br from-blue-800 via-blue-600 to-green-800"
                  : "sm:flex hidden py-2 font-semibold text-white sm:px-6 sm:text-lg text-sm px-3 rounded-lg bg-linear-to-br from-blue-700 via-blue-600 to-blue-400 hover:from-blue-800 hover:via-blue-700 hover:to-purple-500 duration-300 transition"
              }
              to={"/register"}
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarSection;
