import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: "Ravina Dixit",
    course: "Data Science",
    rating: 5,
    review: "The course exceeded my expectations. The practical approach and industry insights were invaluable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Rohit Patel",
    course: "Full Stack Development",
    rating: 5,
    review: "Best investment in my career. The mentors are extremely knowledgeable and supportive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Anushka Sharma",
    course: "Machine Learning",
    rating: 4.8,
    review: "The hands-on projects really helped me understand complex concepts. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Nilesh Singh",
    course: "Python Programming",
    rating: 5,
    review: "The Tamil language support made learning programming so much easier. Great initiative!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Priya Patel",
    course: "Digital Marketing",
    rating: 4.9,
    review: "Comprehensive curriculum with real-world projects. The mentors are incredibly supportive.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
  },
  {
    name: "Ajay Kumar",
    course: "Electronics",
    rating: 5,
    review: "The practical sessions were amazing. I learned more in 3 months than I did in a year elsewhere.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000"
  }
];

const ReviewCard = ({ review }) => (
  <div className="bg-gray-900 p-6 rounded-lg relative">
    <div className="absolute top-4 right-4">
      <CheckCircle className="h-5 w-5 text-green-500" />
    </div>
    <div className="flex items-center mb-4">
      <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
      <div className="ml-4">
        <h4 className="font-semibold">{review.name}</h4>
        <p className="text-gray-400 text-sm">{review.course}</p>
      </div>
    </div>
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
      ))}
    </div>
    <p className="text-gray-300">{review.review}</p>
  </div>
);

const Reviews = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Wall of Love</h2>
          <p className="text-gray-400">Meet our students and their success stories</p>
          <div className="flex items-center justify-center mt-4">
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
            <span className="ml-2 text-xl font-semibold">1000+ Happy Students</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;