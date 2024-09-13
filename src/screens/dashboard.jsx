import React from 'react';
import Navbar from './navbar';
import LandingPage from './donorLanding';
import About from './about';
import Collaborations from './collaborat';
import Footer from './footer';

function Dashboard() {
  return (
    <>
      {/* Navbar will be visible on all routes */}
      <Navbar />
      <LandingPage />
      {/* <About /> */}
      {/* <Collaborations /> */}
      {/* <Footer /> */}
      </>
  );
}

export default Dashboard;
