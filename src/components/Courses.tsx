import React from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';

const courses = [
  {
    title: "Data Science & Machine Learning",
    rating: 4.8,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=1000",
    duration: "6 months",
    level: "Intermediate"
  },
  {
    title: "Full Stack Development",
    rating: 4.9,
    reviews: 380,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    duration: "8 months",
    level: "Advanced"
  },
  {
    title: "Electronics Mastery",
    rating: 4.7,
    reviews: 290,
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1000",
    duration: "4 months",
    level: "Beginner"
  }
];

const CourseCard = ({ course }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <div className="flex items-center mb-4">
        <Star className="h-5 w-5 text-yellow-400 fill-current" />
        <span className="ml-2">{course.rating}</span>
        <span className="text-gray-400 ml-2">({course.reviews} reviews)</span>
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <span>{course.duration}</span>
        <span>{course.level}</span>
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <section className="bg-black text-white py-20" id="courses">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
          <p className="text-gray-400">Join us for interactive learning with 8+ year industry experts</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>

          <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-pink-500 p-2 rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-pink-500 p-2 rounded-full">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;