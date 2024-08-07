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
      <header className="bg-blue-200 flex items-center justify-between p-4 relative">
        <div className="flex items-center w-full justify-between">
          {/* Menu Icon */}
          <button className="p-3 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={iconMenu} alt="Menu" className='custom-xss:h-4' />
          </button>
          {/* Centered Header Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <img src={iconHeader} alt="Header" className="md:h-24 md:w-96 custom-xss:h-12 custom-xss:w-96" />
          </div>
          {/* Exit Icon */}
          <button className="p-3 ml-auto" onClick={() => setIsSpecialView(false)}>
            <img src={iconExit} alt="Exit" className='md:h-12 custom-xss:h-6' />
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
              className={`w-full md:w-[5%] bg-white flex flex-col items-center py-4 ${
                isMenuOpen ? 'flex' : 'hidden md:flex'
              }`}
            >
              {/* Menu Icon on top */}
              <button className="m-3 md:mb-5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img src={iconMenu} alt="Menu" />
              </button>

              {/* Sidebar Links */}
              <div className="flex md:flex-col items-center">
                <Link
                  to="/saved"
                  className="m-3 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconCheck} alt="Saved" />
                </Link>
                <Link
                  to="/templates"
                  className="m-3 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconEnvelope} alt="Templates" />
                </Link>
                <Link
                  to="/download"
                  className="m-3 flex flex-col pl-2 items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconDownload} alt="Download" />
                </Link>
                <Link
                  to="/settings"
                  className="m-3 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconCog} alt="Settings" />
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
      <footer className="bg-blue-200 text-xl flex justify-center py-5 font-bold">
        <img src={iconFooter} alt="Footer" className="h-5" />
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
