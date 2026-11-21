import { CircleUser, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", active: true },
  { label: "Browse Menu" },
  { label: "Special Offers" },
  { label: "Restaurants" },
  { label: "Track Order" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-gray-200/85 w-full h-screen absolute z-999 top-0 bottom-0 duration-300 ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <nav className="mx-auto container my-8 px-2 md:px-0">
        <div className="flex items-center justify-between">
          <div>
            <img className="w-40 cursor-pointer" src={logo} alt="Order.uk" />
          </div>
          <div
            className={`
          fixed top-0 right-0 z-9999 h-full w-64 pl-4 pt-15
          flex flex-col items-start gap-6 bg-[#03081F] text-white text-sm
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:p-0
          lg:flex-row lg:items-center lg:gap-5
          lg:bg-transparent lg:text-black lg:text-base
        `}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="block lg:hidden absolute top-4 right-5 cursor-pointer"
            >
              <X size={30} />
            </button>
            <ul className="flex items-start lg:items-center gap-x-5 text-sm font-semibold max-lg:flex-col max-lg:gap-y-5">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className={
                    link.active
                      ? "bg-orange-400 text-white px-8 py-2 rounded-full"
                      : undefined
                  }
                >
                  <a href="#">{link.label}</a>
                </li>
              ))}
            </ul>
            <div>
              <Button
                icon={<CircleUser />}
                iconClassName="text-orange-400 text-sm max-lg:text-[#03081F]"
                text="Login/Signup"
                className="bg-[#03081F] text-white max-lg:bg-orange-400"
              />
            </div>
          </div>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="block lg:hidden"
          >
            <Menu size={50} className="cursor-pointer" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
