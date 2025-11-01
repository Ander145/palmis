import React, { useState } from 'react'
import CreateProductForm from '../components/CreateProductForm'
import { motion } from "framer-motion";
import { MessageCircle, PlusCircle, ShoppingBasket } from "lucide-react";
import ProoductList from '../components/ProoductList';
import { useNavigate } from 'react-router-dom';
import MessageList from '@/components/MessageList';



const tabs = [
  { id: "create", label: "Create Product", icon: PlusCircle },
  { id: "product", label: "Products", icon: ShoppingBasket },
  { id: "message", label: "Messages", icon: MessageCircle },
];

const AdminPage = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  const [activeTab, setActiveTab] = useState("create")
  return (

    <>
    <div className='flex justify-end'>
       <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 "
      >
        Déconnexion
      </button>
    </div>
    
    <div className="min-h-screen bg-pink-50  relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold mb-8 text-pink-600 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Admin Dashboard
        </motion.h1>
        <div className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-pink-60 text-pink-500"
                  : "bg-pink-60 text-pink-300 hover:bg-pink-600 hover:text-white"
              }`}
            >
              <tab.icon className="mr-2 h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "create" && <CreateProductForm />}
        {activeTab === "product" && <ProoductList />}
        {activeTab === "message" && <MessageList />}
      </div>
    </div>
    </>

    
  )
}

export default AdminPage