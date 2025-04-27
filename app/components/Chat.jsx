"use client";

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SendIcon from "./icons/SendIcon";
import axios from "axios";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState('');
  const [contactId, setContactId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {

    const storedValue = localStorage.getItem("conversationId");
    const storedValueContactId = localStorage.getItem("contactId");
    const storedValueToken = localStorage.getItem("token");

    if ((storedValue && storedValue !== "") && (storedValueContactId && storedValueContactId !== "") && (storedValueToken && storedValueToken !== "")) {
      setConversationId(storedValue);
      setContactId(storedValueContactId);
      setToken(storedValueToken);
    } else {
      
      axios.post(`${process.env.NEXT_PUBLIC_TINYTALK_PATH}/contact/token/${process.env.NEXT_PUBLIC_TINYTALK_BOT_ID}`)
      .then((response) => {
        console.log(response.data.contactId);
        setContactId(response.data.contactId);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("contactId", response.data.contactId);
      })
      .catch((error) => {
        console.error(error);
      });

      let id = uuidv4();
      
      setConversationId(id);
      localStorage.setItem("conversationId", id);
    }
  }, []);

  const fetchChat = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    setMessages([]);

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ userInput, conversationId, contactId, token }),
    };

    const response = await fetch("/api/chat", requestOptions);
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let fullMessage = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk
        .split("\n")
        .filter((line) => line.trim().startsWith("data:"));

      for (const line of lines) {
        const cleaned = line.replace("data: ", "").trim();
        if (cleaned === "[DONE]") continue;

        try {
          const json = JSON.parse(cleaned);
          const content = json.choices?.[0]?.delta?.content;
          if (content) fullMessage += content;
        } catch (err) {
          console.error("Parse error:", cleaned, err);
        }
      }
    }

    setUserInput("");
    setMessages([fullMessage]);
    setLoading(false);
  };

  const defaultQuestions = [
    "How can I find the balance between my own personal happiness and the happiness of others?",
    "How can I cultivate a sense of detachment from outcomes and results?",
    "How can I find meaning and purpose in my work?"
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents form submit if inside a <form>
      fetchChat();
    }
  };

  return (
    <div style={{
      backgroundColor: '#212529',
      zIndex: 1,
      position: 'relative'
    }}>
      <div className="" style={{ maxWidth: "800px", width: "100%" }}>
        <div
          className="sm:flex block mx-auto w-full"
          style={{ position: "relative" }}
        >
          <div className="w-full">
            <input
              style={{
                background: "#333333",
                border: "none",
                height: "3rem",
                color: "white",
                boxShadow: "none",
                display: "block",
                width: "100%",
                padding: ".375rem .75rem",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                margin: 0,
                paddingRight: 36,
                transition:
                  "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
                borderRadius: "0.375rem",
                outline: "none",
              }}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Bhagavad Gita a question..."
            />
          </div>
          <button
            style={{
              position: "absolute",
              color: "#000",
              right: 10,
              top: 0,
              bottom: 0,
              cursor: "pointer",
              background: '#333333'
            }}
            type="button"
            onClick={fetchChat}
          >
            <SendIcon />
          </button>
        </div>

        {messages.length > 0 && (
          <div className="w-full">
            {messages.map((message, index) => (
              <div
                style={{
                  marginTop: 10,
                  borderRadius: 3,
                }}
                className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 dark:bg-gray-700"
              >
                <p
                  className="text-sm font-normal text-gray-900 dark:text-white"
                  key={index}
                >
                  {message}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="block text-center mt-5">
          {defaultQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => setUserInput(question)}
              className="text-left default-questions block mt-5 m-auto text-white cursor-pointer px-5 py-2 rounded-sm"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
