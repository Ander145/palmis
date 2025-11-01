import { deleteMessage, getMessages } from "@/Appwrite/messagesController";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Trash } from "lucide-react";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const fetched = await getMessages();
      setMessages(fetched);
    };
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce produit? ")) {
      const success = await deleteMessage(id);
      if (success) {
        setMessages((prev) => prev.filter((p) => p.$id !== id));
      }
    }
  };

  return (
    <motion.div
      className="bb-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Sender
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
            Message    
              </th>
              {/* <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              In Stock
            </th> */}

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {messages.map((message) => (
              <tr key={message.$id} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white">
                        {message.$createdAt}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{message.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                {message.message}
                  </div>
                </td>

                {/* <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">${product.InStock}</div>
              </td> */}

                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(message.$id)}
                    className="text-red-400 hover-text-red-300"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {messages.map((message) => (
        <div
          key={message.$id}
          className="bg-gray-800 p-4 rounded-lg mb-4 sm:hidden"
        >
          <div className="flex items-center">
            
            <div className="ml-4">
              <p className="text-white font-medium">{message.$createdAt}</p>
              <p className="text-gray-300">{message.email}</p>
              <p className="text-gray-300">{message.message}</p>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <button onClick={() => toggleFeaturedProduct(product._id)}>
              <Star />
            </button>
            <button onClick={() => deleteProduct(product._id)}>
              <Trash />
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default MessageList;
