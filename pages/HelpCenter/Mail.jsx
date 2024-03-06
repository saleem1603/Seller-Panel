// client/src/components/Sidebar/Mail.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Mail = () => {
  return (
    <div>
      <NavLink to="/help/mail" className="sub-link text-black text-base hover:text-black-100">
        Mail
      </NavLink>
    </div>
  );
};

export default Mail;


