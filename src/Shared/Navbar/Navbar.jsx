const Navbar = () => {
  const links = (
    <>
      <li>
        <a className="text-white">Item 1</a>
      </li>
      <li>
        <a className="text-white">Item 3</a>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar fixed z-10 opacity-30 bg-black max-w-7xl">
        <div className="navbar-start">
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
          <a className="btn btn-ghost text-xl text-white">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white z-10">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
