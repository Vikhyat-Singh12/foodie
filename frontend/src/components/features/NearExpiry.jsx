import React, { useState } from 'react';
import { useAddProductStore } from '../../store/addproduct';
import dayjs from 'dayjs';

const NearlyExpiry = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { products, setDiscount } = useAddProductStore();

  const getDaysLeft = (expiryDate) => {
    const today = dayjs();
    const expiry = dayjs(expiryDate);
    return expiry.diff(today, 'day');
  };

  const getStatus = (daysLeft) => {
    if (daysLeft <= 2) return 'urgent';
    if (daysLeft <= 4) return 'critical';
    if (daysLeft <= 7) return 'warning';
    return 'normal';
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'urgent': return 'bg-red-500 text-white';
      case 'critical': return 'bg-yellow-500 text-white';
      case 'warning': return 'bg-blue-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const enrichedProducts = products.map((product, index) => {
    const daysLeft = getDaysLeft(product.expiryDate);
    const status = getStatus(daysLeft);
    return {
      id: product.id || index,
      name: product.name || 'Unnamed Product',
      category: product.category || 'Uncategorized',
      quantity: product.quantity || 0,
      expiryDate: product.expiryDate || 'N/A',
      daysLeft,
      status
    };
  });

  const filteredProducts = enrichedProducts.filter(product => {
    const matchesFilter = selectedFilter === 'all' || product.status === selectedFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatCount = (status) => enrichedProducts.filter(product => product.status === status).length;
  const handleStatClick = (status) => setSelectedFilter(selectedFilter === status ? 'all' : status);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Food Near Expiry</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take action on food items approaching expiration to reduce waste and maximize value.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          {['urgent', 'critical', 'warning'].map(status => (
            <div
              key={status}
              onClick={() => handleStatClick(status)}
              className={`cursor-pointer px-6 py-4 rounded-xl text-white font-semibold shadow-md transition-all duration-300 ${
                status === 'urgent' ? 'bg-red-600 hover:bg-red-700' :
                status === 'critical' ? 'bg-yellow-500 hover:bg-yellow-600' :
                'bg-blue-500 hover:bg-blue-600'} ${selectedFilter === status ? 'scale-105 ring-2 ring-white' : ''}`}
            >
              <div className="text-2xl">{getStatCount(status)}</div>
              <div className="text-sm capitalize">{status}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-20 text-lg">
            No products found matching your search criteria.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(product.status)}`}>
                    {product.daysLeft} days
                  </span>
                </div>

                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Expiry Date:</strong> {product.expiryDate}</p>
                  <p><strong>Quantity:</strong> {product.quantity} units</p>
                  <p><strong>Suggested Action:</strong> {
                    product.status === 'urgent' ? 'Donate immediately' :
                    product.status === 'critical' ? 'Apply discount' :
                    product.status === 'warning' ? 'Monitor closely' : 'Normal stock'}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time Remaining</div>
                  <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getStatusClass(product.status)}`}
                      style={{ width: `${Math.max(10, (product.daysLeft / 7) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300">Find NGO</button>
                <button
                  className="flex-1 py-2 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold transition-all duration-300"
                  onClick={async () => {
                    const discountedPrice = prompt('Enter discounted price:');
                    if (!discountedPrice || isNaN(discountedPrice)) {
                      alert('Please enter a valid number.');
                      return;
                    }

                    try {
                      await setDiscount(product.id, parseFloat(discountedPrice));
                      alert('Discount set successfully!');
                    } catch (err) {
                      alert('Failed to set discount.');
                    }
                  }}
                >
                  Set Discount
                </button>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NearlyExpiry;
