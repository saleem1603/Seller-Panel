// client/src/components/Sidebar/HelpCenter.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiCustomerService2Line } from 'react-icons/ri';
import AdminContact from './AdminContact';
import Feedback from './Feedback';
import Mail from './Mail';

const HelpCenter = () => {
  return (
    <div>
      <NavLink to="/help" className="link text-black text-base hover:text-black-100">
        <RiCustomerService2Line size={23} className="min-w-max" />
        Help Center
      </NavLink>
      <AdminContact />
      <Feedback />
      <Mail />
    </div>
  );
};

export default HelpCenter;


