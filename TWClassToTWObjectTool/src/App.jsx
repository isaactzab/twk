import React, { useState } from 'react';
import { TWClassesToTWObject } from 'twk';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', javascript);

/**
 * App component: Renders the title, textarea for input, a syntax-highlighted code block, and a copy button.
 */
const App = () => {
  const [input, setInput] = useState('');
  const [parsed, setParsed] = useState({});

  /**
   * Clears the textarea content when clicked.
   */ 
  const handleTextareaClick = () => {
    setInput('');
  };

  /**
   * Updates the input state and parses the tailwind classes using TWClassesToTWObject.
   */
  const handleTextareaChange = (e) => {
    const value = e.target.value;
    setInput(value);
    try {
      const result = TWClassesToTWObject(value);
      setParsed(result);
    } catch (error) {
      setParsed({ error: 'Error parsing input' });
    }
  };

  /**
   * Copies the parsed code (formatted as JSON) to the clipboard.
   */
  const handleCopy = () => {
    const code = JSON.stringify(parsed, null, 2);
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mt-4">Tailwind Classes to TWObject</h1>
      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-lg">
          This tool allows you to convert Tailwind classes into a TWObject object to use in projects along TWK library.<br/>
          It's useful when you want to use Tailwind classes and keep organize them in a structured way.<br/>
          <span className="text-sm">
            Visit <a href="https://github.com/isaactzab/twk" target="_blank" className='text-blue-500' rel="noopener noreferrer">TWK Project page</a>  for more details 
          </span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <textarea
          value={input}
          onClick={handleTextareaClick}
          onChange={handleTextareaChange}
          placeholder="Paste your Tailwind classes..."
          className="w-full p-4 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        />
        <div className="relative mt-4">
          <SyntaxHighlighter language="javascript" style={docco} className="rounded">
            {JSON.stringify(parsed, null, 2)}
          </SyntaxHighlighter>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
