import React, { useState } from 'react';
import templateImage1 from '../assets/templateImage1.png'; 
import templateImage2 from '../assets/templateImage2.png';
import templateImage3 from '../assets/templateImage3.png';
import searchBar from '../assets/searchBar.png'; 
import recentlyUsedLogo from '../assets/recentlyUsedLogo.png'; 
import templateLogo from '../assets/templateLogo.png';  
import postersIcon from '../assets/postersIcon.png';  
import closeIcon from '../assets/closeIcon.png';  
import minimizeIcon from '../assets/minimizeIcon.png'; 

function Templates({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isVisible) return null; 

  return (
    <div className=''>
      <div>
        <div className='flex bg-black w-full max-w-2xl mt-4 rounded-t-lg p-2 pt-3'>
          <img src={templateLogo} alt="template icon" className='w-6 h-6 mr-2 ml-4' />
          <h2 className="text-lg font-semibold text-white flex-grow">Templates</h2>
          <div className="ml-auto flex items-center">
            <img 
                src={minimizeIcon} 
                alt="Minimize" 
                className="w-6 h-4 cursor-pointer mr-2" 
                onClick={() => setIsMinimized(!isMinimized)} 
            />
            <img 
                src={closeIcon} 
                alt="Close" 
                className="w-6 h-6 cursor-pointer" 
                onClick={() => {
                  setIsVisible(false);
                  onClose(); // Call the onClose callback
                }} 
            />
          </div>
        </div>
        <div className={`p-4 bg-customBg rounded-b-lg shadow-lg w-full max-w-2xl overflow-hidden ${isMinimized ? 'h-20' : 'h-auto'}`}>
          <div className={`relative mb-4 ${isMinimized ? 'hidden' : ''}`}>
            <input
              type="text"
              placeholder="Search for templates..."
              className="bg-customBg2 w-full p-2 pl-10 rounded-full text-textC focus:ring-2 outline-none"
            />
            <span className="absolute left-2 top-2">
              <img src={searchBar} alt="Search" className="w-6 h-6" />
            </span>      
          </div>

          <div className={`mb-4 space-y-2 ${isMinimized ? 'hidden' : ''}`}>
            <button className="flex items-center w-full p-2">
              <img src={recentlyUsedLogo} alt="Recently Used" className="w-6 h-6 mr-2" />
              <span className="text-white">technology</span>
            </button>
            <p className='pl-4 pb-2 pt-2 text-white text-xs font-bold'>Suggested</p>
            <button className="flex items-center w-full p-2">
              <img src={postersIcon} alt="Posters" className="w-6 h-6 mr-2" />
              <span className="text-white">Posters</span>
            </button>
          </div>
          <div className="border-t border-gray-500 my-4"></div>
          <div className={`flex ${isMinimized ? 'hidden' : ''}`}>
            <div className="pt-2 pb-2 rounded-md shadow-md">
              <img src={templateImage1} alt="Template 1" className="w-28 h-40" />
            </div>
            <div className="pt-2 pb-2 pl-5 rounded-md shadow-md">
              <img src={templateImage2} alt="Template 2" className="w-28 h-40" />
            </div>
            <div className="pt-2 pl-5 pb-14 rounded-md shadow-md">
              <img src={templateImage3} alt="Template 3" className="w-28 h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Templates;
