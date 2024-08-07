// Mainpage.jsx

import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../img/logo.png';
import iconCheck from '../img/Saved.png';
import iconEnvelope from '../img/Templates.png';
import iconDownload from '../img/Download.png';
import iconCog from '../img/Settings.png';
import iconMenu from '../img/Menu.png';
import iconExit from '../img/Exit.png';

function Mainpage() {
  const [isSpecialView, setIsSpecialView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-200 flex items-center justify-between p-4">
        <div className="flex items-center justify-between w-full">
          <button className="p-3 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={iconMenu} alt="Menu" />
          </button>
          <img src={logo} alt="Logo" className="pr-4 w-28 h-24" />
          <p className="font-mono font-bold custom-xss:text-xl sm:pr-8 lg:text-4xl">
            UNLEASH YOUR CREATIVITY
          </p>
          <button className="p-3" onClick={() => setIsSpecialView(false)}>
            <img src={iconExit} alt="Exit" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col md:flex-row md:p-0">
        {!isSpecialView ? (
          <>
            <div className="w-full md:w-[47.5%] bg-gray-500 flex-1"></div>
            <div className="block md:hidden w-full h-4 bg-blue-200"></div>
            <div className={`w-full md:w-[5%] bg-white flex flex-col items-center py-4 ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
              <button className="m-3 md:mb-5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img src={iconMenu} alt="Menu" />
              </button>
              <div className="flex md:flex-col items-center">
                <Link to="/saved" className="m-3 flex flex-col items-center" onClick={() => { setIsSpecialView(true); setIsMenuOpen(false); }}>
                  <img src={iconCheck} alt="Saved" />
                </Link>
                <Link to="/templates" className="m-3 flex flex-col items-center" onClick={() => { setIsSpecialView(true); setIsMenuOpen(false); }}>
                  <img src={iconEnvelope} alt="Templates" />
                </Link>
                <Link to="/download" className="m-3 flex flex-col pl-2 items-center" onClick={() => { setIsSpecialView(true); setIsMenuOpen(false); }}>
                  <img src={iconDownload} alt="Download" />
                </Link>
                <Link to="/settings" className="m-3 flex flex-col items-center" onClick={() => { setIsSpecialView(true); setIsMenuOpen(false); }}>
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
      <footer className="bg-blue-200 text-xl text-center py-5 font-bold">
        BUILT BY CODECHEF VITC
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
