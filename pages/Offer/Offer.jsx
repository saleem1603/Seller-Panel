// client/src/components/Sidebar/HelpCenter.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdLocalOffer } from "react-icons/md";

import OfferCoverPhoto from './OfferCoverPhoto';
import OfferExpiryDate from './OfferExpiryDate';
import OfferTermsAndConditions from './OfferTermsAndConditions';

const Offer = () => {
  return (
    <div className="p-3">
      <NavLink to="/offer" className="link text-black text-base hover:text-black-100">
        <MdLocalOffer size={23} className="min-w-max" />
        Offer
      </NavLink>
      <OfferCoverPhoto />
      <OfferExpiryDate />
      <OfferTermsAndConditions />
    </div>
  );
};

export default Offer;


