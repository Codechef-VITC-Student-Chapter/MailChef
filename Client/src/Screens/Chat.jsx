import { useState, useRef, useEffect } from 'react';
import './App.css';
import arrow from '../assets/bot-img/arrow.png'
import header from '../assets/bot-img/header.png'
import minimize from '../assets/bot-img/minimize.png'
import cross from '../assets/bot-img/cross.png'

function Chat({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  // Function to handle sending your own message
  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "me" }]);
      setInput("");
    }
  };

  // Function to simulate receiving a message from others
  const receiveMessage = (message) => {
    setMessages([...messages, { text: message, sender: "other" }]);
  };

  // Auto-resize the input box
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.style.height = 'auto'; // Reset height to auto to get new height
      inputElement.style.height = `${inputElement.scrollHeight}px`; // Set new height
    }
  };

  // Auto-resize on mount and whenever input changes
  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.style.height = 'auto'; // Reset height to auto to get new height
      inputElement.style.height = `${inputElement.scrollHeight}px`; // Set new height
    }
  }, [input]);

  return (
    <>

        <div className='bg-black h-12 flex mt-10 justify-between rounded-t-3xl flex-grow'>
            <img src={header} alt="Chat-bot-icon" className='pl-3'/>
            <div className='flex space-x-3 pr-3'>
                <img src={minimize} alt="minimize" className='mb-2'/>
                <img src={cross} alt="cross" className='mt-2' 
                onClick={onClose}
                />
            </div>
        </div>
        
        {/*chat container*/}
        <div className="chat-container rounded-b-3xl flex flex-col h-5/6 p-4 flex-grow" style={{backgroundColor:'#303031'} } >

        {/* Messages Container */}
        <div className="messages-container flex-grow overflow-auto p-4">
            {messages.map((message, index) => (
            <div
                key={index}
                className={`message-bubble mb-2 p-2 rounded-lg max-w-xs break-words whitespace-pre-wrap ${
                message.sender === "me"
                    ? "bg-blue-100 font-mono self-end ml-auto max-w-lg text-left"
                    : "bg-gray-200 text-black self-start max-w-xs"
                }`}
            >
                {message.text}
            </div>
            ))}
        </div>

        {/* Input Container */}
        <div className="input-container flex items-center flex-wrap">
            <textarea
            ref={inputRef}
            className="input flex-grow border-4 font-mono rounded-3xl px-5 py-2"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            />
            <button className="send-btn ml-2 bg-white px-4 py-2 rounded-3xl"
            onClick={sendMessage}> <img src={arrow} alt="send-btn" /> </button>
        </div>
        </div>       
    </>
    
  );
}

export default Chat;
