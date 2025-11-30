import { Link } from 'react-router-dom';
import DotGrid from '../components/DotGrid';

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Tech Animation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a1f] via-[#1a1a3f] to-[#0f0f2a] text-white py-20 md:py-32">
        {/* Tech Background Animation */}
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={4}
            gap={40}
            baseColor="#1E90FF"
            activeColor="#6A0DAD"
            proximity={120}
            shockRadius={200}
            shockStrength={3}
            resistance={800}
            returnDuration={1.8}
          />
        </div>
        
        {/* Circuit Lines */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="circuit-line circuit-line-1"></div>
          <div className="circuit-line circuit-line-2"></div>
          <div className="circuit-line circuit-line-3"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="glitch-wrapper mb-6">
            <h1 className="text-4xl md:text-6xl font-bold glitch-text" data-text="Welcome to Zyntrix">
              Welcome to Zyntrix
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up-delay tech-subtitle">
            Discover the Latest Tech Gadgets at Unbeatable Prices
          </p>
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-[#6A0DAD] to-[#1E90FF] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition shadow-2xl animate-fade-in-up-delay-2 cyber-button"
          >
            <span className="relative z-10">Explore Products</span>
          </Link>
          
        </div>
      </section>

      {/* Featured Promotions */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-700 via-purple-700 to-slate-700">
        <div className="text-center mb-12 px-4 container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">🔥 Hot Deals Today!</h2>
          <p className="text-gray-300 text-lg">Limited time offers you can't miss</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="products-carousel-container">
            <div className="carousel-item rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="relative">
                <img src="https://www.xiaomibase.com/wp-content/uploads/2024/04/xiaomi-redmi-g-pro-2024-12-500x410.webp" alt="Premium Gaming Laptop" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">35% OFF</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Zyntrix Laptop Pro</h3>
                <p className="text-gray-600 mb-4">Intel i7 • RTX 4060 • 16GB RAM • 512GB SSD</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-600">₱58,999</span>
                  <span className="text-lg text-gray-400 line-through">₱89,999</span>
                </div>
                <p className="text-red-600 font-bold mb-4">⏰ Today Only!</p>
                <Link to="/products" className="w-full block text-center bg-[#6A0DAD] text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transform transition">Buy Now</Link>
              </div>
            </div>
            <div className="carousel-item rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="relative">
                <img src="https://www.cnet.com/a/img/resize/10bed3b7c4dd2d3a4223bf764f23a8e5980b0177/hub/2023/01/31/e3d900cf-3d6b-4a07-b073-a4aa53c45416/samsung-galaxy-book-3-ultra-image-02-hi.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="UltraBook" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">30% OFF</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Z-book Pro Business</h3>
                <p className="text-gray-600 mb-4">Intel i5 • Intel Iris Xe • 8GB RAM • 256GB SSD</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-600">₱34,999</span>
                  <span className="text-lg text-gray-400 line-through">₱49,999</span>
                </div>
                <p className="text-red-600 font-bold mb-4">⏰ Flash Sale!</p>
                <Link to="/products" className="w-full block text-center bg-[#1E90FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transform transition">Grab Deal</Link>
              </div>
            </div>
            <div className="carousel-item rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="relative">
                <img src="https://cdn.mos.cms.futurecdn.net/KgUDEFHGVMPkSCvLpMGTTT.jpg" alt="Creator Workstation" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">28% OFF</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Z-Creator Workstation Pro</h3>
                <p className="text-gray-600 mb-4">Intel i9 • RTX 4080 • 32GB RAM • 1TB SSD</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-600">₱149,999</span>
                  <span className="text-lg text-gray-400 line-through">₱209,999</span>
                </div>
                <p className="text-red-600 font-bold mb-4">⏰ Limited Stock!</p>
                <Link to="/products" className="w-full block text-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transform transition">Buy Now</Link>
              </div>
            </div>
            <div className="carousel-item rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="relative">
                <img src="https://media.wired.com/photos/67e5bd328eceed9f2cae96f3/4:3/w_640%2Cc_limit/Razer-Blade-16-2025-Laptop-(front)-Reviewer-Photo-SOURCE-Luke-Larsen.jpg" alt="Gaming Laptop" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">25% OFF</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Z-Gaming Laptop Essential</h3>
                <p className="text-gray-600 mb-4">AMD Ryzen 7 • RTX 4050 • 16GB RAM • 512GB SSD</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-600">₱42,999</span>
                  <span className="text-lg text-gray-400 line-through">₱57,999</span>
                </div>
                <p className="text-red-600 font-bold mb-4">⏰ Hot Deal!</p>
                <Link to="/products" className="w-full block text-center bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transform transition">Grab Deal</Link>
              </div>
            </div>
            <div className="carousel-item rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="relative">
                <img src="https://www.cnet.com/a/img/resize/de88a503b71183d91f6430e3a2f48540421c2be4/hub/2024/09/27/08266f88-a165-42a6-af66-0d611c6641e1/lenovo-yoga-9i-14-gen-9-overview.jpg?auto=webp&height=500" alt="UltraLight Laptop" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">22% OFF</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Zintryx UltraLight Portable Pro</h3>
                <p className="text-gray-600 mb-4">Intel i7 • Iris Xe • 16GB RAM • 512GB SSD</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-600">₱79,999</span>
                  <span className="text-lg text-gray-400 line-through">₱102,999</span>
                </div>
                <p className="text-red-600 font-bold mb-4">⏰ Exclusive!</p>
                <Link to="/products" className="w-full block text-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transform transition">Order Now</Link>
              </div>
            </div>
            {/* Duplicate items for seamless loop */}
            <div className="carousel-item rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="relative">
                <img src="https://i.pcmag.com/imagery/roundups/03FucmKoGRcBSJqcuoriDfR-6..v1569492682.jpg" alt="Premium Gaming Laptop" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">35% OFF</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Z-Gaming Laptop Pro</h3>
                <p className="text-gray-600 mb-4">Intel i7 • RTX 4060 • 16GB RAM • 512GB SSD</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-600">₱58,999</span>
                  <span className="text-lg text-gray-400 line-through">₱89,999</span>
                </div>
                <p className="text-red-600 font-bold mb-4">⏰ Today Only!</p>
                <Link to="/products" className="w-full block text-center bg-[#6A0DAD] text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transform transition">Buy Now</Link>
              </div>
            </div>
            <div className="carousel-item rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="relative">
                <img src="https://sm.pcmag.com/pcmag_me/news/h/hands-on-w/hands-on-with-the-samsung-galaxy-book3-ultra-a-fresh-rival-f_cays.jpg" alt="UltraBook" className="w-full h-80 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">30% OFF</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Z-UltraBook Pro Business</h3>
                <p className="text-gray-600 mb-4">Intel i5 • Intel Iris Xe • 8GB RAM • 256GB SSD</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-600">₱34,999</span>
                  <span className="text-lg text-gray-400 line-through">₱49,999</span>
                </div>
                <p className="text-red-600 font-bold mb-4">⏰ Flash Sale!</p>
                <Link to="/products" className="w-full block text-center bg-[#1E90FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transform transition">Grab Deal</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-700 via-purple-700 to-slate-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-3xl p-10 text-white text-center shadow-2xl">
            <div className="mb-4">
              <span className="text-5xl animate-float">🎁</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Complete Your Setup Bundle</h3>
            <p className="text-xl mb-4 opacity-90">Buy any 3 products and get 20% off your entire order!</p>
            <p className="text-3xl font-bold mb-6">Plus get a FREE premium mouse pad worth ₱1,200!</p>
            <Link
              to="/products"
              className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition shadow-lg"
            >
              Build Your Bundle →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Shop at Zyntrix?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-xl font-bold mb-2 text-[#6A0DAD]">Premium Quality</h4>
              <p className="text-gray-600">Only authentic and high-quality tech gadgets</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💳</div>
              <h4 className="text-xl font-bold mb-2 text-[#1E90FF]">Secure Payment</h4>
              <p className="text-gray-600">Safe and encrypted payment methods</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2 text-[#6A0DAD]">Fast Delivery</h4>
              <p className="text-gray-600">Quick nationwide shipping across Philippines</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-purple-700 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Tech?</h2>
          <p className="text-xl mb-8">Browse our full collection of premium gadgets</p>
          <Link
            to="/products"
            className="inline-block bg-white text-[#6A0DAD] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition shadow-2xl"
          >
            View All Products
          </Link>
        </div>
      </section>

      <style>{`
        /* Tech Vibes Styles */
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .glitch-text {
          position: relative;
          font-weight: 700;
          text-shadow: 
            0 0 10px rgba(30, 144, 255, 0.8),
            0 0 20px rgba(106, 13, 173, 0.6),
            0 0 40px rgba(30, 144, 255, 0.4);
          animation: textGlow 2s ease-in-out infinite;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #1E90FF;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }
        
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #6A0DAD;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2.5s infinite linear alternate;
        }
        
        @keyframes glitch-anim {
          0% { clip: rect(random(100) + px, 9999px, random(100) + px, 0); }
          5% { clip: rect(random(100) + px, 9999px, random(100) + px, 0); }
          10% { clip: rect(random(100) + px, 9999px, random(100) + px, 0); }
          15% { clip: rect(random(100) + px, 9999px, random(100) + px, 0); }
          20% { clip: rect(random(100) + px, 9999px, random(100) + px, 0); }
          100% { clip: rect(0, 9999px, 0, 0); }
        }
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(30, 144, 255, 0.8),
              0 0 20px rgba(106, 13, 173, 0.6),
              0 0 40px rgba(30, 144, 255, 0.4);
          }
          50% {
            text-shadow: 
              0 0 20px rgba(30, 144, 255, 1),
              0 0 40px rgba(106, 13, 173, 0.8),
              0 0 60px rgba(30, 144, 255, 0.6);
          }
        }
        
        .tech-subtitle {
          text-shadow: 0 0 10px rgba(30, 144, 255, 0.3);
        }
        
        .cyber-button {
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .cyber-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .cyber-button:hover::before {
          left: 100%;
        }
        
        .circuit-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #1E90FF, transparent);
          height: 1px;
          width: 100%;
          animation: circuitFlow 4s linear infinite;
        }
        
        .circuit-line-1 {
          top: 20%;
          animation-delay: 0s;
        }
        
        .circuit-line-2 {
          top: 50%;
          animation-delay: 1.5s;
        }
        
        .circuit-line-3 {
          top: 80%;
          animation-delay: 3s;
        }
        
        @keyframes circuitFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 1;
            filter: drop-shadow(0 0 10px rgba(30, 144, 255, 0.8));
          }
          50% { 
            opacity: 0.6;
            filter: drop-shadow(0 0 20px rgba(106, 13, 173, 1));
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .promo-box {
          background: linear-gradient(45deg, #1E90FF, #6A0DAD);
          transition: all 0.4s ease;
        }
        .promo-box:hover {
          transform: scale(1.05) rotate(-1deg);
          box-shadow: 0 30px 60px rgba(106, 13, 173, 0.3);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        
        .animate-sparkle-delay {
          animation: sparkle 1.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fadeInUp 1.2s ease-out;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1.4s ease-out;
        }

        /* Carousel Animation */
        .products-carousel-container {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          animation: carouselScroll 80s linear infinite;
          width: fit-content;
        }

        .carousel-item {
          min-width: 420px;
          width: 420px;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 1rem;
        }

        .carousel-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        @keyframes carouselScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-420px * 5 - 2rem * 5));
          }
        }

        .products-carousel-container {
          animation: carouselScroll 40s linear infinite !important;
        }
      `}</style>
    </div>
  );
}
