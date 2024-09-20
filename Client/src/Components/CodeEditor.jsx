import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup'; // Base language for HTML

const selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'];

const CodeEditor = () => {
  const [code, setCode] = useState(`<h1>Hello Creators! Design Your Dream Posters</h1>
<h2>Design. Code. Display</h2>`);

  const handleKeyDown = (e) => {
    const { selectionStart, selectionEnd } = e.target;

    // Handle indentation with the Tab key
    if (e.key === 'Tab') {
      e.preventDefault();
      const beforeCursor = code.slice(0, selectionStart);
      const afterCursor = code.slice(selectionEnd);
      const updatedCode = `${beforeCursor}\t${afterCursor}`;

      setCode(updatedCode);

      // Move the cursor to the right position after the tab
      setTimeout(() => {
        e.target.selectionStart = selectionStart + 1;
        e.target.selectionEnd = selectionStart + 1;
      }, 0);
    }

    // Handle "Enter" key for moving the closing tag to the next line and indenting
    if (e.key === 'Enter') {
      e.preventDefault();

      const beforeCursor = code.slice(0, selectionStart);
      const afterCursor = code.slice(selectionEnd);

      // Get the indentation level of the current line
      const lineMatch = beforeCursor.match(/(^|\n)(\s*)[^\n]*$/);
      const currentIndentation = lineMatch ? lineMatch[2] : '';

      // Insert a new line with the same indentation level
      let newCode = `${beforeCursor}\n${currentIndentation}\t`;

      // Check if we are inside an opening tag and need to handle the closing tag
      const lastOpenedTagMatch = beforeCursor.match(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>$/);
      if (lastOpenedTagMatch && !selfClosingTags.includes(lastOpenedTagMatch[1])) {
        const tagName = lastOpenedTagMatch[1];

        // Remove the auto-closed tag
        const closingTag = `</${tagName}>`;
        const newAfterCursor = afterCursor.replace(closingTag, ''); // Remove first occurrence of closing tag

        // Append closing tag on the new line, indented properly
        newCode += `\n${currentIndentation}${closingTag}`;
        
        setCode(newCode + newAfterCursor);

        // Set cursor position inside the new block (between the tags)
        setTimeout(() => {
          e.target.selectionStart = selectionStart + currentIndentation.length + 1 + 1; // Adding 1 for the tab space
          e.target.selectionEnd = selectionStart + currentIndentation.length + 1 + 1;
        }, 0);
      } else {
        // No opening tag match, just insert a new line with indentation
        setCode(newCode + afterCursor);

        // Set cursor position after the new line
        setTimeout(() => {
          e.target.selectionStart = selectionStart + currentIndentation.length + 1;
          e.target.selectionEnd = selectionStart + currentIndentation.length + 1;
        }, 0);
      }
    }

    // Handle auto-closing tags
    if (e.key === '>' && code[selectionStart - 1] !== '/') {
      const match = code.slice(0, selectionStart).match(/<([a-zA-Z][a-zA-Z0-9]*)$/);

      if (match) {
        const tagName = match[1];

        // Check if the tag is self-closing
        if (!selfClosingTags.includes(tagName)) {
          const beforeCursor = code.slice(0, selectionStart);
          const afterCursor = code.slice(selectionEnd);
          const updatedCode = `${beforeCursor}></${tagName}>${afterCursor}`;

          e.preventDefault(); // Prevent default behavior of typing the ">" character
          setCode(updatedCode);

          // Move cursor to the correct position (between the tags)
          setTimeout(() => {
            e.target.selectionStart = selectionStart + 1; // Position after the closing ">"
            e.target.selectionEnd = selectionStart + 1;
          }, 0);
        }
      }
    }
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className="bg-gray-900 text-white h-full flex flex-col">
      <div className="flex items-center p-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="bg-red-500 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        </div>
        <span className="ml-4 text-gray-400">HTML</span>
      </div>
      <div className="flex-1 p-4 font-mono text-sm overflow-auto">
        <Editor
          value={code}
          onValueChange={handleCodeChange}
          highlight={(code) => highlight(code, languages.markup, 'html')}
          onKeyDown={handleKeyDown}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: '#2d2d2d',
            color: '#fff',
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
