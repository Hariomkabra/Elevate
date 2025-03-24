import React from 'react';
import { Linkedin } from 'lucide-react';

const experts = [
  {
    name: "Dr. Nikhil Sharma",
    role: "Data Science Lead",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Rahul Gupta",
    role: "Full Stack Expert",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Prasanth",
    role: "AI Specialist",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000",
    linkedin: "https://linkedin.com"
  }
];

const ExpertCard = ({ expert }) => (
  <div className="bg-gray-900 p-6 rounded-lg text-center">
    <img src={expert.image} alt={expert.name} className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
    <p className="text-yellow-500 mb-2">{expert.role}</p>
    <p className="text-gray-400 mb-4">{expert.experience} experience</p>
    <a href={expert.linkedin} target="_blank" rel="noopener noreferrer" 
       className="inline-flex items-center text-blue-400 hover:text-blue-500">
      <Linkedin className="h-5 w-5 mr-2" />
      Connect
    </a>
  </div>
);

const Experts = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Industry Experts</h2>
          <p className="text-gray-400">Learn from the best in the industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <ExpertCard key={index} expert={expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
