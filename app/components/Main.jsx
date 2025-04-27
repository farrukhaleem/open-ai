import React from 'react';
import { Mic, Send } from 'lucide-react';

export default function GitaGPT() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-2">🎵🦚</div>
        <h1 className="text-4xl font-bold">GitaGPT</h1>
        <p className="text-yellow-600 mt-2">Unlocking life's mysteries with Krishna, 10,00,000+ answered queries</p>
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2 bg-gray-800 rounded-full p-2 w-full max-w-xl mb-8">
        <input
          type="text"
          placeholder="Ask Bhagavad Gita a question.."
          className="bg-transparent text-white border-none outline-none flex-1 px-4"
        />
        <Mic className="text-white cursor-pointer" />
        <button className="p-2 rounded-full hover:bg-gray-700">
          <Send className="text-white" />
        </button>
      </div>

      {/* Sample questions */}
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl text-center mb-10">
        <p className="bg-gray-700 px-4 py-2 rounded-lg text-sm">"How can I develop a deeper sense of love and compassion towards all beings?"</p>
        <p className="bg-gray-700 px-4 py-2 rounded-lg text-sm">"How can I develop a deeper connection with God?"</p>
        <p className="bg-gray-700 px-4 py-2 rounded-lg text-sm">"How can I overcome my fears and insecurities?"</p>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm mb-4">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
        <div className="flex justify-center gap-4">
          <a href="#"><i className="fab fa-twitter text-blue-400"></i></a>
          <a href="#"><i className="fab fa-instagram text-pink-400"></i></a>
          <a href="#"><i className="fab fa-facebook text-blue-600"></i></a>
        </div>
      </div>

      {/* Floating button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-indigo-500 text-white p-3 rounded-full shadow-lg text-xl">
          🥤
        </button>
      </div>
    </div>
  );
}