import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import iconCheck from '../assets/Main_Saved.png';
import iconEnvelope from '../assets/Main_Templates.png';
import iconDownload from '../assets/Main_Download.png';
import iconCog from '../assets/Main_Settings.png';
import iconMenu from '../assets/Main_Menu.png';
import iconExit from '../assets/Main_Exit.png';
import iconFooter from '../assets/Main_footer.png';
import iconHeader from '../assets/Main_Header.png';
import CodeEditor from '../Components/CodeEditor';
import Templates from './Templates';
import iconChat from '../assets/chatbot.png';
import HTMLPreviewer from '../Components/Htmlpr';
import { CodeContext } from '../codeContext';

function Mainpage({ content }) {
  const [isSpecialView, setIsSpecialView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTemplatesVisible, setIsTemplatesVisible] = useState(false);
  const { htmlCode, cssCode } = useContext(CodeContext);

  const handleExit = () => {
    setIsSpecialView(false);
    setIsMenuOpen(false);
    setIsTemplatesVisible(false);
  };

  const handleCodeChange = (event) => {
    setHtmlCode(event.target.value); // Update state with new HTML code
  };


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-200 flex items-center justify-between md:p-9 custom-xss:p-7 relative">
        <div className="flex items-center w-full justify-between">
          {/* Menu Icon */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          <button className="ml-auto" onClick={handleExit}>
            <img src={iconExit} alt="Exit" className="md:h-12 custom-xss:h-5" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col md:flex-row md:p-0">
        {!isSpecialView ? (
          <>
            <div className="w-full md:w-[47.5%] flex-1">
              <CodeEditor />
            </div>

            {/* Spacer for mobile view */}
            <div className="block md:hidden w-full h-4 bg-blue-200"></div>

            {/* Sidebar/Menu Icon */}
            <div
              className={`w-full 2xl:w-[6%] md:w-[12%] lg:w-[9%] bg-white flex flex-col items-center py-2 ${isMenuOpen ? 'flex' : 'hidden md:flex'
                }`}
            >
              {/* Menu Icon on top (Hidden in mobile view) */}
              <button className="m-4 md:mb-6 hidden md:block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img src={iconMenu} alt="Menu" className="md:h-[2rem] md:w-[3rem] custom-xss:h-5 custom-xss:w-5" />
              </button>

              {/* Sidebar Links */}
              <div className="flex md:flex-col items-center">
                {/* Saved */}
                <Link
                  to="/saved"
                  className="mb-5 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconCheck} alt="Saved" className="md:h-[4rem] md:w-[4rem] custom-xss:h-[2rem] custom-xss:w-[2rem] " />
                  <p className="mt-2 text-center text-blue-800 font-semibold custom-xss:text-[0.69rem] md:text-[1.2rem]">Saved</p>
                </Link>
                {/* Templates */}
                <Link
                  to="/templates"
                  className="mb-5 flex flex-col items-center"
                  onClick={() => {
                    setIsTemplatesVisible(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconEnvelope} alt="Templates" className="md:h-[4rem] md:w-[4rem] custom-xss:h-[2rem] custom-xss:w-[2rem] ml-3 md:m-0" />
                  <p className="mt-2 text-center text-blue-800 font-semibold ml-3 md:m-0 custom-xss:text-[0.69rem] md:text-[1.2rem]">Templates</p>
                </Link>

                {/* Download */}
                <Link
                  to="/download"
                  className="mb-5 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconDownload} alt="Download" className="md:h-[4rem] md:w-[5rem] custom-xss:h-[2rem] custom-xss:w-[2rem] ml-3 md:m-0" />
                  <p className="mt-2 text-center text-blue-800 font-semibold ml-3 md:m-0 custom-xss:text-[0.69rem] md:text-[1.2rem]">Download</p>
                </Link>

                {/* Chatbot */}
                <Link
                  to="/chat"
                  className="mb-5 flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconChat} alt="Chatbot" className="md:h-[5rem] md:w-[5.5rem] custom-xss:h-[2rem] custom-xss:w-[2rem] ml-3 md:m-0" />
                  <p className="mt-2 text-center text-blue-800 font-semibold ml-3 md:m-0 custom-xss:text-[0.69rem] md:text-[1.2rem]">Chatbot</p>
                </Link>

                {/* Settings */}
                <Link
                  to="/settings"
                  className="flex flex-col items-center"
                  onClick={() => {
                    setIsSpecialView(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <img src={iconCog} alt="Settings" className="md:h-[3.1rem] md:w-[3.5rem] custom-xss:h-[1.7rem] custom-xss:w-[2rem] mb-2 ml-3 md:m-0" />
                  <p className="mb-3 text-center text-blue-800 font-semibold ml-3 md:m-0 custom-xss:text-[0.69rem] md:text-[1.2rem]">Settings</p>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[47.5%] bg-gray-500 flex-1">
              {/* Placeholder for content */}
              <div className='font-black text-4xl'>grrr</div>
              <div className='mt-4'>
                <HTMLPreviewer htmlCode={htmlCode} cssCode={cssCode} />
              </div>
            </div>

            {/* Templates Modal */}
            {isTemplatesVisible && (
              <div className="fixed inset-0 flex items-center justify-end z-50">
                <div className="pl-60 w-11/12 max-w-4xl">
                  <Templates onClose={() => setIsTemplatesVisible(false)} />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex-1">{content}</div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-blue-200 text-xl flex justify-center py-5 font-bold">
        <img src={iconFooter} alt="Footer" className="h-6 w-[10rem] custom-xss:h-[0.7rem] custom-xss:w-[6rem] md:w-[14rem] md:h-[1.3rem]" />
      </footer>
    </div>
  );
}

export default Mainpage;
