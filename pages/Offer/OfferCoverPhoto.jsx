// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const OfferCoverPhoto = () => {
//   return (
//     <div>
//       <NavLink to="/offer/cover-photo" className="sub-link text-black text-base hover:text-black-100">
//         Offer Cover Photo
//       </NavLink>
//     </div>
//   );
// };

// export default OfferCoverPhoto;

import React from 'react';
import { NavLink } from 'react-router-dom';

const OfferCoverPhoto = () => {
  return (
    <div className="flex items-center justify-left">
      <NavLink to="/offer/cover-photo" className="sub-link text-black text-base hover:text-black-100">
        <b>Offer Cover Photo:</b>
      </NavLink>

      {/* Add Cover Photo button */}
      <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 ">
        Add Cover Photo
      </button>
    </div>
  );
};

export default OfferCoverPhoto;
