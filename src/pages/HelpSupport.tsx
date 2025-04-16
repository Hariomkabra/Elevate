import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Send, Mail, Phone } from 'lucide-react';

const HelpSupport = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="pt-40 pb-20 px-6">
        <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <h1 className="pt-32 text-4xl font-bold mb-4 text-yellow-400">Help & Support</h1>
            <p className="text-white mb-10">
              Have any problems? Contact us or raise a ticket.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Mail className="text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400">Mail Us</h3>
                  <p className="text-white">Mail us with your queries and our team will get back to you ASAP.</p>
                  <a href="mailto:support@uptor.in" className="text-yellow-400 hover:underline">
                    support@uptor.in →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Phone className="text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400">Phone</h3>
                  <p className="text-white">+91 988 424 4429</p>
                  <p className="text-white">24/7, except Government holidays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
                <div className="bg-black rounded-xl p-8 shadow-xl border border-yellow-600">
                <div className="flex justify-center mb-4">
                <button className="bg-gray-800 px-4 py-1 rounded text-sm text-yellow-500 border border-yellow-600">
                  RAISE A TICKET
                </button>
              </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-1 block">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-black border border-yellow-500 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="number" className="text-sm font-medium mb-1 block">
                  Number*
                </label>
                <div className="flex items-center">
                  <span className="bg-yellow-500 text-black px-3 py-2 rounded-l border border-r-0 border-yellow-500">
                    🇮🇳
                  </span>
                  <input
                    type="tel"
                    id="number"
                    placeholder="Enter contact number"
                    className="w-full bg-black border border-yellow-500 rounded-r px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium mb-1 block">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-yellow-500 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium mb-1 block">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full bg-black border border-yellow-500 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-1 block">
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your issue"
                  className="w-full bg-black border border-yellow-500 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition"
              >
                <Send className="h-4 w-4" />
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpSupport;
