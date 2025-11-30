import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6A0DAD] to-[#1E90FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold">Zyntrix</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 zyntriXx@gmail.com</li>
              <li>📞 +63 917 123 4567</li>
              <li>📍 Sixth Street, New Eridu</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="w-10 h-10 bg-[#6A0DAD] hover:bg-[#1E90FF] rounded-full flex items-center justify-center transition">
              <span className="text-xl">f</span>
            </a>
            <a href="#" className="w-10 h-10 bg-[#6A0DAD] hover:bg-[#1E90FF] rounded-full flex items-center justify-center transition">
              <span className="text-xl">𝕏</span>
            </a>
            <a href="#" className="w-10 h-10 bg-[#6A0DAD] hover:bg-[#1E90FF] rounded-full flex items-center justify-center transition">
              <span className="text-xl">IG</span>
            </a>
          </div>
          <p className="text-gray-400">&copy; 2025 Zyntrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
