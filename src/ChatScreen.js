import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";
import { Message } from "@material-ui/icons";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "...",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image: "...",
      message: "pp",
    },
    {
      message: "no",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatscreen">
      <p className="chatscreen__timestamp">
        YOU MTCHED WITH ELLEN ON 20/12/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen__message">
            <Avatar
              className="chatscreen__image"
              alt={Message.name}
              src={Message.image}
            />
            <p className="chatscreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textusers">{message.message}</p>
          </div>
        )
      )}

      <form className="chatscreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="chatscreen__inputfield"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="chatscreen__inputbutton">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
