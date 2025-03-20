import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';

const VerifyCertificate = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gray-900 rounded-lg p-8">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">Verify Certificate</h1>
            <p className="text-gray-400 text-center mb-8">
              Enter your certificate number to verify its authenticity
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="certificate" className="block text-sm font-medium text-gray-300 mb-2">
                  Certificate Number
                </label>
                <input
                  type="text"
                  id="certificate"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter certificate number (e.g., CERT-2024-XXXX)"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Search className="h-4 w-4" />
                Verify Certificate
              </button>
            </form>
            
            <div className="mt-8 p-4 bg-gray-800 rounded-md">
              <h3 className="text-gray-300 font-medium mb-2">How to find your certificate number?</h3>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Check your email for the certificate PDF</li>
                <li>Open your digital certificate</li>
                <li>Look for the unique number starting with CERT-</li>
                <li>Enter the complete number including any dashes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyCertificate;