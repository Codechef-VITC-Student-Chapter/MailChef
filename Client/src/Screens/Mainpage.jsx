import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconCheck from '../assets/Main_Saved2.png';

import iconEnvelope from '../assets/Main_Templates.png';
import iconDownload from '../assets/Main_Download.png';
import iconCog from '../assets/Main_Settings.png';
import iconMenu from '../assets/Main_Menu.png';
import iconExit from '../assets/Main_Exit.png';
import iconFooter from '../assets/Main_footer.png';
import iconHeader from '../assets/Main_Header.png';

function Mainpage({ content }) {
  const [isSpecialView, setIsSpecialView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleExit = () => {
    setIsSpecialView(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-200 flex items-center justify-between md:p-9 custom-xss:p-7 relative">
        <div className="flex items-center w-full justify-between">
          {/* Menu Icon */}
          <button className=" md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={iconMenu} alt="Menu" className="custom-xss:h-4" />
          </button>
          {/* Centered Header Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <img
              src={iconHeader}
              alt="Header"
              className="lg:h-[7rem] lg:w-[38rem] md:h-[5rem] md:w-[30rem] custom-xss:h-[3rem] custom-xss:w-[20rem]"
            />
          </div>

          {/* Exit Icon */}
          <button className=" ml-auto" onClick={handleExit}>
            <img src={iconExit} alt="Exit" className="md:h-12 custom-xss:h-5" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col md:flex-row md:p-0">
        {!isSpecialView ? (
          <>
            <div className="w-full md:w-[47.5%] bg-gray-500 flex-1"></div>

            {/* Spacer for mobile view */}
            <div className="block md:hidden w-full h-4 bg-blue-200"></div>

            {/* Sidebar/Menu Icon */}
            <div
              className={`w-full 2xl:w-[6%] md:w-[12%] lg:w-[9%] bg-white flex flex-col items-center py-2  ${
                isMenuOpen ? 'flex' : 'hidden md:flex'
              }`}
            >
              {/* Menu Icon on top (Hidden in mobile view) */}
              <button className="m-4 md:mb-6 hidden md:block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img src={iconMenu} alt="Menu" className="md:h-[2rem] md:w-[3rem] custom-xss:h-5 custom-xss:w-5" />
              </button>

              {/* Sidebar Links */}
              <div className="flex md:flex-col items-center">
                <Link
                  to="/saved"
                  className="mb-5 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconCheck} alt="Saved" className="md:h-[7rem] md:w-[5.9rem] custom-xss:h-[4.6rem] custom-xss:w-[4rem] custom-xss:mb-1" />
                </Link>
                <Link
                  to="/templates"
                  className="mb-1 flex flex-col items-center"

                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconEnvelope} alt="Templates" className="md:h-[5rem] md:w-[5.5rem] custom-xss:h-[3.3rem] custom-xss:w-[4rem] custom-xss:mb-[.2rem] custom-xss:ml-3 md:mr-3 md:ml-[.8rem]" />

                </Link>
                <Link
                  to="/download"
                  className="mb-6 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconDownload} alt="Download" className="md:h-[5rem] md:w-[5.5rem] ml-1 custom-xss:h-[3rem] custom-xss:w-[4.3rem] custom-xss:mt-[1.2rem] custom-xss:ml-3 md:mr-1" />

                </Link>
                <Link
                  to="/settings"
                  className="flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconCog} alt="Settings" className="md:h-[5rem] md:w-[6.1rem] sm:w-[4rem] custom-xss:h-[3rem] custom-xss:w-[4.3rem] custom-xss:mb-[0.2rem]" />

                </Link>
              </div>
            </div>

            <div className="w-full md:w-[47.5%] bg-gray-500 flex-1"></div>
          </>
        ) : (
          <div className="flex-1">{content}</div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-blue-200 text-xl flex justify-center py-5 font-bold">
        <img src={iconFooter} alt="Footer" className="h-6 w-[10rem] custom-xss:h-[0.7rem] custom-xss:w-[6rem] md:w-[13rem] md:h-[1.3rem]" />
      </footer>
    </div>
  );
}

export default Mainpage;
