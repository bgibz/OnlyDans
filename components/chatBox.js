import React, { useState } from "react";
import Message from "./message";

export default function ChatBox({ messages }) {
  return (
    <div id="messages">
      {messages.map(message => (
        <Message text={message.text} user={message.user}></Message>
      ))}
    </div>
  );
}
