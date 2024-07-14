// src/pages/Udupi.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import PlaceCard from "../components/Places/PlaceCard";
import Img5 from "../assets/places/moodgal.jpg";
import Img6 from "../assets/places/maravante.jpg";

const UdupiPlaces = [
  {
    img: Img5,
    title: "Moodgal Temple",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Kolankal",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
];

const Udupi = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Udupi
        </h1>
        <p>Welcome to Udupi. Here are some places to visit:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {UdupiPlaces.map((item, index) => (
            <PlaceCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Udupi;