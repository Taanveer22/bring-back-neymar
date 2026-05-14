import { NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={'/privacyPolicy'}>Privacy Policy</NavLink>
      </li>
      <li>
        <NavLink to={'/terms'}>Terms</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="max-lg:collapse bg-yellow-400 shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
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
            <button className="btn btn-ghost text-xl">Bring Back Neymar</button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end hidden sm:flex">
            <button className="btn btn-ghost text-xl"> Mission Hexa 2026</button>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
