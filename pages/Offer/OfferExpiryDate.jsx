// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const OfferExpiryDate = () => {
//   return (
//     <div>
//       <NavLink to="/offer/expiry-date" className="sub-link text-black text-base hover:text-black-100">
//         Offer Expiry Date
//       </NavLink>
//     </div>
//   );
// };

// export default OfferExpiryDate;

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const OfferExpiryDate = () => {
//   // Example expiry date
//   const expiryDate = "February 28, 2024";

//   return (
//     <div>
//       <NavLink to="/offer/expiry-date" className="sub-link text-black text-base hover:text-black-100">
//         Offer Expiry Date
//       </NavLink>
      
//       {/* Display the expiry date */}
//       <p className="text-gray-600 mt-2">Expiry Date: {expiryDate}</p>
//     </div>
//   );
// };

// export default OfferExpiryDate;

import React from 'react';
import { NavLink } from 'react-router-dom';

const OfferExpiryDate = () => {
  // Example expiry date
  const expiryDate = "February 28, 2024";

  return (
    <div>
      <NavLink to="/offer/expiry-date" className="sub-link text-black text-base hover:text-black-100">
       <b> Offer Expiry Date:</b>
      </NavLink>
      
      {/* Display the expiry date with interactive styles */}
      <div className="flex items-center mt-2">
        <span className="text-gray-900 mr-2">Expiry Date:</span>
        <p className="text-gray-600 font-semibold">{expiryDate}</p>
      </div>
      
      {/* Add a button for updating the expiry date */}
      <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 ml-10 mb-5">
        Update Expiry Date
      </button>
    </div>
  );
};

export default OfferExpiryDate;


