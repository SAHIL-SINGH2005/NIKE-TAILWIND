import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt='hamburger icon'
            width={25}
            height={25}
            onClick={toggleMenu}
            className='cursor-pointer'
          />
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className='absolute top-20 right-0 bg-white shadow-lg p-4 rounded-lg max-lg:block'>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat text-slate-gray text-lg'
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <a
              href='/'
              className='block text-lg font-medium font-montserrat text-slate-gray'
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </a>
            <a
              href='/'
              className='block text-lg font-medium font-montserrat text-slate-gray mt-2'
              onClick={() => setIsMenuOpen(false)}
            >
              Explore now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;