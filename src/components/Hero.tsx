import React from 'react';
import { Rocket, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Future-proof your career by
            <span className="text-pink-500"> upskilling</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transform your career with guidance from top industry mentors
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-pink-500" />
              <span>Live Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-pink-500" />
              <span>Self-paced Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-pink-500" />
              <span>Verified Certificates</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              Explore Courses
            </button>
            <button className="border border-pink-500 hover:bg-pink-500/10 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;