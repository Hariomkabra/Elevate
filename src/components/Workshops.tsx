import React from 'react';
import { Calendar, Star, Users } from 'lucide-react';

const workshops = [
  {
    title: "Introduction to Data Science",
    date: "March 25, 2024",
    attendees: 150,
    rating: 4.8,
    instructor: "Dr. Nikhil Sharma",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Web Development Bootcamp",
    date: "March 28, 2024",
    attendees: 200,
    rating: 4.9,
    instructor: "rahul gupta",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "AI & Machine Learning",
    date: "April 1, 2024",
    attendees: 180,
    rating: 4.7,
    instructor: "prasanth",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000"
  }
];

const WorkshopCard = ({ workshop }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden">
    <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
      <div className="flex items-center mb-3">
        <Calendar className="h-4 w-4 text-yellow-500 mr-2" />
        <span className="text-gray-400">{workshop.date}</span>
      </div>
      <div className="flex items-center mb-3">
        <Users className="h-4 w-4 text-yellow-500 mr-2" />
        <span className="text-gray-400">{workshop.attendees} attendees</span>
      </div>
      <div className="flex items-center mb-4">
        <Star className="h-4 w-4 text-yellow-400 fill-current" />
        <span className="ml-2">{workshop.rating}</span>
      </div>
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 py-2 rounded-md transition-colors">
        Register Now
      </button>
    </div>
  </div>
);

const Workshops = () => {
  return (
    <section className="bg-black text-white py-20" id="workshops">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ongoing Workshops</h2>
          <p className="text-gray-400">Attend free courses and workshops to get detailed insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <WorkshopCard key={index} workshop={workshop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
