import React from 'react';
import BlogsComp from '../components/Blogs/BlogsComp';
import NatureVid from '../assets/video/main.mp4';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
      </div>

      <BlogsComp />

      <div className="flex justify-center mt-10">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleExploreMore}
        >
          Explore More
        </button>
      </div>
    </>
  );
};

export default Home;
