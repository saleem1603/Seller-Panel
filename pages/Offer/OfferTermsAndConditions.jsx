import React from 'react';
import { NavLink } from 'react-router-dom';

const OfferTermsAndConditions = () => {
  return (
    <div>
      <NavLink to="/offer/terms-and-conditions" className="sub-link text-black text-base hover:text-black-100 py-2 px-4 pb-10 ">
       <b> Offer Terms and Conditions:</b>
      </NavLink>
      
      {/* Additional content */}
      <div className="mt-4">
        {/* <h2 className="text-lg font-bold ">Terms and Conditions</h2> */}
        <h2 className="text-lg font-bold text-gray-600 underline">Terms and Conditions</h2>

        <p>
          <b>Information about the company:</b>
          This is required by the E-Commerce Regulations, the Companies (Trading Disclosures) Regulations 2024 and the Companies Regulations 2006. This will include providing your registered office address, contact details, company registration number if registered in Dubai and VAT number if applicable.
        </p> <br></br>
        <p>
          <b>Website terms of use:</b>
          The T&C should set out what use of the site may be made. This allows the website owner to specify that certain parts of the site may not be suitable for certain visitors, primarily on account of their age or the jurisdiction from which they are accessing the site and will set out any restriction on the suitability of use of the content.
        </p><br></br>
        <p>
          <b>Uploading material to the site:</b>
          Intellectual property: Does your website provide any social media-type activities? If so, are you protecting yourself in the event the user posts something which infringes a third party’s intellectual property rights? If you intend to re-use comments made by visitors to your site, that should be authorised in the T&C.
        </p><br></br>
        <p>
          <b>Defamation:</b>
          You may also become liable where material uploaded by the user to your website is defamatory. You may wish to include warranties and an indemnity in your T&C to seek to protect yourself from liability in either of the two scenarios described above.
        </p><br></br>
        <p>
          <b>Website content:</b>
          The T&C should allow the owner to update or remove content published on the website, and confirm that the owner is under no obligation to keep the information on the website up to date. This is important if a user might place reliance on information on the website.
        </p><br></br>
        <p>
          <b>Liability:</b>
          The T&C should protect the owner against liability for any loss or damage arising from the use of the website. The ability to impose such limitations effectively will be limited by the Unfair Contract Terms Act 1977 and associated legislation. It may make sense to require that users indemnify the owner for claims made by third parties resulting from the actions of the user.
        </p><br></br>
        <p>
          <b>Information about the user and its visits to the site:</b>
          The owner must comply with the provisions of the Data Protection Act 1998 (DPA) and the Privacy and Electronic Communications (EC Directive) Regulations 2003. It should be very clear what personal data is being collected and what use the website owner intends to make of that data for analytical, marketing or other purposes. This will normally be included as part of a separate privacy policy on the site.
        </p><br></br>
        <p>
          <b>Transactions concluded through the site:</b>
          It should be clear that any supply of goods or services will be governed by a separate specific contract between the website owner and the customer. That separate contract must be carefully drafted and properly incorporated into the website.
        </p><br></br>
        <p>
          <b>Consequences of not having T&C:</b>
          Not having T&C would leave website owners vulnerable in many ways, as described above. Owners need to avoid “borrowing” T&C from other websites. That, as you probably know, would be a breach of copyright.
        </p><br></br>
        <p>
          <b>Conclusion:</b>
          By tailoring your T&C, you can minimize risks to your business and, in the event of litigation, may be able to invoke a valid defense. Your T&C should be reviewed whenever you offer new services, products and promotions or relevant new legislation comes into force.
        </p><br></br>
      </div>
    </div>
  );
};

export default OfferTermsAndConditions;


