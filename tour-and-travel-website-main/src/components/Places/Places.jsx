// import React from "react";
// import PlaceCard from "./PlaceCard";
// import Img1 from "../../assets/places/boat.jpg";
// import Img2 from "../../assets/places/tajmahal.jpeg";
// import Img3 from "../../assets/places/maravante.jpg";
// import Img4 from "../../assets/places/place4.jpg";
// import Img5 from "../../assets/places/place5.jpg";
// import Img6 from "../../assets/places/place6.jpg";

// const PlacesData = [
//   {
//     img: Img1,
//     title: "Boat",
//     location: "USA",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 6700,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img2,
//     title: "Taj Mahal",
//     location: "India",
//     description:
//       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
//     price: 6700,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img3,
//     title: "Underwater",
//     location: "US",
//     description:
//       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
//     price: 6200,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img4,
//     title: "Sydney",
//     location: "USA",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 6700,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img5,
//     title: "Los Angeles",
//     location: "United states",
//     description:
//       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
//     price: 6700,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img6,
//     title: "Los Vegas",
//     location: "California",
//     description:
//       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
//     price: 6200,
//     type: "Cultural Relax",
//   },
// ];

// const Places = ({ handleOrderPopup }) => {
//   return (
//     <>
//       <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
//         <section data-aos="fade-up" className="container ">
//           <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
//             Best Places to Visit
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {PlacesData.map((item, index) => (
//               <PlaceCard
//                 handleOrderPopup={handleOrderPopup}
//                 key={index}
//                 {...item}
//               />
//             ))}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Places;







/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PlaceCard from "../../components/Places/PlaceCard";
import Img1 from "../../assets/places/mirjan.jpeg";
import Img2 from "../../assets/places/ramauk.jpg";
import Img3 from "../../assets/places/bhima.jpeg";
import Img4 from "../../assets/places/maravante.jpg";
import Img5 from "../../assets/places/moodgal.jpg";
import Img6 from "../../assets/places/dk1.jpg";
import Img7 from "../../assets/places/murdeshwar.jpg";
import Img8 from "../../assets/places/subramanyadk2.jpg";
import Img9 from "../../assets/places/koiladk3.jpg";

const PlacesData = [
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
    img: Img7,
    title: "Murdeshwar",
    location: "Uttara Kannada",
    description: "Murdeshwar Temple, located in Karnataka, India, is renowned for its towering statue of Lord Shiva, one of the tallest in the world, and its stunning seaside setting. The temple complex, built on the Kanduka Hill and surrounded by the Arabian Sea on three sides, offers a breathtaking view and attracts devotees and tourists alike for its spiritual significance and scenic beauty.",
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Maravante",
    location: "Kundapura",
    description: "Maravante Beach, located on the stunning coastline of Karnataka, India, is renowned for its unique setting where the Arabian Sea meets the Souparnika River. This pristine beach is famous for its picturesque sunset views, tranquil atmosphere, and scenic beauty, making it a perfect destination for nature lovers and photographers alike. Its golden sands and serene waters offer a peaceful retreat from the hustle and bustle of city life.",
    price: 6700,
  },
  {
    img: Img5,
    title: "Moodgal Temple",
    location: "Udupi",
    description: "Moodgal Shiva Temple in Kundapura, Karnataka, is an ancient and revered temple dedicated to Lord Shiva. Known for its serene ambiance and traditional architecture, the temple offers a peaceful retreat for devotees and visitors seeking spiritual solace. The lush surroundings and historical significance make it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Shree Lakshmi Vishnumoorthy Temple",
    location: "Dakshina Kannada",
    description: "Shree Lakshmi Vishnumoorthy Temple in Dakshina Kannada is a revered Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi. Known for its divine ambiance and traditional architecture, the temple is a significant pilgrimage site offering spiritual solace and a peaceful retreat for devotees. The lush surroundings add to its charm, making it a noteworthy destination in the region.",
    type: "Cultural Relax",
  },
  {
    img: Img8,
    title: "Subramanyeshwara Temple",
    location: "Dakshina Kannada",
    description: "Subramanya Temple, also known as Subramanyeshwara Temple, is a revered Hindu shrine dedicated to Lord Subramanya, the son of Lord Shiva and Parvati. Located in various parts of India, such as Karnataka and Tamil Nadu, these temples attract devotees who seek blessings for courage, wisdom, and victory over obstacles in life. The architecture often features intricate carvings and sculptures depicting mythological stories associated with Lord Subramanya.",
    type: "Cultural Relax",
  },
  {
    img: Img9,
    title: "Koila Farm",
    location: "Dakshina Kannada",
    description: "Koila Farm in Dakshina Kannada is known for its agricultural activities, specializing in the cultivation of various crops and possibly dairy farming or animal husbandry. It contributes to the local economy and provides employment opportunities while showcasing sustainable agricultural practices in the region.",
    type: "Cultural Relax",
  },
];

const Places = ({ handleSubmit }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleSubmit}
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;
