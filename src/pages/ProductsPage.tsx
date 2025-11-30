import { useState } from 'react';
import { useCartStore, Product } from '../store/cartStore';

const products: Product[] = [
  {
    id: 1,
    name: "Zyntrix Complete Set",
    price: 16799,
    image: "https://images.unsplash.com/photo-1625780289233-321883d99ac1?w=800&h=600&fit=crop",
    description: "Complete gadget bundle including wireless keyboard, mouse, and headset. Perfect starter pack for your gaming or productivity setup.",
    stock: 15
  },
  {
    id: 2,
    name: "RGB Mechanical Keyboard",
    price: 8399,
    image: "https://images.unsplash.com/photo-1643869094397-962f806fe3ab?w=800&h=600&fit=crop",
    description: "Premium RGB mechanical keyboard with customizable switches and per-key RGB lighting. Perfect for gaming and typing.",
    stock: 23
  },
  {
    id: 3,
    name: "Wireless Gaming Mouse",
    price: 4479,
    image: "https://images.unsplash.com/photo-1631749352438-7d576312185d?w=800&h=600&fit=crop",
    description: "High-precision wireless gaming mouse with 16000 DPI sensor, lightweight design, and customizable RGB lighting.",
    stock: 31
  },
  {
    id: 4,
    name: "Premium Wireless Headset",
    price: 11199,
    image: "https://images.unsplash.com/photo-1763822129929-bba1b521c8e6?w=800&h=600&fit=crop",
    description: "Premium noise-cancelling wireless headset with crystal-clear audio and comfortable over-ear design.",
    stock: 18
  },
  {
    id: 5,
    name: "4K Ultra HD Monitor",
    price: 18999,
    image: "https://cdn.thewirecutter.com/wp-content/media/2025/06/BEST-4K-MONITORS-5554.jpg",
    description: "32-inch 4K Ultra HD gaming monitor with 144Hz refresh rate, HDR support, and curved design for immersive viewing.",
    stock: 12
  },
  {
    id: 6,
    name: "Gaming Laptop Pro",
    price: 89999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    description: "High-performance gaming laptop with RTX 4080, Intel i9 processor, 32GB RAM, and 1TB SSD. Perfect for gaming and content creation.",
    stock: 8
  }
];

interface ProductsPageProps {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
}

export default function ProductsPage({ showCart, setShowCart }: ProductsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { cart, addItem, removeItem, updateQuantity, getTotal } = useCartStore();

  const handleAddToCart = (product: Product) => {
    addItem(product);
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.textContent = `${product.name} added to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-700 via-purple-700 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-gray-200 text-lg">Browse our collection of premium tech gadgets</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#6A0DAD]">₱{product.price.toLocaleString()}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#6A0DAD] transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
              >
                &times;
              </button>
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-[#6A0DAD]">
                ₱{selectedProduct.price.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">In stock: {selectedProduct.stock}</span>
            </div>
            <button
              onClick={() => {
                handleAddToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              className="w-full bg-gradient-to-r from-[#6A0DAD] to-[#1E90FF] text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowCart(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Shopping Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
              >
                &times;
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 mb-4 pb-4 border-b">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">₱{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-2xl font-bold text-[#6A0DAD]">
                      ₱{getTotal().toLocaleString()}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#6A0DAD] to-[#1E90FF] text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(106, 13, 173, 0.2);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
