import React, { useState } from 'react';
import { Search, Filter, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import { useAddProductStore } from '../../store/addproduct';
// import './ProductListing.css';

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {products} = useAddProductStore();
  
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Food Inventory
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Manage your food products with smart expiry tracking
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl transition-colors duration-300">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search food products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Food Product</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Category</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Price</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Stock</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Expiry</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr 
                    key={product.id} 
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{product.image}</div>
                        <div className="font-medium text-gray-900 dark:text-white">{product.name}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">
                      {product.price}
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-white">
                      {product.stock}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.status === 'Fresh' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-white">
                      {product.expiryDays} days
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-600 dark:text-gray-400">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;