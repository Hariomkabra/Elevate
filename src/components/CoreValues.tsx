import React from 'react';
import { Video, Languages as Language, Users, BookOpen } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Core Values</h2>
          <p className="text-gray-400">Empowering learners with expert guidance and practical skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-900 p-8 rounded-lg">
            <Video className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Live Courses</h3>
            <p className="text-gray-400">Real-time, interactive courses designed to engage learners directly with expert instructors, creating a dynamic and immersive educational experience.</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <Language className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Learn in Tamil</h3>
            <p className="text-gray-400">We are dedicated to making quality education accessible to everyone by providing courses in Tamil, empowering learners to excel in their native language.</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <Users className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Guidance From Industry Experts</h3>
            <p className="text-gray-400">Every course is led by seasoned industry professionals, bringing real-world experience into the classroom to ensure that students receive insights that are both current and relevant.</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <BookOpen className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Hands-On Practical Learning</h3>
            <p className="text-gray-400">We emphasize practical, hands-on learning experiences, equipping students with the skills they need to succeed in their careers from the very first day.</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Join our Fellow Learners</h3>
          <p className="text-xl text-gray-400 mb-6">"Our foundation rests on real-world relevance"</p>
          <div className="text-4xl font-bold text-pink-500 mb-6">10k+</div>
          <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;