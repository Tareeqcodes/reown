'use client '
import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, Filter, Star, MapPin, MessageCircle, Shield, TrendingUp, Plus } from 'lucide-react';

const VintedClone = () => {
  const [activeView, setActiveView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Sample product data
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400',
      title: 'Vintage Denim Jacket',
      price: '₦8,500',
      size: 'M',
      brand: 'Levi\'s',
      condition: 'Good',
      seller: 'fashionista_ng',
      rating: 4.8,
      location: 'Lagos'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400',
      title: 'Floral Summer Dress',
      price: '₦6,200',
      size: 'S',
      brand: 'Zara',
      condition: 'Like New',
      seller: 'vintage_finds',
      rating: 4.9,
      location: 'Abuja'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400',
      title: 'White Sneakers',
      price: '₦12,000',
      size: '42',
      brand: 'Nike',
      condition: 'Good',
      seller: 'sneaker_hub',
      rating: 4.7,
      location: 'Lagos'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
      title: 'Leather Handbag',
      price: '₦15,800',
      size: 'One Size',
      brand: 'Michael Kors',
      condition: 'Like New',
      seller: 'luxury_bags',
      rating: 5.0,
      location: 'Port Harcourt'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400',
      title: 'Black Blazer',
      price: '₦9,500',
      size: 'L',
      brand: 'H&M',
      condition: 'Good',
      seller: 'professional_wear',
      rating: 4.6,
      location: 'Abuja'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
      title: 'Striped T-Shirt',
      price: '₦3,500',
      size: 'M',
      brand: 'Uniqlo',
      condition: 'Good',
      seller: 'casual_style',
      rating: 4.5,
      location: 'Lagos'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400',
      title: 'Blue Jeans',
      price: '₦7,800',
      size: '32',
      brand: 'Wrangler',
      condition: 'Like New',
      seller: 'denim_lover',
      rating: 4.8,
      location: 'Ibadan'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400',
      title: 'Gold Watch',
      price: '₦25,000',
      size: 'One Size',
      brand: 'Fossil',
      condition: 'Excellent',
      seller: 'timepiece_ng',
      rating: 4.9,
      location: 'Lagos'
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const categories = [
    'Women', 'Men', 'Kids', 'Shoes', 'Bags', 'Accessories', 'Home', 'Electronics'
  ];

  const Header = () => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold text-teal-600 cursor-pointer" onClick={() => setActiveView('home')}>
              RINGO
            </h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {categories.slice(0, 4).map(cat => (
                <button key={cat} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
              <Plus size={20} />
              Sell
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart size={24} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <ShoppingBag size={24} className="text-gray-700" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-2">
            {categories.map(cat => (
              <button key={cat} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
                {cat}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );

  const Hero = () => (
    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Buy and sell secondhand fashion
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Join thousands of fashion lovers buying and selling preloved items
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Shopping
            </button>
            <button className="px-8 py-4 bg-teal-700 text-white rounded-lg font-semibold hover:bg-teal-800 transition-colors">
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Filters = () => (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4 overflow-x-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors whitespace-nowrap">
            <Filter size={18} />
            Filters
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors whitespace-nowrap">
            Size
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors whitespace-nowrap">
            Brand
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors whitespace-nowrap">
            Condition
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors whitespace-nowrap">
            Price
          </button>
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setSelectedItem(product)}
    >
      <div className="relative aspect-[3/4] bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(product.id);
          }}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart 
            size={20} 
            className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-white text-xs font-semibold rounded-full">
            {product.condition}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{product.title}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold text-gray-900">{product.price}</span>
          <span className="text-sm text-gray-500">Size {product.size}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{product.location}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductGrid = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Latest Items
        </h2>
        <span className="text-gray-500">{products.length} items</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  const ProductDetail = ({ product }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Item Details</h2>
          <button onClick={() => setSelectedItem(null)} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Image */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0"></div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <p className="text-3xl font-bold text-teal-600">{product.price}</p>
              </div>
              <button 
                onClick={() => toggleFavorite(product.id)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Heart 
                  size={24} 
                  className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}
                />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Size</span>
                <span className="font-semibold">{product.size}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Condition</span>
                <span className="font-semibold">{product.condition}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Location</span>
                <span className="font-semibold flex items-center gap-1">
                  <MapPin size={16} />
                  {product.location}
                </span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {product.seller[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold">{product.seller}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-white rounded-full transition-colors">
                  <MessageCircle size={20} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors">
                Buy Now
              </button>
              <button className="w-full py-4 border-2 border-teal-600 text-teal-600 rounded-xl font-semibold hover:bg-teal-50 transition-colors">
                Make an Offer
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <Shield size={18} className="text-teal-600" />
              <span>Buyer Protection: Full refund if item not as described</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TrustSection = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose RINGO?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Buyer Protection</h3>
            <p className="text-gray-600">Your payments are protected. Get refunds if items don't match descriptions.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Selling</h3>
            <p className="text-gray-600">List items in minutes. We handle payments and shipping logistics.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={32} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Sellers</h3>
            <p className="text-gray-600">Shop from trusted sellers with verified ratings and reviews.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RINGO</h3>
            <p className="text-gray-400">Nigeria's trusted secondhand fashion marketplace</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Women</a></li>
              <li><a href="#" className="hover:text-white">Men</a></li>
              <li><a href="#" className="hover:text-white">Kids</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">How it works</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 RINGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Filters />
      <ProductGrid />
      <TrustSection />
      <Footer />
      
      {selectedItem && <ProductDetail product={selectedItem} />}
    </div>
  );
};

export default VintedClone;