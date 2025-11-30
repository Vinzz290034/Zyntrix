import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onCartClick?: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const itemCount = useCartStore((state) => state.getItemCount());
  
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6A0DAD] to-[#1E90FF] rounded-lg flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-[#6A0DAD]">Zyntrix</span>
          </Link>
          
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link
                to="/home"
                className={`${
                  isActive('/home')
                    ? 'text-[#6A0DAD] border-b-2 border-[#6A0DAD]'
                    : 'hover:text-[#6A0DAD]'
                } transition pb-1`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`${
                  isActive('/products')
                    ? 'text-[#6A0DAD] border-b-2 border-[#6A0DAD]'
                    : 'hover:text-[#6A0DAD]'
                } transition pb-1`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  isActive('/about')
                    ? 'text-[#6A0DAD] border-b-2 border-[#6A0DAD]'
                    : 'hover:text-[#6A0DAD]'
                } transition pb-1`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  isActive('/contact')
                    ? 'text-[#6A0DAD] border-b-2 border-[#6A0DAD]'
                    : 'hover:text-[#6A0DAD]'
                } transition pb-1`}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <div className="flex items-center space-x-4">
            {location.pathname === '/products' && (
              <button 
                onClick={onCartClick}
                className="relative p-2 hover:bg-gray-100 rounded-full transition"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-[#6A0DAD] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            )}
            
            <button 
              onClick={handleLogout}
              className="hidden md:block px-4 py-2 text-gray-700 hover:text-[#6A0DAD] font-semibold transition"
            >
              Logout
            </button>
            
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(106, 13, 173, 0.3); }
          50% { box-shadow: 0 0 40px rgba(30, 144, 255, 0.6); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
