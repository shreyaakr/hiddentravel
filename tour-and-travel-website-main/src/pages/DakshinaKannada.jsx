/* eslint-disable no-unused-vars */
import React from "react";
import PlaceCard from "../components/Places/PlaceCard"; // Import PlaceCard
import Img10 from '../assets/places/dk1.jpg';
import Img11 from '../assets/places/subramanyadk2.jpg';
import Img12 from '../assets/places/koiladk3.jpg';


const DakshinaKannada = () => {
  const DakshinaKannadaPlaces = [
    {
          img: Img10,
          title: "Shree Lakshmi Vishnumoorthy Temple",
          location: "Dakshina Kannada",
          description: "Shree Lakshmi Vishnumoorthy Temple in Dakshina Kannada is a revered Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi. Known for its divine ambiance and traditional architecture, the temple is a significant pilgrimage site offering spiritual solace and a peaceful retreat for devotees. The lush surroundings add to its charm, making it a noteworthy destination in the region.",
          type: "Cultural Relax",
        },
        {
          img: Img11,
          title: "Subramanyeshwara Temple",
          location: "Dakshina Kannada",
          description: "Subramanya Temple, also known as Subramanyeshwara Temple, is a revered Hindu shrine dedicated to Lord Subramanya, the son of Lord Shiva and Parvati. Located in various parts of India, such as Karnataka and Tamil Nadu, these temples attract devotees who seek blessings for courage, wisdom, and victory over obstacles in life. The architecture often features intricate carvings and sculptures depicting mythological stories associated with Lord Subramanya.",
          type: "Cultural Relax",
        },
        {
          img: Img12,
          title: "Koila Farm",
          location: "Dakshina Kannada",
          description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
          type: "Cultural Relax",
        },
  ];
  
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Dakshina Kannada
        </h1>
        <p>Welcome to Dakshina Kannada. Here are some places to visit:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DakshinaKannadaPlaces.map((item, index) => (
            <PlaceCard key={index} {...item} /> // Use PlaceCard to display place info
          ))}
        </div>
      </section>
    </div>
  );
};

export default DakshinaKannada;