import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "About" },
  { href: "#", label: "Skills" },
  { href: "#", label: "My works" },
];

export default function Header() {
  return (
    <div className="relative">
      <div className=" fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
        <div className="navbar shadow-sm mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                    {" "}
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                </svg>
                </div>
                <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                {navItems.map((item, index) => (
                    <li key={index}>
                    <a
                        href={item.href}
                        className="font-sans font-semibold text-lg"
                    >
                        {item.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-semibold">HB</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navItems.map((item, index) => (
                <li key={index}>
                    <a href={item.href} className="font-sans text-base">
                    {item.label}
                    </a>
                </li>
                ))}
            </ul>
            </div>
            <div className="navbar-end gap-4">
            <a href="https://www.github.com/beeleza" className="text-2xl">
                <FaGithub />
            </a>
            <a href="" className="text-2xl">
                <FaLinkedin />
            </a>
            </div>
        </div>
      </div>
    </div>
  );
}
