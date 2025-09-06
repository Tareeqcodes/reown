'use client';
import { useState } from 'react';
import { Heart, Search, Filter, Star, MapPin, Clock, Camera, User, Home, MessageCircle, Plus, Bell, CheckCircle, Shield, Verified, ChevronLeft, Share, MoreHorizontal, Eye, TrendingUp, Zap, Award } from 'lucide-react';

const RingoApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'trending', name: 'Trending', icon: TrendingUp, color: 'bg-red-500' },
    { id: 'new-in', name: 'New In', icon: Zap, color: 'bg-blue-500' },
    { id: 'affordable', name: 'Affordable', icon: CheckCircle, color: 'bg-green-500' },
    { id: 'premium', name: 'Premium', icon: Award, color: 'bg-purple-500' }
  ];
  
  const listings = [
    {
      id: 1,
      title: "Royal Blue Agbada with Gold Embroidery",
      price: "₦45,000",
      originalPrice: "₦85,000",
      location: "Victoria Island, Lagos",
      seller: "FashionEmpress",
      sellerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=40&h=40&fit=crop&crop=face",
      rating: 4.8,
      totalReviews: 127,
      timePosted: "2h",
      images: [
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=600&fit=crop&crop=center"
      ],
      measurements: { 
        chest: "44\"", 
        length: "60\"", 
        sleeve: "24\"",
        shoulder: "18\"" 
      },
      verified: true,
      category: 'premium',
      condition: 'Like New',
      brand: 'Adire Couture',
      size: 'XL',
      views: 89,
      likes: 23,
      isLiked: false
    },
    {
      id: 2,
      title: "Ankara Print Midi Dress - Floral Pattern",
      price: "₦12,500",
      originalPrice: "₦25,000",
      location: "Wuse II, Abuja",
      seller: "AfroStyleBae",
      sellerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      rating: 4.9,
      totalReviews: 203,
      timePosted: "1d",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop&crop=center"
      ],
      measurements: { 
        waist: "32\"", 
        chest: "36\"", 
        length: "45\"",
        hip: "38\"" 
      },
      verified: true,
      category: 'affordable',
      condition: 'Excellent',
      brand: 'Vlisco',
      size: 'M',
      views: 156,
      likes: 45,
      isLiked: false
    },
    {
      id: 3,
      title: "Designer Emerald Kaftan - Silk Blend",
      price: "₦28,000",
      originalPrice: "₦60,000",
      location: "Sabon Gari, Kano",
      seller: "NorthernVibes",
      sellerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 4.7,
      totalReviews: 89,
      timePosted: "3h",
      images: [
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=600&fit=crop&crop=center"
      ],
      measurements: { 
        chest: "38\"", 
        length: "54\"", 
        sleeve: "20\"",
        shoulder: "16\"" 
      },
      verified: true,
      category: 'trending',
      condition: 'Very Good',
      brand: 'Hausa Couture',
      size: 'L',
      views: 234,
      likes: 67,
      isLiked: false
    }
  ];

  const filteredListings = listings.filter(item => item.category === selectedCategory);

  const toggleFavorite = (id, event) => {
    event.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const Header = () => (
    <div className="bg-white">
      {/* Status Bar Simulation */}
      <div className="h-11 bg-black flex items-center justify-between px-4 text-white text-sm">
        <span>9:41</span>
        <span>••••• Airtel</span>
        <div className="flex items-center gap-1">
          <span>100%</span>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-full h-full bg-white rounded-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="px-4 py-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">RINGO</h1>
            <p className="text-slate-300 text-sm font-medium mt-1">Authentic African Fashion</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Bell className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </div>
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center border-2 border-white/20">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search Agbada, Ankara, Sneakers..."
            className="w-full bg-white/95 backdrop-blur-sm border-0 rounded-2xl py-4 pl-12 pr-12 text-slate-900 placeholder-slate-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-medium"
          />
          <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <Filter className="w-5 h-5 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );

  const CategoryTabs = () => (
    <div className="bg-white px-4 py-2 border-b border-slate-100">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map(category => {
          const IconComponent = category.icon;
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? `${category.color} text-white shadow-md transform scale-105`
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );

  const ProductCard = ({ item }) => (
    <div 
      className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-4 mx-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedItem(item)}
    >
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden">
          <img 
            src={item.images[0]} 
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Overlay Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        
        {/* Top Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="flex gap-2">
            {item.category === 'trending' && (
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-sm">
                🔥 Hot
              </div>
            )}
            {item.condition && (
              <div className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                {item.condition}
              </div>
            )}
          </div>
          
          <button
            onClick={(e) => toggleFavorite(item.id, e)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
              favorites.includes(item.id)
                ? 'bg-red-500 text-white shadow-lg scale-110'
                : 'bg-white/90 text-slate-600 hover:bg-white hover:scale-110'
            }`}
          >
            <Heart 
              className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-current' : ''}`} 
            />
          </button>
        </div>
        
        {/* Bottom Stats */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="flex items-center gap-3 text-white text-sm">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span className="font-medium">{item.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span className="font-medium">{item.likes}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-black text-slate-900">{item.price}</span>
          {item.originalPrice && (
            <>
              <span className="text-sm text-slate-400 line-through font-medium">{item.originalPrice}</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">
                {Math.round((1 - parseInt(item.price.replace(/[₦,]/g, '')) / parseInt(item.originalPrice.replace(/[₦,]/g, ''))) * 100)}% OFF
              </span>
            </>
          )}
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-slate-900 text-lg leading-tight mb-3 line-clamp-2">
          {item.title}
        </h3>
        
        {/* Brand & Size */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
            {item.brand}
          </span>
          <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
            Size {item.size}
          </span>
        </div>
        
        {/* Location & Time */}
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{item.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{item.timePosted} ago</span>
          </div>
        </div>
        
        {/* Seller Info */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <img 
              src={item.sellerImage} 
              alt={item.seller}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-slate-900">{item.seller}</span>
                {item.verified && <Verified className="w-4 h-4 text-blue-500" />}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-slate-600 font-medium">{item.rating} ({item.totalReviews})</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Measurements Preview */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 mb-5">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-slate-700">📏 Measurements</h4>
            <span className="text-xs text-slate-500 font-medium">Tap for details</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(item.measurements).slice(0, 4).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-xs text-slate-500 capitalize font-medium mb-1">{key}</div>
                <div className="text-sm font-bold text-slate-900">{value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 rounded-2xl font-bold text-sm hover:from-slate-800 hover:to-slate-700 transition-all duration-200 shadow-lg">
            Buy with Escrow
          </button>
          <button className="p-4 border-2 border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
            <MessageCircle className="w-5 h-5 text-slate-600" />
          </button>
          <button className="p-4 border-2 border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
            <Share className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
    </div>
  );

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200">
      <div className="flex justify-around py-3 px-2">
        {[
          { icon: Home, label: 'Home', view: 'home', isActive: currentView === 'home' },
          { icon: Search, label: 'Explore', view: 'search', isActive: currentView === 'search' },
          { icon: Plus, label: 'Sell', view: 'sell', isActive: currentView === 'sell', isSpecial: true },
          { icon: Heart, label: 'Saved', view: 'favorites', isActive: currentView === 'favorites' },
          { icon: User, label: 'Profile', view: 'profile', isActive: currentView === 'profile' }
        ].map(({ icon: Icon, label, view, isActive, isSpecial }) => (
          <button
            key={view}
            onClick={() => setCurrentView(view)}
            className={`flex flex-col items-center py-2 px-3 rounded-2xl transition-all duration-200 ${
              isSpecial 
                ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg transform -translate-y-1' 
                : isActive 
                ? 'text-slate-900 bg-slate-100' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Icon className={`w-5 h-5 mb-1 ${isSpecial ? 'text-white' : ''}`} />
            <span className={`text-xs font-medium ${isSpecial ? 'text-white' : ''}`}>{label}</span>
          </button>
        ))}
      </div>
      <div className="h-safe-bottom"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <CategoryTabs />
      
      <div className="pb-24 pt-2">
        {filteredListings.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      
      <BottomNav />
    </div>
  );
};

export default RingoApp;