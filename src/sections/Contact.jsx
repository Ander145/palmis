import { Clock, Globe, MailCheck, MapPin } from "lucide-react";
import React, { useState } from "react";
import { addMessages } from "../Appwrite/messagesController";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addMessages({
      name,email,message
    })
    setName("");
    setEmail("");
    setMessage("")
  }

  return (
    <div>
      <div className="flex justify-center mt-10">
        <h2 className="text-4xl border-b-4 border-pink-500 pb-2">Contact Us</h2>
      </div>
      <div className="flex p-5 justify-center items-center min-h-screen max-md:flex-col-reverse">
        <div className="flex flex-1 flex-col p-5 bg-white/70 rounded-2xl shadow-lg backdrop-blur-sm max-w-md">
          <div className="flex items-center gap-3 mb-3 p-3 rounded-lg hover:bg-pink-50 transition">
            <MapPin className="w-6 h-6 text-pink-500" />
            <p className="text-gray-700 font-medium">
              Istanbul, Buyukcekmece Fatih Mah #42
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3 p-3 rounded-lg hover:bg-pink-50 transition">
            <MailCheck className="w-6 h-6 text-pink-500" />
            <p className="text-gray-700 font-medium">nessaistanbul@gmail.com</p>
          </div>

          <div className="flex items-center gap-3 mb-3 p-3 rounded-lg hover:bg-pink-50 transition">
            <Clock className="w-6 h-6 text-pink-500" />
            <p className="text-gray-700 font-medium">Monday-Friday: 09h-23h</p>
          </div>

          <div className="flex items-center gap-3 mb-3 p-3 rounded-lg hover:bg-pink-50 transition">
            <Globe className="w-6 h-6 text-pink-500" />
            <p className="text-gray-700 font-medium">www.nessaistanbul.com</p>
          </div>
        </div>

        <div className="flex flex-1 justify-end">
          <div className="flex flex-col gap-4 w-full max-w-md bg-white/60 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-500 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="mt-3 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg transition-all duration-300 shadow-md"
            onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
