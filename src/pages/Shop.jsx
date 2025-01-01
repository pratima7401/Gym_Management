import React, { useState } from 'react';
import { ShoppingCart, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import equipment1 from '../assets/dumbel.jpg';
import equipment2 from '../assets/bands.jpg';
import equipment3 from '../assets/mats.jpg';
import equipment4 from '../assets/dumbells.jpg';
import equipment5 from '../assets/Pband.jpg';
import equipment6 from '../assets/matt.jpg';
import supp1 from '../assets/supp1.jpg';
import supp2 from '../assets/supp2.jpg';
import supp3 from '../assets/supp3.jpg';
import supp4 from '../assets/supp4.jpg';
import supp5 from '../assets/supp5.jpg';
import supp6 from '../assets/supp6.jpg';
import accessorie1 from '../assets/acc.jpg';
import accessorie2 from '../assets/acc1.jpg';
import accessorie3 from '../assets/acc3.jpg';
import accessorie4 from '../assets/acc4.jpg';
import kit1 from '../assets/kit1.jpg';
import kit2 from '../assets/kit.jpg';
import tshirt1 from '../assets/apparel.jpg';
import tshirt2 from '../assets/apparel1.jpg'


const categories = ['All', 'Equipment', 'Supplements', 'Accessories', 'Apparel', 'Kit'];

const products = [
  {
    id: 1,
    name: 'Premium Dumbbell Set',
    category: 'Equipment',
    price: 299.99,
    image: equipment1,
    description: 'Adjustable dumbbell set with rack, 5-50 lbs per dumbbell'
  },
  {
    id: 2,
    name: 'Whey Protein Isolate',
    category: 'Supplements',
    price: 59.99,
    image: supp1,
    description: 'Premium whey protein isolate, 5lbs, 30g protein per serving'
  },
  {
    id: 3,
    name: 'Resistance Bands Set',
    category: 'Equipment',
    price: 29.99,
    image: equipment2,
    description: 'Set of 5 resistance bands with different tension levels'
  },
  {
    id: 4,
    name: 'Pre-Workout Formula',
    category: 'Supplements',
    price: 39.99,
    image: supp2,
    description: 'High-performance pre-workout supplement, 30 servings'
  },
  {
    id: 5,
    name: 'Gym Bag',
    category: 'Accessories',
    price: 49.99,
    image: accessorie1,
    description: 'Spacious gym bag with shoe compartment and wet pocket'
  },
  {
    id: 6,
    name: 'Performance T-Shirt',
    category: 'Apparel',
    price: 24.99,
    image: tshirt1,
    description: 'Moisture-wicking performance t-shirt, available in multiple colors'
  },
  {
    id: 7,
    name: 'Yoga Mat',
    category: 'Equipment',
    price: 34.99,
    image: equipment3,
    description: 'Non-slip yoga mat with carrying strap, 6mm thickness'
  },
  {
    id: 8,
    name: 'BCAA Supplement',
    category: 'Supplements',
    price: 29.99,
    image: supp3,
    description: 'Branched-chain amino acids supplement, 50 servings'
  },
  {
    id: 9,
    name: 'Premium Dumbbell Set',
    category: 'Equipment',
    price: 299.99,
    image: equipment4,
    description: 'Adjustable dumbbell set with rack, 5-50 lbs per dumbbell'
  },
  {
    id: 10,
    name: 'Whey Protein Isolate',
    category: 'Supplements',
    price: 59.99,
    image: supp4,
    description: 'Premium whey protein isolate, 5lbs, 30g protein per serving'
  },
  {
    id: 11,
    name: 'Resistance Bands Set',
    category: 'Equipment',
    price: 29.99,
    image: equipment5,
    description: 'Set of 5 resistance bands with different tension levels'
  },
  {
    id: 12,
    name: 'Pre-Workout Formula',
    category: 'Supplements',
    price: 39.99,
    image: supp5,
    description: 'High-performance pre-workout supplement, 30 servings'
  },
  {
    id: 13,
    name: 'Gym Bag',
    category: 'Accessories',
    price: 49.99,
    image: accessorie2,
    description: 'Spacious gym bag with shoe compartment and wet pocket'
  },
  {
    id: 14,
    name: 'Performance T-Shirt',
    category: 'Apparel',
    price: 24.99,
    image: tshirt2,
    description: 'Moisture-wicking performance t-shirt, available in multiple colors'
  },
  {
    id: 15,
    name: 'Yoga Mat',
    category: 'Equipment',
    price: 34.99,
    image: equipment6,
    description: 'Non-slip yoga mat with carrying strap, 6mm thickness'
  },
  {
    id: 16,
    name: 'BCAA Supplement',
    category: 'Supplements',
    price: 29.99,
    image: supp6,
    description: 'Branched-chain amino acids supplement, 50 servings'
  },
  {
    id: 17,
    name: 'Shaker',
    category: 'Accessories',
    price: 49.99,
    image: accessorie3,
    description: 'Spacious gym bag with shoe compartment and wet pocket'
  },
  {
    id: 18,
    name: 'Shaker',
    category: 'Accessories',
    price: 49.99,
    image: accessorie4,
    description: 'Spacious gym bag with shoe compartment and wet pocket'
  },
  {
    id: 19,
    name: 'Gym Kit',
    category: 'Kit',
    price: 49.99,
    image: kit1,
    description: 'Spacious gym bag with shoe compartment and wet pocket'
  },
  {
    id: 20,
    name: 'Gym Kit',
    category: 'Kit',
    price: 49.99,
    image: kit2,
    description: 'Spacious gym bag with shoe compartment and wet pocket'
  },
];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Shop</h1>
        <div className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6" />
          <span className="bg-purple-600 text-white rounded-full px-2 py-1 text-sm">
            {cartItems.length}
          </span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button 
                  onClick={() => addToCart(product)}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <span className="text-purple-500 font-bold">${product.price}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>
              <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                {product.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;

