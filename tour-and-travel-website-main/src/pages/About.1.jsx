import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
             

            Welcome to Hidden Gems Travel Guide!

            At Hidden Gems Travel Guide, we believe that the best adventures lie off the beaten path. Our mission is to uncover the world's most beautiful, secluded, and unique destinations, bringing them to your fingertips. We are passionate travelers, explorers, and storytellers, dedicated to sharing our discoveries with fellow wanderers who crave more than the typical tourist experience.

            <br/> Our Story

            Our journey began as a group of friends with a shared passion for travel and a curiosity for the unknown. Frustrated by the repetitive recommendations found in conventional travel guides, we set out to create a platform that celebrates the overlooked and the extraordinary. From hidden beaches to quaint villages, from ancient ruins to secret urban spots, our aim is to inspire you to explore places that often remain unseen by the masses.

            <br/>What We Offer <br/>

              -Curated Guides: Detailed itineraries and travel tips for discovering hidden gems in various regions around the globe.
             <br/> -Personal Stories: Authentic travel experiences shared by our team and guest contributors, offering insights and inspiration.
             <br/> -Photography and Videos: Stunning visuals to transport you to these hidden locations, sparking your wanderlust.
             <br/> -Community Engagement: A vibrant community of like-minded travelers who share their own hidden gems and travel stories.

            <br/> Our Philosophy

            Travel is more than just visiting new places; it is about immersing yourself in new cultures, meeting interesting people, and creating unforgettable memories. We believe in responsible and sustainable travel, respecting the environments and communities we visit. By shedding light on less-visited destinations, we hope to alleviate the pressure on popular tourist spots and promote a more sustainable way to see the world.

            <br/>
            <br/> Join Us on the Journey

            Whether you are planning your next adventure or just dreaming about far-off places, Hidden Gems Travel Guide is here to inspire and guide you. Follow us on social media, subscribe to our newsletter, and become part of a community that values the thrill of exploration and the beauty of the unknown.

            <br/>Happy travels!
<br/>
            <b>The Hidden Gems Travel Guide Team</b>

            

          </p>
          <br />

        </div>
      </div>
      <Location />
      {/* <BlogsComp /> */}
    </>
  );
};
export default About;
