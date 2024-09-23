import React, { createContext, useState } from 'react';

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [htmlCode, setHtmlCode] = useState(`<h1>Hello Creators! Design Your Dream Posters</h1>\n<h2>Design. Code. Display</h2>`); 
  const [cssCode, setCssCode] = useState(`body{\n\tfont-family: system-ui;\n\tbackground: #FFFFFF;\n\tcolor: black;\n\ttext-align: center;\n}`);       
  return (
    <CodeContext.Provider value={{ htmlCode, setHtmlCode, cssCode, setCssCode }}>
      {children}
    </CodeContext.Provider>
  );
};
