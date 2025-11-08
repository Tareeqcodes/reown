'use client';
import React, { useState } from 'react';
import { X, Check, ChevronDown, Edit2, BadgeCheck, ImagePlus, Sparkles } from 'lucide-react';

const RingoApp = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    type: '',
    condition: '',
    size: '',
    price: '',
    fabric: '',
    description: '',
    chest: '',
    length: '',
    waist: ''
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.slice(0, 5 - uploadedImages.length).map(file => URL.createObjectURL(file));
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const removeImage = (index) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const ProgressIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-6">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
            step < currentScreen ? 'bg-purple-600 text-white' :
            step === currentScreen ? 'bg-purple-600 text-white' :
            'bg-gray-200 text-gray-400'
          }`}>
            {step < currentScreen ? <Check size={16} /> : step}
          </div>
          {step < 4 && (
            <div className={`w-8 h-0.5 ${step < currentScreen ? 'bg-purple-600' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  );

  const UploadPhotosScreen = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Photos</h2>
      <p className="text-sm text-gray-500 mb-6">Add up to 5 high-quality images</p>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {uploadedImages.map((img, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img src={img} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 w-6 h-6 bg-gray-900 bg-opacity-70 rounded-full flex items-center justify-center"
              >
                <X size={14} className="text-white" />
              </button>
              {index === 0 && (
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-md font-medium">
                  Cover
                </div>
              )}
            </div>
          ))}
          
          {uploadedImages.length < 5 && (
            <label className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-purple-600 hover:bg-purple-50 transition-all">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <ImagePlus size={32} className="text-gray-400 mb-2" />
              <span className="text-xs text-gray-500 font-medium">Add Photo</span>
            </label>
          )}
        </div>

        {uploadedImages.length > 0 && (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <Sparkles size={20} className="text-purple-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-purple-900 mb-1">Photo Tips</p>
                <p className="text-xs text-purple-700">Use natural lighting and show different angles. Clear photos sell faster!</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => uploadedImages.length > 0 && setCurrentScreen(2)}
        disabled={uploadedImages.length === 0}
        className={`w-full py-4 rounded-full font-semibold text-white ${
          uploadedImages.length > 0 ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-300 cursor-not-allowed'
        } transition-colors`}
      >
        Next
      </button>
    </div>
  );

  const AddDetailsScreen = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Details</h2>
      <p className="text-sm text-gray-500 mb-6">Describe your item accurately</p>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="e.g. Men's Kaftan - Blue Cotton"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
            <div className="relative">
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Type *</label>
            <div className="relative">
              <select
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="kaftan">Kaftan</option>
                <option value="agbada">Agbada</option>
                <option value="gown">Gown</option>
                <option value="shirt">Shirt</option>
                <option value="trouser">Trouser</option>
                <option value="dress">Dress</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Condition *</label>
            <div className="relative">
              <select
                value={formData.condition}
                onChange={(e) => handleInputChange('condition', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="used">Used</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Size *</label>
            <div className="relative">
              <select
                value={formData.size}
                onChange={(e) => handleInputChange('size', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₦) *</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
            placeholder="15,000"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Fabric/Material</label>
          <input
            type="text"
            value={formData.fabric}
            onChange={(e) => handleInputChange('fabric', e.target.value)}
            placeholder="e.g. Cotton, Ankara, Lace"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Measurements (Optional)</label>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              value={formData.chest}
              onChange={(e) => handleInputChange('chest', e.target.value)}
              placeholder="Chest"
              className="px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <input
              type="text"
              value={formData.length}
              onChange={(e) => handleInputChange('length', e.target.value)}
              placeholder="Length"
              className="px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <input
              type="text"
              value={formData.waist}
              onChange={(e) => handleInputChange('waist', e.target.value)}
              placeholder="Waist"
              className="px-3 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe your item, mention any flaws or special features..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setCurrentScreen(1)}
          className="flex-1 py-4 rounded-full font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-50 transition-colors"
        >
          Save Draft
        </button>
        <button
          onClick={() => setCurrentScreen(3)}
          className="flex-1 py-4 rounded-full font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );

  const ReviewListingScreen = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Listing</h2>
      <p className="text-sm text-gray-500 mb-6">Make sure everything looks perfect</p>

      <div className="flex-1 overflow-y-auto mb-4">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-4">
          <div className="aspect-square bg-gray-100">
            {uploadedImages[0] && (
              <img src={uploadedImages[0]} alt="Preview" className="w-full h-full object-cover" />
            )}
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900 flex-1">{formData.title || 'Item Title'}</h3>
              <button className="text-purple-600 p-1">
                <Edit2 size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold text-gray-900">₦{formData.price || '0'}</span>
              <span className="text-sm text-gray-500">• Size {formData.size?.toUpperCase() || 'N/A'}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.category && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {formData.category}
                </span>
              )}
              {formData.type && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {formData.type}
                </span>
              )}
              {formData.condition && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {formData.condition}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 line-clamp-3">{formData.description || 'No description provided'}</p>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Check size={20} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-purple-900 mb-1">Payment Protection</p>
            <p className="text-xs text-purple-700">Your payment is protected with escrow. Funds are only released after delivery confirmation.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setCurrentScreen(2)}
          className="px-6 py-4 rounded-full font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-50 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => setCurrentScreen(4)}
          className="flex-1 py-4 rounded-full font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          Post Item
        </button>
      </div>
    </div>
  );

  const SuccessScreen = () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
          <Check size={40} className="text-white" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Listed Successfully!</h2>
      <p className="text-gray-600 mb-8 max-w-sm">
        Your item is now live on RINGO. Buyers can start viewing and making offers.
      </p>

      <div className="w-full space-y-3">
        <button
          onClick={() => {
            setCurrentScreen(1);
            setUploadedImages([]);
            setFormData({
              title: '', category: '', type: '', condition: '', size: '',
              price: '', fabric: '', description: '', chest: '', length: '', waist: ''
            });
          }}
          className="w-full py-4 rounded-full font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          Add Another Item
        </button>
        <button className="w-full py-4 rounded-full font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-50 transition-colors">
          View Listing
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <button onClick={() => currentScreen > 1 && setCurrentScreen(currentScreen - 1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">RINGO</span>
          <BadgeCheck size={20} className="text-purple-600" />
        </div>
        <button>
          <X size={24} className="text-gray-900" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 flex flex-col overflow-hidden">
        {currentScreen < 4 && <ProgressIndicator />}
        
        {currentScreen === 1 && <UploadPhotosScreen />}
        {currentScreen === 2 && <AddDetailsScreen />}
        {currentScreen === 3 && <ReviewListingScreen />}
        {currentScreen === 4 && <SuccessScreen />}
      </div>
    </div>
  );
};

export default RingoApp;