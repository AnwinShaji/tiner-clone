import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hai mahn"
        timestamps="40 sec ago"
        profilePic="..."
      />
      <Chat
        name="Ellen"
        message="Hai mahn"
        timestamps="40 sec ago"
        profilePic="..."
      />
      <Chat
        name="Steave"
        message="Hai mahn"
        timestamps="40 sec ago"
        profilePic="..."
      />
      <Chat
        name="Roy"
        message="Hai mahn"
        timestamps="40 sec ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;
