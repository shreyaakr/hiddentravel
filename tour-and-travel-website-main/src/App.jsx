// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About.1";
// import BlogsDetails from "./pages/BlogsDetails";
// import SuggestUs from './pages/SuggestUs';
// import ContactUs from './pages/ContactUs';
// import AOS from "aos";
// import "aos/dist/aos.css";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="best-places" element={<PlacesRoute />} />
//             <Route path="about" element={<About/>} />
            
//             <Route path="suggestus" element={<SuggestUs />} /> {/* Ensure this line is correct */}
//             <Route path="ContactUs" element={<ContactUs />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
/********************************** */

/* eslint-disable no-unused-vars */
// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About.1";
// import BlogsDetails from "./pages/BlogsDetails";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import SuggestUs from './pages/SuggestUs';
// import ContactUs from './pages/ContactUs';
// import BlogsComp from "./components/Blogs/BlogsComp";
// import DistrictPopup from "./pages/DistrictPopup";
// import DakshinaKannada from "./pages/DakshinaKannada";
// import Udupi from "./pages/Udupi";
// import UttaraKannada from "./pages/UttaraKannada";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="best-places" element={<PlacesRoute />} />
//           <Route path="about" element={<About />} />
//           <Route path="suggestus" element={<SuggestUs />} />
//           <Route path="contactus" element={<ContactUs />} />
//           <Route path="blogscomp" element={<BlogsComp />} />
          
//         </Route>
        
//         {/* Routes outside of Layout */}
//         <Route path="/" component={<DistrictPopup />} >
//         <Route path="/dakshina-kannada" component={<DakshinaKannada />} />
//         <Route path="/udupi" component={<Udupi />} />
//         <Route path="/uttara-kannada" component={<UttaraKannada />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About.1";

import AOS from "aos";
import "aos/dist/aos.css";
import SuggestUs from './pages/SuggestUs';
import ContactUs from './pages/ContactUs';
import BlogsComp from "./components/Blogs/BlogsComp";
import DistrictPopup from "./pages/DistrictPopup";
import DakshinaKannada from "./pages/DakshinaKannada";
import Udupi from "./pages/Udupi";
import UttaraKannada from "./pages/UttaraKannada";
import Signup from './pages/Signup';
import Login from './pages/Login';
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="about" element={<About />} />
          <Route path="suggestus" element={<SuggestUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="blogscomp" element={<BlogsComp />} />
       
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Routes outside of Layout */}
        <Route path="district-popup" element={<DistrictPopup />} />
        <Route path="dakshina-kannada" element={<DakshinaKannada />} />
        <Route path="udupi" element={<Udupi />} />
        <Route path="uttara-kannada" element={<UttaraKannada />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
