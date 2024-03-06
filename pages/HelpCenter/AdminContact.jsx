// client/src/components/Sidebar/AdminContact.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminContact = () => {
  return (
    <div>
      <NavLink to="/help/admin-contact" className="sub-link text-black text-base hover:text-black-100">
        Admin Contact
      </NavLink>
    </div>
  );
};

export default AdminContact;


