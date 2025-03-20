import React from 'react';
import { BookOpen, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold">Uptor</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering careers through expert-led education and practical learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Courses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Data Science & Machine Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Full Stack Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Electronics Mastery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Master in Python</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Full Stack Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Workshops</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Full Stack Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Electronics Mastery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Generative AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Content Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-pink-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Help & Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Apply as Mentor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Verify Certificate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Terms and Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} LMES Academy Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;