import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Workshops from './components/Workshops';
import Reviews from './components/Reviews';
import CoreValues from './components/CoreValues';
import Experts from './components/Experts';
import Footer from './components/Footer';
import HelpSupport from './pages/HelpSupport';
import VerifyCertificate from './pages/VerifyCertificate';
import Login from './pages/Login';
import Signup from './pages/Signup';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <Workshops />
      <Reviews />
      <CoreValues />
      <Experts />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/verify-certificate" element={<VerifyCertificate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;