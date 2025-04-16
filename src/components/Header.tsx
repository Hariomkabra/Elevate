import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, Award, Users, LogIn, UserPlus, ChevronDown, User } from 'lucide-react';


const Header = () => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  // Reference for dropdown container
  const accountRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside account dropdown
      if (accountDropdownOpen &&
          accountRef.current &&
          !accountRef.current.contains(event.target as Node)) {
        setAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [accountDropdownOpen]);
  return (
    <header className="bg-black/95 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-bold">Uptor</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#courses" className="hover:text-yellow-500 transition-colors">Courses</Link>
          <Link to="/#workshops" className="hover:text-yellow-500 transition-colors">Workshops</Link>
          <Link to="/help-support" className="hover:text-yellow-500 transition-colors flex items-center gap-1">
            <HelpCircle className="h-4 w-4" />
            Help & Support
          </Link>
          <Link to="/verify-certificate" className="hover:text-yellow-500 transition-colors flex items-center gap-1">
            <Award className="h-4 w-4" />
            Verify Certificates
          </Link>
          <a href="#mentor" className="hover:text-yellow-500 transition-colors flex items-center gap-1">
            <Users className="h-4 w-4" />
            Apply as Mentor
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={accountRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setAccountDropdownOpen(prev => !prev);
              }}
              className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md transition-colors"
            >
              <User className="h-4 w-4" />
              Account
              <ChevronDown className={`h-4 w-4 transition-transform ${accountDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {accountDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-md shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-800">
                  <h3 className="text-sm font-semibold">Account Options</h3>
                </div>
                <Link to="/login" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 w-full text-left">
                  <LogIn className="h-4 w-4 text-yellow-500" />
                  Login
                </Link>
                <Link to="/signup" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 w-full text-left">
                  <UserPlus className="h-4 w-4 text-yellow-500" />
                  Sign Up
                </Link>
                <div className="border-t border-gray-800 mt-2 pt-2">
                  <div className="px-4 py-2">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">Login with</h4>
                    <div className="flex space-x-2">
                      <button className="flex-1 flex items-center justify-center gap-1 bg-white text-gray-800 py-2 rounded hover:bg-gray-100 transition-colors text-sm">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
