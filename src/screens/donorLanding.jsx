import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800 ">

      {/* Hero Section */}
      <section className="bg-red-600 text-white h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SMIT Blood Bank Health Care</h1>
        <p className="text-xl mb-6">Donate Blood, Save Lives. Join our mission to make a difference today.</p>
        <Link
          to="/donorDeta"
          className="bg-white text-red-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100"
        >
          Become a Donor
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
