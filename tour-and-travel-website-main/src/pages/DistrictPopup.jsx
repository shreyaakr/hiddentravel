/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/DistrictPopup.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const DistrictPopup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [district, setDistrict] = useState("");

//   const navigate = useNavigate();

//   const districts = ["Dakshina Kannada", "Udupi", "Uttara Kannada"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5173/api/submit', { name, district });
//       alert('User saved successfully');
//       if (district === "Dakshina Kannada") {
//         navigate('/dakshina-kannada');
//       } else if (district === "Udupi") {
//         navigate('/udupi');
//       } else if (district === "Uttara Kannada") {
//         navigate('/uttara-kannada');
//       }
//     } catch (error) {
//       console.error('There was an error saving the user!', error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Explore More</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">What is your name?</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Which district do you like?</label>
//             <select
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             >
//               <option value="" disabled>Select a district</option>
//               {districts.map((dist) => (
//                 <option key={dist} value={dist}>{dist}</option>
//               ))}
//             </select>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DistrictPopup;
/*********************************** */

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/DistrictPopup.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const DistrictPopup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [district, setDistrict] = useState("");

//   const navigate = useNavigate();

//   const districts = ["Dakshina Kannada", "Udupi", "Uttara Kannada"];

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     try {
//       await axios.post('http://localhost:5173/api/submit', { name, district });
//       alert('User saved successfully');
//       // Navigate to the respective page based on selected district
//       if (district === "Dakshina Kannada") {
//         navigate('/dakshina-kannada');
//       } else if (district === "Udupi") {
//         navigate('/udupi');
//       } else if (district === "Uttara Kannada") {
//         navigate('/uttara-kannada');
//       }
//     } catch (error) {
//       console.error('There was an error saving the user!', error); // Log error to console
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Explore More</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">What is your name?</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Which district do you like?</label>
//             <select
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             >
//               <option value="" disabled>Select a district</option>
//               {districts.map((dist) => (
//                 <option key={dist} value={dist}>{dist}</option>
//               ))}
//             </select>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={onClose} // Close the popup when the "Cancel" button is clicked
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DistrictPopup;

/*****************************/
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import DakshinaKannada from "./DakshinaKannada";

// const DistrictPopup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [district, setDistrict] = useState("");

//   const navigate = useNavigate();

//   const districts = ["Dakshina Kannada", "Udupi", "Uttara Kannada"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//     try {
//       console.log('Sending data to server:', { name, district });
//       await axios.post('http://localhost:5173/api/submit', { name, district });
//       alert('User saved successfully');
//       console.log('User saved successfully');
//       // Navigate to the respective page based on selected district
//       if (district === "DakshinaKannada") {
//         navigate('/dakshina-kannada');
//       } else if (district === "Udupi") {
//         navigate('/Udupi');
//       } else if (district === "Uttara Kannada") {
//         navigate('/uttara-kannada');
//       }
//     } catch (error) {
//       console.error('There was an error saving the user!', error);
//     }
//   };

//   const handleCancel = () => {
//     onClose(); // Close the popup or perform any necessary action
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Explore More</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">What is your name?</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Which district do you like?</label>
//             <select
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             >
//               <option value="" disabled>Select a district</option>
//               {districts.map((dist) => (
//                 <option key={dist} value={dist}>{dist}</option>
//               ))}
//             </select>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//               onClick={handleSubmit} // Handle form submission onClick
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DistrictPopup;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const DistrictPopup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [district, setDistrict] = useState("");

//   const navigate = useNavigate();

//   const districts = ["Dakshina Kannada", "Udupi", "Uttara Kannada"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//     try {
//       console.log('Sending data to server:', { name, district });
//       await axios.post('http://localhost:5173/api/submit', { name, district });
//       alert('User saved successfully');
//       console.log('User saved successfully');
      
//       // Navigate to the respective page based on selected district
//       if (district === "Dakshina Kannada") {
//         navigate('/dakshina-kannada');
//       } else if (district === "Udupi") {
//         navigate('/udupi');
//       } else if (district === "Uttara Kannada") {
//         navigate('/uttara-kannada');
//       }
//     } catch (error) {
//       console.error('There was an error saving the user!', error);
//     }
//   };

//   const handleCancel = () => {
//     onClose(); // Close the popup or perform any necessary action
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Explore More</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">What is your name?</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Which district do you like?</label>
//             <select
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             >
//               <option value="" disabled>Select a district</option>
//               {districts.map((dist) => (
//                 <option key={dist} value={dist}>{dist}</option>
//               ))}
//             </select>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button" // Changed to type="button" for cancel
//               className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit" // Kept type="submit" for form submission
//               className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//               onSubmit={handleSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DistrictPopup;



//===============================================//
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const DistrictPopup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [district, setDistrict] = useState("");

//   const navigate = useNavigate();

//   const districts = ["Dakshina Kannada", "Udupi", "Uttara Kannada"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//     try {
//       console.log('Sending data to server:', { name, district });
//       await axios.post('http://localhost:5173/api/submit', { name, district });
//       alert('User saved successfully');
//       console.log('User saved successfully');
      
//       // Navigate to the respective page based on selected district
//       if (district === "Dakshina Kannada") {
//         navigate('/dakshina-kannada');
//       } else if (district === "Udupi") {
//         navigate('/udupi');
//       } else if (district === "Uttara Kannada") {
//         navigate('/uttara-kannada');
//       }
//     } catch (error) {
//       console.error('There was an error saving the user!', error);
//     }
//   };

//   const handleCancel = () => {
//     onClose(); // Close the popup or perform any necessary action
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Explore More</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">What is your name?</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Which district do you like?</label>
//             <select
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             >
//               <option value="" disabled>Select a district</option>
//               {districts.map((dist) => (
//                 <option key={dist} value={dist}>{dist}</option>
//               ))}
//             </select>
//           </div>

          
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DistrictPopup;

//===========*************=====================
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const DistrictPopup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [district, setDistrict] = useState("");

//   const navigate = useNavigate();

//   const districts = ["Dakshina Kannada", "Udupi", "Uttara Kannada"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Save user data to server
//       await axios.post("http://localhost:5173/api/submit", { name, district });
//       alert("User saved successfully");

//       // Navigate to the respective page based on selected district
//       if (district === "Dakshina Kannada") {
//         navigate("/dakshina-kannada");
//       } else if (district === "Udupi") {
//         navigate("/udupi");
//       } else if (district === "Uttara Kannada") {
//         navigate("/uttara-kannada");
//       }

//       onClose(); // Close the popup after navigation
//     } catch (error) {
//       console.error("Error saving user:", error);
//     }
//   };

//   const handleCancel = () => {
//     onClose(); // Close the popup or perform any necessary action
//   };

//   const goToDistrictPage = (district) => {
//     // Navigate to the respective district page
//     if (district === "Dakshina Kannada") {
//       navigate("/dakshina-kannada");
//     } else if (district === "Udupi") {
//       navigate("/udupi");
//     } else if (district === "Uttara Kannada") {
//       navigate("/uttara-kannada");
//     }
//     onClose(); // Close the popup after navigation
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Explore More</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">What is your name?</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Which district do you like?</label>
//             <select
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             >
//               <option value="" disabled>Select a district</option>
//               {districts.map((dist) => (
//                 <option key={dist} value={dist}>
//                   {dist}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="flex justify-between">
//             <div>
//               <button
//                 type="button"
//                 className="bg-green-500 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => goToDistrictPage("Udupi")}
//               >
//                 Go to Udupi
//               </button>
//               <button
//                 type="button"
//                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-2"
//                 onClick={() => goToDistrictPage("Uttara Kannada")}
//               >
//                 Go to Uttara Kannada
//               </button>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DistrictPopup;

//this is including 3 button 

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DistrictPopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");

  const navigate = useNavigate();

  const districts = ["Select a district", "Dakshina Kannada", "Udupi", "Uttara Kannada"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save user data to server
      await axios.post("http://localhost:5173/api/submit", { name, district });
      alert("User saved successfully");

      // Navigate to the respective page based on selected district
      if (district === "Dakshina Kannada") {
        navigate("/dakshina-kannada");
      } else if (district === "Udupi") {
        navigate("/udupi");
      } else if (district === "Uttara Kannada") {
        navigate("/uttara-kannada");
      }

      onClose(); // Close the popup after navigation
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleCancel = () => {
    onClose(); // Close the popup or perform any necessary action
  };

  const goToDistrictPage = (district) => {
    // Navigate to the respective district page
    if (district === "Dakshina Kannada") {
      navigate("/dakshina-kannada");
    } else if (district === "Udupi") {
      navigate("/udupi");
    } else if (district === "Uttara Kannada") {
      navigate("/uttara-kannada");
    }
    onClose(); // Close the popup after navigation
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Explore More</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">What is your name?</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Which district do you like?</label>
            <div className="relative">
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              >
                {districts.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="absolute right-0 top-0 mt-2 mr-2 bg-green-500 text-white font-bold py-1 px-2 rounded"
                onClick={() => goToDistrictPage(district)}
                disabled={district === "Select a district"}
              >
                Go
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DistrictPopup;
