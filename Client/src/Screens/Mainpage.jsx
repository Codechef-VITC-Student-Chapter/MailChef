import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import iconCheck from '../assets/Main_Saved.png';
import iconEnvelope from '../assets/Main_Templates.png';
import iconDownload from '../assets/Main_Download.png';
import iconCog from '../assets/Main_Settings.png';
import iconMenu from '../assets/Main_Menu.png';
import iconExit from '../assets/Main_Exit.png';
import iconFooter from '../assets/Main_footer.png';
import iconHeader from '../assets/Main_Header.png';

function Mainpage() {
  const [isSpecialView, setIsSpecialView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-200 flex items-center justify-between md:p-4 relative">
        <div className="flex items-center w-full justify-between">
          {/* Menu Icon */}
          <button className="p-3 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={iconMenu} alt="Menu" className="custom-xss:h-3" />
          </button>
          {/* Centered Header Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <img
              src={iconHeader}
              alt="Header"
              className="md:h-20 md:w-[28rem] custom-xss:h-[2.29rem] custom-xss:w-[19rem]"  // Adjusted width for custom-xss
            />
          </div>

          {/* Exit Icon */}
          <button className="p-3 ml-auto" onClick={() => setIsSpecialView(false)}>
            <img src={iconExit} alt="Exit" className="md:h-8 custom-xss:h-5" />
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
              className={`w-full md:w-[7%] bg-white flex flex-col items-center py-2  ${
                isMenuOpen ? 'flex' : 'hidden md:flex'
              }`}
            >
              {/* Menu Icon on top (Hidden in mobile view) */}
              <button className="m-4 md:mb-6 hidden md:block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img src={iconMenu} alt="Menu" className="h-12 w-12 custom-xss:h-5 custom-xss:w-5" />
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
                  <img src={iconCheck} alt="Saved" className="md:h-[3rem] md:w-[2.6rem] custom-xss:h-[2.5rem]" />
                </Link>
                <Link
                  to="/templates"
                  className="mb-4 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconEnvelope} alt="Templates" className="md:h-[3rem] md:w-[3.6rem] custom-xss:h-[2.5rem] custom-xss:mb-[.2rem] custom-xss:ml-3 md:mr-3 md:pl-[.001rem]" />
                </Link>
                <Link
                  to="/download"
                  className="mb-6 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconDownload} alt="Download" className="md:h-[3rem] md:w-[3.9em] ml-1 custom-xss:h-[2.5rem] custom-xss:mt-[.2rem] custom-xss:ml-3 md:mr-1" />
                </Link>
                <Link
                  to="/settings"
                  className="flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconCog} alt="Settings" className="md:h-[3rem] md:w-[4rem] sm:w-[4rem] custom-xss:h-[2.5rem] custom-xss:mb-[1.2rem]" />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[47.5%] bg-gray-500 flex-1"></div>
          </>
        ) : (
          <div className="flex-1">
            <Routes>
              <Route path="/saved" element={<Saved />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/download" element={<Download />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-blue-200 text-xl flex justify-center py-4 font-bold">
        <img src={iconFooter} alt="Footer" className="h-4 w-[10rem] custom-xss:h-[0.5rem] custom-xss:w-[6rem] md:w-[10rem] md:h-[1rem]" />
      </footer>
    </div>
  );
}

// Example page components
function Saved() {
  return <div>Saved Page Content</div>;
}

function Templates() {
  return <div>Templates Page Content</div>;
}

function Download() {
  return <div>Download Page Content</div>;
}

function Settings() {
  return <div>Settings Page Content</div>;
}

export default Mainpage;
