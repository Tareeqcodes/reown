"use client";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Filter,
  Grid,
  List,
  Star,
  MapPin,
} from "lucide-react";

const VintedClone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedFilters, setSelectedFilters] = useState({
    category: "all",
    size: "all",
    brand: "all",
    condition: "all",
    priceRange: "all",
  });

  const categories = [
    "Women",
    "Men",
    "Kids",
    "Home & Garden",
    "Entertainment",
    "Pets",
  ];

  const products = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      brand: "Levi's",
      size: "M",
      price: 45,
      originalPrice: 120,
      condition: "Very good",
      images: [
        "https://images.unsplash.com/photo-1544966503-7cc36a8b602a?w=400",
      ],
      seller: {
        name: "Emma_Style",
        rating: 4.8,
        reviews: 156,
        location: "London",
      },
      likes: 23,
      isLiked: false,
    },
    {
      id: 2,
      title: "Designer Silk Blouse",
      brand: "Zara",
      size: "S",
      price: 28,
      originalPrice: 79,
      condition: "Good",
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      ],
      seller: {
        name: "FashionQueen",
        rating: 4.9,
        reviews: 89,
        location: "Paris",
      },
      likes: 41,
      isLiked: true,
    },
    {
      id: 3,
      title: "Leather Ankle Boots",
      brand: "Dr. Martens",
      size: "38",
      price: 65,
      originalPrice: 150,
      condition: "Very good",
      images: [
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      ],
      seller: {
        name: "BootLover",
        rating: 4.7,
        reviews: 203,
        location: "Berlin",
      },
      likes: 18,
      isLiked: false,
    },
    {
      id: 4,
      title: "Summer Maxi Dress",
      brand: "H&M",
      size: "L",
      price: 22,
      originalPrice: 49,
      condition: "Good",
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
      ],
      seller: {
        name: "SummerVibes",
        rating: 4.6,
        reviews: 67,
        location: "Barcelona",
      },
      likes: 35,
      isLiked: false,
    },
    {
      id: 5,
      title: "Vintage Band T-Shirt",
      brand: "Vintage",
      size: "M",
      price: 15,
      originalPrice: 35,
      condition: "Good",
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      ],
      seller: {
        name: "VintageCollector",
        rating: 4.8,
        reviews: 134,
        location: "Amsterdam",
      },
      likes: 12,
      isLiked: true,
    },
    {
      id: 6,
      title: "Designer Handbag",
      brand: "Michael Kors",
      size: "One Size",
      price: 85,
      originalPrice: 200,
      condition: "Very good",
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
      ],
      seller: {
        name: "LuxuryFinds",
        rating: 4.9,
        reviews: 98,
        location: "Milan",
      },
      likes: 52,
      isLiked: false,
    },
  ];

  const toggleLike = (productId) => {
    // In a real app, this would update the backend
    console.log(`Toggling like for product ${productId}`);
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => toggleLike(product.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
        >
          <Heart
            className={`w-4 h-4 ${
              product.isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium">
          {product.condition}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {product.brand} • Size {product.size}
        </p>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              €{product.price}
            </span>
            <span className="text-sm text-gray-500 line-through">
              €{product.originalPrice}
            </span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Heart className="w-3 h-3 mr-1" />
            {product.likes}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
              {product.seller.rating}
            </div>
            <span>({product.seller.reviews})</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {product.seller.location}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-teal-600">Vinted</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <Heart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  1
                </span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <User className="w-6 h-6" />
              </button>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-medium">
                Sell now
              </button>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="whitespace-nowrap text-gray-700 hover:text-teal-600 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <Filter className="w-5 h-5 text-gray-500" />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>All categories</option>
                    <option>Clothing</option>
                    <option>Shoes</option>
                    <option>Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>All sizes</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>All brands</option>
                    <option>Zara</option>
                    <option>H&M</option>
                    <option>Levi's</option>
                    <option>Nike</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>All conditions</option>
                    <option>New with tags</option>
                    <option>Very good</option>
                    <option>Good</option>
                    <option>Satisfactory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price range
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 font-medium">
                Apply filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Latest items
                </h2>
                <p className="text-gray-600 mt-1">1,234 items found</p>
              </div>

              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Newest first</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most popular</option>
                </select>

                <div className="flex border border-gray-300 rounded-md">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${
                      viewMode === "grid"
                        ? "bg-teal-50 text-teal-600"
                        : "text-gray-500"
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${
                      viewMode === "list"
                        ? "bg-teal-50 text-teal-600"
                        : "text-gray-500"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-12">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium">
                Load more items
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Vinted</h3>
              <p className="text-gray-400">
                The marketplace for preloved fashion. Buy and sell quality
                secondhand clothes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Buyer Protection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Seller Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Copyright
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vinted Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VintedClone;
