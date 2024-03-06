// client/src/components/Sidebar/Feedback.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Feedback = () => {
  return (
    <div>
      <NavLink to="/help/feedback" className="sub-link text-black text-base hover:text-black-100">
        Feedback
      </NavLink>
    </div>
  );
};

export default Feedback;


