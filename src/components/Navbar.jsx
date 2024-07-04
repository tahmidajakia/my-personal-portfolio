const Navbar = () => {
  const navLink = (
    <>
      <li className="text-lg font-semibold">
        <a className="hover:text-cyan-400" href="#home">Home</a>
      </li>

      <li className="text-lg font-semibold">
        <a className="hover:text-cyan-400" href="#about">About</a>
      </li>

      <li className="text-lg font-semibold">
        <a className="hover:text-cyan-400" href="#projects">Projects</a>
      </li>

      <li className="text-lg font-semibold">
        <a className="hover:text-cyan-400" href="#contact">Contact</a>
      </li>
    </>
  );
  // let Links = [
  //     {name: "Home", link: 'home'},
  //     {name: "About", link: 'about'},
  //     {name: "Projects", link: 'projects'},
  //     {name: "Contact", link: 'contact'}
  // ]
  return (
    <div>
      <div className="navbar max-w-6xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
              {/* <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li> */}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">TAHMIDA JAKIA</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
            {/* <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
