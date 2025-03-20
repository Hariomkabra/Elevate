import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, Award, Users, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black/95 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-pink-500" />
          <span className="text-2xl font-bold">Uptor</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#courses" className="hover:text-pink-500 transition-colors">Courses</Link>
          <Link to="/#workshops" className="hover:text-pink-500 transition-colors">Workshops</Link>
          <Link to="/help-support" className="hover:text-pink-500 transition-colors flex items-center gap-1">
            <HelpCircle className="h-4 w-4" />
            Help & Support
          </Link>
          <Link to="/verify-certificate" className="hover:text-pink-500 transition-colors flex items-center gap-1">
            <Award className="h-4 w-4" />
            Verify Certificates
          </Link>
          <a href="#mentor" className="hover:text-pink-500 transition-colors flex items-center gap-1">
            <Users className="h-4 w-4" />
            Apply as Mentor
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="flex items-center gap-1 hover:text-pink-500 transition-colors">
            <LogIn className="h-4 w-4" />
            Login
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;