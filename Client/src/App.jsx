// src/App.jsx
import React, { useState } from 'react';
import HTMLPreviewer from './HTMLPreviewer'; // Import the HTML previewer component
import './index.css'; // Import any CSS files you need

const App = () => {
  const [htmlCode, setHtmlCode] = useState('<p>Hello, World!</p>'); // Initial HTML code

  const handleCodeChange = (event) => {
    setHtmlCode(event.target.value); // Update HTML code
  };

  return (
    <div>
      <textarea
        value={htmlCode}
        onChange={handleCodeChange}
        placeholder="Enter HTML code here"
        rows="10"
        cols="80"
        style={{ width: '100%' }}
      />

      <div style={{ marginTop: '20px' }}>
        <h2>HTML Preview</h2>
        <HTMLPreviewer htmlCode={htmlCode} />
      </div>
    </div>
  );
};

export default App;
