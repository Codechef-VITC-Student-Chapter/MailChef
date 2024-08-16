import React from 'react';

const CodeEditor = () => {
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
        <pre>
          <code>
            <span className="text-blue-400">&lt;h1&gt;</span>
            <span className="text-green-400">Hello Creators! Design Your Dream Posters</span>
            <span className="text-blue-400">&lt;/h1&gt;</span>
            <br />
            <span className="text-blue-400">&lt;h2&gt;</span>
            <span className="text-green-400">Design. Code. Display</span>
            <span className="text-blue-400">&lt;/h2&gt;</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;