import React from 'react';
import Slider from 'react-slick';

// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Enhanced slider settings for a smooth and visually appealing experience
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 750, // Adjusted speed for a more graceful transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Removed arrows for a cleaner look (optional, uncomment if needed)
  };

  return (
    <div className="dark-theme">
      
        {/* Introduction Section */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 to-violet-900">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Urban Scan</h1>
            <p className="text-lg">Empowering communities, one urban issue at a time</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="h-screen flex items-center justify-center bg-gray-800">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              At Urban Scan, our mission is to provide a platform where citizens can easily report and resolve urban issues, making cities cleaner, safer, and more livable for everyone.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="h-screen flex items-center justify-center bg-indigo-700">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="flex justify-center space-x-10">
              <div className="flex flex-col items-center">
                
                <p className="text-lg font-bold">Rohan Malik</p>
                <p className="text-sm">Leader</p>
              </div>
              <div className="flex flex-col items-center">
                
                <p className="text-lg font-bold">Rishabh Sood</p>
                <p className="text-sm">Member</p>
              </div>
              <div className="flex flex-col items-center">
                
                <p className="text-lg font-bold">Vibhor Gupta</p>
                <p className="text-sm">Member</p>
              </div>
              <div className="flex flex-col items-center">
                
                <p className="text-lg font-bold">Vinayak Pandey</p>
                <p className="text-sm">Member</p>
              </div>
            </div>
          </div>
        </section>

        {/* Idea Section */}
        <section className="h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Our Idea</h2>
            <p className="text-lg">
              Urban Scan is a one-stop destination for addressing day-to-day urban issues such as potholes, broken roads, and malfunctioning street lights. We not only compile this data but also process it to optimize the citizen experience in their area.
            </p>
          </div>
        </section>
      
    </div>
  );
};

export default Home;
