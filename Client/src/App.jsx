import React, { useState } from 'react';
import HTMLPreviewer from './HTMLPreviewer';
import './index.css'; // Ensure existing CSS is imported

const App = () => {
  const [htmlCode, setHtmlCode] = useState('<p>Hello, World!</p>'); // Default HTML code

  const handleCodeChange = (event) => {
    setHtmlCode(event.target.value); // Update state with new HTML code
  };

  return (
    <div>
      {/* Text area for entering HTML code */}
      <textarea
        value={htmlCode}
        onChange={handleCodeChange}
        placeholder="Enter HTML code here"
        rows="10"
        cols="80"
      />

      {/* Preview area */}
      <div style={{ marginTop: '20px' }}>
        <h2>HTML Preview</h2>
        <HTMLPreviewer htmlCode={htmlCode} />
      </div>
    </div>
  );
};

export default App;
