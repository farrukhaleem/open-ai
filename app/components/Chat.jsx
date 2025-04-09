"use client";

import React, { useState, useEffect } from "react";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);


    const fetchChat = async () => {
      setLoading(true)
      setMessages([])
      const myHeaders = new Headers();
      myHeaders.append("Api-Key", process.env.NEXT_PUBLIC_API_URL); // Use NEXT_PUBLIC_ if on client
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Origin", "https://dashboard.tinytalk.ai");

      const raw = JSON.stringify({
        botId: "66eef580-49f7-4286-957b-e55a8c1e9c5b",
        messages: [{ role: "user", content: userInput }],
        temperature: 0.1,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch("https://api.tinytalk.ai/v1/chat/completions", requestOptions);
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullMessage = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter(line => line.trim().startsWith("data:"));

        for (const line of lines) {
          const cleaned = line.replace("data: ", "").trim();

          if (cleaned === "[DONE]") continue; // 🛑 Skip this line

          try {
            const json = JSON.parse(cleaned);
            const content = json.choices?.[0]?.delta?.content;
            if (content) fullMessage += content;
          } catch (err) {
            console.error("Failed to parse line:", cleaned, err);
          }
        }
      }
      setUserInput('');
      // setMessages(prev => [...prev, fullMessage]);
      setMessages(prev => [fullMessage]);
      setLoading(false)

    };

   

  return (
    <div className="max-w-lg">
        {/* <label
          htmlFor="number-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ask Your Problems, Krishna will Answer 🦚
        </label> */}
      <div className="flex mx-auto w-full">
        <div className="w-full">
      <input
        className="pl-5 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
        type="text"
        value={userInput}
        onChange={(e) =>
          setUserInput(e.target.value)
         }
        />

        </div>
      <input 
      className="cursor-pointer ml-2 text-white bg-blue-700 border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 min-w-40 max-w-40"
      type="button" value={ (loading) ? 'Asking..' : 'Ask'}
      onClick={() => {
        fetchChat()
      }}
      />
      </div>
      
      {messages.length > 0  && (
        <div className="w-full">
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700">
          {messages.map((message, index) =>
            // (<div key={index}>{message}</div>)
            (<p className="text-sm font-normal text-gray-900 dark:text-white" key={index}>{message} </p>)
          )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
