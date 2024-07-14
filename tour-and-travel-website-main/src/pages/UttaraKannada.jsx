/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/pages/UttaraKannada.jsx
import React from 'react';
import PlaceCard from '../components/Places/PlaceCard'; 

import Img1 from '../assets/places/mirjan.jpeg';
import Img2 from '../assets/places/ramauk.jpg';
import Img3 from '../assets/places/bhima.jpeg';
import Img4 from '../assets/places/murdeshwar.jpg';


const UttaraKannadaPlaces= [
  {
    img: Img1,
    title: "Mirjan Fort",
    location: "Uttara Kannada",
    description: "Mirjan Fort is a historical fort located in Karnataka, India, near the town of Kumta. Known for its grand architecture and strategic location, it was built in the 16th century and has witnessed several battles and changing reigns. The fort is surrounded by lush greenery and stands as a testament to the region's rich history and cultural heritage.",
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Ramalingeshwara Temple",
    location: "Uttara Kannada",
    description: "Ramalingeshwara Temple in Sirsi, Karnataka, is a revered Hindu shrine dedicated to Lord Shiva. The temple is known for its serene atmosphere, beautiful architecture, and intricate carvings, making it a significant pilgrimage site and a place of tranquil worship. Surrounded by lush greenery, it offers a peaceful retreat for devotees and visitors.",
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Bhimanagudda Hill",
    location: "Uttara Kannada",
    description: "Bhimanagudda Hill in Sirsi is a picturesque sunset viewpoint offering breathtaking views of the surrounding Western Ghats. Known for its serene and tranquil environment, it's a popular spot for nature lovers and photographers who seek to capture the stunning hues of the setting sun. The hill's vantage point provides a perfect backdrop for a peaceful and memorable evening.",
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Murdeshwar",
    location: "Uttara Kannada",
    description: "Murdeshwar Temple, located in Karnataka, India, is renowned for its towering statue of Lord Shiva, one of the tallest in the world, and its stunning seaside setting. The temple complex, built on the Kanduka Hill and surrounded by the Arabian Sea on three sides, offers a breathtaking view and attracts devotees and tourists alike for its spiritual significance and scenic beauty.",
    type: "Cultural Relax",
  },
  
  
];

const UttaraKannada = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Uttara Kannada
        </h1>
        <p>Welcome to Uttara Kannada. Here are some places to visit:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {UttaraKannadaPlaces.map((item, index) => (
             <PlaceCard key={index} {...item} /> // Use PlaceCard to display place info
          ))}
        </div>
      </section>
    </div>
  );
};

export default UttaraKannada;