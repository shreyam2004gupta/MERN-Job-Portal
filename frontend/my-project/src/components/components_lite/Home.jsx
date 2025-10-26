import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Category from './Category';
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header />
      <Category />
      <LatestJobs />
      <Footer/>
    </div>
  );
}

export default Home
