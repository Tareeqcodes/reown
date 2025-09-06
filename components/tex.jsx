'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Plus, 
  MessageCircle, 
  Star, 
  MapPin, 
  Heart,
  Filter,
  X,
  Send,
  Camera,
  ChevronLeft,
  Shield,
  Zap,
  TrendingUp,
  Eye
} from 'lucide-react';

const NaijaMarket = () => {
  const [currentView, setCurrentView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  // Simplified mock data with trending focus
  const [items, setItems] = useState([
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      price: 520000,
      originalPrice: 680000,
      condition: "Like New",
      location: "VI, Lagos",
      image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=600",
      seller: { name: "Kemi", rating: 4.9, verified: true },
      trending: true,
      views: 234,
      timeAgo: "2h"
    },
    {
      id: 2,
      title: "Designer Sneakers",
      price: 45000,
      originalPrice: 85000,
      condition: "Good",
      location: "Ikeja, Lagos",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
      seller: { name: "Tunde", rating: 4.7, verified: true },
      trending: true,
      views: 156,
      timeAgo: "4h"
    },
    {
      id: 3,
      title: "MacBook Air M2",
      price: 380000,
      originalPrice: 520000,
      condition: "Excellent",
      location: "Abuja",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600",
      seller: { name: "Ada", rating: 4.8, verified: true },
      trending: false,
      views: 89,
      timeAgo: "1d"
    },
    {
      id: 4,
      title: "Vintage Leather Jacket",
      price: 25000,
      originalPrice: 45000,
      condition: "Very Good",
      location: "PH",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
      seller: { name: "Chidi", rating: 4.6, verified: false },
      trending: true,
      views: 78,
      timeAgo: "6h"
    }
  ]);

  const categories = [
    { id: 'trending', name: 'Trending', icon: '🔥', color: 'from-red-500 to-orange-500' },
    { id: 'phones', name: 'Phones', icon: '📱', color: 'from-blue-500 to-purple-500' },
    { id: 'fashion', name: 'Fashion', icon: '👔', color: 'from-pink-500 to-rose-500' },
    { id: 'tech', name: 'Tech', icon: '💻', color: 'from-green-500 to-emerald-500' },
    { id: 'home', name: 'Home', icon: '🏠', color: 'from-yellow-500 to-amber-500' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'trending' ? item.trending : true;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Hero Section Component
  const HeroSection = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-white/10 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Find Amazing Deals with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Ringo</span>
          </h1>
          <p className="text-white/80 text-lg mb-6">
            Buy & sell with confidence in Nigeria
          </p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-1">
              <div className="flex items-center bg-white rounded-xl shadow-lg">
                <Search className="ml-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-4 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg mr-1">
                  <Filter size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );

  // Category Pills
  const CategoryPills = () => (
    <div className="px-4 py-4">
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === category.id
                ? 'bg-white shadow-lg scale-105'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className={`font-medium ${
              selectedCategory === category.id 
                ? 'bg-gradient-to-r ' + category.color + ' bg-clip-text text-transparent'
                : 'text-gray-700'
            }`}>
              {category.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );

  // Modern Item Card
  const ItemCard = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer"
      onClick={() => setSelectedItem(item)}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Overlay Elements */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {item.trending && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
            >
              <Zap size={12} />
              <span>Hot</span>
            </motion.div>
          )}
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(item.id);
            }}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
          >
            <Heart
              size={16}
              className={favorites.includes(item.id) ? 'text-red-500 fill-current' : 'text-white'}
            />
          </motion.button>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full">
            <span className="font-bold text-lg">{formatPrice(item.price)}</span>
            {item.originalPrice && (
              <span className="ml-2 text-sm line-through text-gray-300">
                {formatPrice(item.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight">
          {item.title}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <MapPin size={14} className="text-gray-400 mr-1" />
              <span className="text-sm text-gray-600">{item.location}</span>
            </div>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-sm text-gray-600">{item.timeAgo}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-400">
            <Eye size={14} />
            <span className="text-xs">{item.views}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {item.seller.name.charAt(0)}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-gray-700">{item.seller.name}</span>
                {item.seller.verified && (
                  <Shield size={12} className="text-blue-500" />
                )}
              </div>
              <div className="flex items-center">
                <Star size={12} className="text-yellow-400 fill-current" />
                <span className="text-xs text-gray-500 ml-1">{item.seller.rating}</span>
              </div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setShowChat(true);
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full"
          >
            <MessageCircle size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  // Floating Action Button
  const FloatingActionButton = () => (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setCurrentView('sell')}
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center z-50"
    >
      <Plus size={24} className="text-white" />
    </motion.button>
  );

  // Simple Sell Form
  const SellForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="bg-white shadow-sm p-4 flex items-center space-x-3">
        <button
          onClick={() => setCurrentView('home')}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Sell Your Item
        </h1>
      </div>
      
      <div className="p-4 space-y-6">
        {/* Photo Upload */}
        <div className="bg-white rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Add Photos</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
            <Camera size={48} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-600 font-medium">Tap to add photos</p>
            <p className="text-sm text-gray-400 mt-1">Up to 5 photos</p>
          </div>
        </div>

        {/* Item Details */}
        <div className="bg-white rounded-2xl p-6 space-y-4">
          <input
            type="text"
            placeholder="What are you selling?"
            className="w-full p-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-purple-500 text-lg font-medium"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Price (₦)"
              className="w-full p-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-purple-500"
            />
            <select className="w-full p-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-purple-500">
              <option>Condition</option>
              <option>New</option>
              <option>Like New</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          
          <textarea
            placeholder="Tell us more about your item..."
            rows={4}
            className="w-full p-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-purple-500 resize-none"
          />
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Location</h3>
          <select className="w-full p-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-purple-500">
            <option>Select your location</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
            <option>Kano</option>
          </select>
        </div>

        {/* Post Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentView('home')}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
        >
          Post Your Item
        </motion.button>
      </div>
    </motion.div>
  );

  // Main Home View
  const HomeView = () => (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CategoryPills />
      
      <div className="px-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            {selectedCategory === 'trending' ? 'Trending Now' : 'Latest Items'}
          </h2>
          <div className="flex items-center space-x-1 text-purple-600">
            <TrendingUp size={16} />
            <span className="text-sm font-medium">{filteredItems.length} items</span>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <ItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
      
      <FloatingActionButton />
    </div>
  );

  // Simple Chat Modal
  const ChatModal = () => (
    <AnimatePresence>
      {showChat && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-end z-50"
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="bg-white rounded-t-3xl w-full h-2/3 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Chat with Seller</h2>
              <button
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Start a conversation</h3>
              <p className="text-gray-600 mb-6">Send a message to the seller</p>
              
              <div className="w-full max-w-md">
                <input
                  type="text"
                  placeholder="Hi, is this still available?"
                  className="w-full p-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-purple-500 mb-4"
                />
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold">
                  Send Message
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="relative">
      {currentView === 'home' && <HomeView />}
      {currentView === 'sell' && <SellForm />}
      <ChatModal />
    </div>
  );
};

export default NaijaMarket;