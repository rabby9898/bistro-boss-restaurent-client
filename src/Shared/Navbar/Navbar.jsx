import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <li className="mr-8">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-400" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
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
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-400" : ""
          }
        >
          Our Shop
        </NavLink>
      </li>
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
        <div className="navbar-end hidden lg:flex">
          <ul className="menu-horizontal px-1 text-white">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
