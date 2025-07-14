
import React, { useState, useEffect } from 'react';
import { Upload, Package, Calendar, DollarSign, Tag, Hash } from 'lucide-react';
import { useAddProductStore } from '../../store/addproduct';

const AddProduct = () => {
  const {addProduct} = useAddProductStore();
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    quantity: '',
    expiryDate: '',
    price: '',
    // image: null
  });

// const [isDarkMode, setIsDarkMode] = useState(false);
    const isDarkMode = true;
    const [dragActive, setDragActive] = useState(false);

  // Check for dark mode on component mount and listen for changes
  useEffect(() => {
    const checkDarkMode = () => {
      // setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0] || null;
    setProductData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setProductData(prev => ({
        ...prev,
        image: e.dataTransfer.files[0]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Product added:', productData);
    // Handle form submission
    await addProduct(productData);
    // Reset form after submission
    setProductData({
      name: '',
      category: '',
      quantity: '',
      expiryDate: '',
      price: '',
    })
  };

  return (
    <section className={`py-20 px-6 transition-all duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 to-blue-50'
    }`}>
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Add New Product
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-all duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Enter your product details and upload an image to track inventory and expiry dates
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className={`rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-500 hover:shadow-3xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
        }`}>
          {/* Product Name & Category Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="form-group group">
              <label htmlFor="name" className={`flex items-center gap-2 font-semibold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                <Package className="w-5 h-5" />
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 group-hover:border-green-400 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/20 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                required
              />
            </div>
            
            <div className="form-group group">
              <label htmlFor="category" className={`flex items-center gap-2 font-semibold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                <Tag className="w-5 h-5" />
                Category
              </label>
              <select
                id="category"
                name="category"
                value={productData.category}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 group-hover:border-green-400 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/20 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-200 text-gray-900'
                }`}
                required
              >
                <option value="">Select category</option>
                <option value="dairy">🥛 Dairy</option>
                <option value="bakery">🍞 Bakery</option>
                <option value="meat">🥩 Meat</option>
                <option value="vegetables">🥕 Vegetables</option>
                <option value="fruits">🍎 Fruits</option>
                <option value="seafood">🐟 Seafood</option>
                <option value="beverages">🥤 Beverages</option>
                <option value="snacks">🍿 Snacks</option>
              </select>
            </div>
          </div>
          
          {/* Quantity & Expiry Date Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="form-group group">
              <label htmlFor="quantity" className={`flex items-center gap-2 font-semibold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                <Hash className="w-5 h-5" />
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleInputChange}
                placeholder="Enter quantity"
                className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 group-hover:border-green-400 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/20 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                required
              />
            </div>
            
            <div className="form-group group">
              <label htmlFor="expiryDate" className={`flex items-center gap-2 font-semibold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                <Calendar className="w-5 h-5" />
                Expiry Date
              </label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                value={productData.expiryDate}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 group-hover:border-green-400 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/20 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-200 text-gray-900'
                }`}
                required
              />
            </div>
          </div>
          
          {/* Price & Image Upload Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="form-group group">
              <label htmlFor="price" className={`flex items-center gap-2 font-semibold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                <DollarSign className="w-5 h-5" />
                Price per Unit
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
                placeholder="Enter price"
                step="0.01"
                className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 group-hover:border-green-400 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/20 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                required
              />
            </div>
            
            {/* <div className="form-group">
              <label className={`flex items-center gap-2 font-semibold mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                <Upload className="w-5 h-5" />
                Product Image
              </label>
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 hover:border-green-400 ${
                  dragActive 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                    : isDarkMode 
                      ? 'border-gray-600 bg-gray-700/30' 
                      : 'border-gray-300 bg-gray-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className={`w-12 h-12 mx-auto mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {productData.image ? productData.image.name : 'Drag & drop an image or click to browse'}
                </p>
              </div>
            </div> */}
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg transform active:scale-95"
          >
            <span className="flex items-center justify-center gap-3">
              <Package className="w-6 h-6" />
              Add Product to Inventory
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;