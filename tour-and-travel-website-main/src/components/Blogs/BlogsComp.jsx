// import React from "react";
// import BlogCard from "./BlogCard";
// import Img1 from "../../assets/places/tajmahal.jpeg";
// import Img2 from "../../assets/places/maravante.jpg";
// import Img3 from "../../assets/places/boat.jpg";

// const BlogsData = [
//   {
//     id: 1,
//     image: Img1,
//     title: "Mirjan Fort",
//     description:
//       "Mirjan Fort, located near Kumta in Karnataka, India, is a historic fortress renowned for its architectural splendor and strategic importance. Built in the 16th century by Queen Chennabhairadevi, who ruled the region for over 54 years, the fort features impressive bastions, moats, and high walls. It played a crucial role in various historical battles and was an important center for spice trade. Surrounded by lush greenery, Mirjan Fort stands as a testament to the region's rich cultural and historical heritage.",
//     author: "Explore",
//     // date: "April 22, 2022",
//   },
//   {
//     id: 1,
//     image: Img2,
//     title: "Top places to visit in US",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
//     author: "Explore",
//     // date: "April 22, 2022",
//   },
//   {
//     id: 1,
//     image: Img3,
//     title: "Top places to visit in Japan",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
//     author: "Explore",
//     // date: "April 22, 2022",
//   },
// ];

// const BlogsComp = () => {
//   return (
//     <>
//       <div className="dark:bg-gray-900 dark:text-white py-10">
//         <section data-aos="fade-up" className="container ">
//           <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
//             Our Latest Blogs
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//             {BlogsData.map((item) => (
//               <BlogCard key={item.id} {...item} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default BlogsComp;
import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/mirjan.jpeg";
import Img2 from "../../assets/places/maravante.jpg";
import Img3 from "../../assets/places/dk1.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Mirjan Fort",
    description:
      "Mirjan Fort, located near Kumta in Karnataka, India, is a historic fortress renowned for its architectural splendor and strategic importance. Built in the 16th century by Queen Chennabhairadevi, who ruled the region for over 54 years, the fort features impressive bastions, moats, and high walls. It played a crucial role in various historical battles and was an important center for spice trade. Surrounded by lush greenery, Mirjan Fort stands as a testament to the region's rich cultural and historical heritage.",
    
    // date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Maravante Beach",
    description:
      "Maravante Beach, located on the stunning coastline of Karnataka, India, is renowned for its unique setting where the Arabian Sea meets the Souparnika River. This pristine beach is famous for its picturesque sunset views, tranquil atmosphere, and scenic beauty, making it a perfect destination for nature lovers and photographers alike. Its golden sands and serene waters offer a peaceful retreat from the hustle and bustle of city life.",
   
    // date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Shree Lakshmi vishnumoorthy Temple",
    description:
      "Shree Lakshmi Vishnumoorthy Temple, located in Karnataka, India, is a revered Hindu temple dedicated to Goddess Lakshmi and Lord Vishnu. Known for its intricate carvings and ancient architecture, the temple attracts devotees and tourists seeking spiritual solace and a glimpse into traditional South Indian temple culture. The temple's serene environment and cultural significance make it a prominent religious site in the region.",
   
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;