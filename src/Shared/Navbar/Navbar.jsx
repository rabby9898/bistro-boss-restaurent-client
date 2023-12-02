import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../Hooks/useCarts/useCarts";
import useIsAdmin from "../../Hooks/useIsAdmin/useIsAdmin";
const Navbar = () => {
  const [cart] = useCarts();
  const [isAdmin] = useIsAdmin();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const links = (
    <>
      <li className="mr-8">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-8">
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-400" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      {/* <li className="mr-8">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-400" : ""
          }
        >
          Dashboard
        </NavLink>
      </li> */}
      <li className="mr-8">
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-400" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li className="mr-8">
        <NavLink
          to="/shop/salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-400" : ""
          }
        >
          Our Shop
        </NavLink>
      </li>
      {user && isAdmin && (
        <li className="mr-8">
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-400" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li className="mr-8">
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-400" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}

      {user ? (
        <li className="mr-8">
          <NavLink
            onClick={handleLogOut}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-400" : ""
            }
          >
            Logout
          </NavLink>
        </li>
      ) : (
        <li className="mr-8">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-orange-400" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
      {user && <li>{user.displayName}</li>}
      {user && (
        <>
          <Link to="/dashboard/cart">
            <button className=" text-white flex items-center">
              <FaShoppingCart className="text-2xl" />
              <div className="badge badge-secondary text-white">
                {cart.length}
              </div>
            </button>
          </Link>
        </>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-7xl px-10">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2 rounded-box w-52 text-white"
            >
              {links}
            </ul>
          </div>
          <a className=" text-xl text-white">Bistro Boss</a>
        </div>
        <div className="navbar-center items-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-white">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
