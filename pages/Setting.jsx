// // Setting.jsx
// import React from "react";

// const Setting = () => {
//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-3xl font-bold mb-6 text-black p-4 bg-gray-300">Offers Settings</h2>

//       {/* Large Setting Option */}
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h3 className="text-xl font-bold mb-4">General Settings</h3>

//         {/* Individual Setting */}
//         <div className="flex items-center mb-4">
//           <div className="w-1/2">
//             <p className="text-gray-600">Enable Ecommerce Features</p>
//           </div>
//           <div className="w-1/2 text-right">
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>
//         </div>

//         <div className="flex items-center mb-4">
//           <div className="w-1/2">
//             <p className="text-gray-600">Show Product Recommendations</p>
//           </div>
//           <div className="w-1/2 text-right">
//             {/* Toggle Switch */}
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>

//         </div>

//         <div className="flex items-center mb-4">
//           <div className="w-1/2">
//             <p className="text-gray-600">Allow Guest Checkout</p>
//           </div>
//           <div className="w-1/2 text-right">
//             {/* Toggle Switch */}
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>
//         </div>

//         <div className="flex items-center mb-4">
//           <div className="w-1/2">
//             <p className="text-gray-600">Enable Discount Coupons</p>
//           </div>
//           <div className="w-1/2 text-right">
//             {/* Toggle Switch */}
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>
//         </div>

//         <div className="flex items-center mb-4">
//           <div className="w-1/2">
//             <p className="text-gray-600">Allow Product Reviews</p>
//           </div>
//           <div className="w-1/2 text-right">
//             {/* Toggle Switch */}
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>
//         </div>

//         <div className="flex items-center mb-4">
//           <div className="w-1/2">
//             <p className="text-gray-600">Enable Product Ratings</p>
//           </div>
//           <div className="w-1/2 text-right">
//             {/* Toggle Switch */}
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>
//         </div>

//         <div className="flex items-center mb-4">
//           <div className="w-1/2">
//             <p className="text-gray-600">Enable Social Media Sharing</p>
//           </div>
//           <div className="w-1/2 text-right">
//             {/* Toggle Switch */}
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>
//         </div>

//         <div className="flex items-center mb-4">
//           <div className="w-1/2">
//             <p className="text-gray-600">Show Related Products</p>
//           </div>
//           <div className="w-1/2 text-right">
//             {/* Toggle Switch */}
//             <label className="switch">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>
//         </div>

//         {/* Add more settings as needed */}
//       </div>
//     </div>
//   );
// };

// export default Setting;

// Setting.jsx
import React from "react";

const Setting = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-black p-4" style={{ backgroundColor: 'rgb(234, 116, 73)', padding: '6px', borderRadius: '6px' }}>
      Offers Settings
     </h2>


      {/* General Settings */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>General Settings</h3>
        <div className="flex items-center mb-4">
          {/* <div className="w-1/2"> */}
            {/* <p className="option-label">Enable Ecommerce Features</p> */}
          {/* </div> */}
          {/* <div className="w-1/2 text-right">
          <label className="your-unique-class-name">
          <input type="checkbox" className="check" />
            <span className="slider"></span>
          </label>
          </div> */}
        </div>
        {/* //add// */}
        <div className="setting-option">
          <div className="option-label">Enable Ecommerce Features</div>
          <div className="option-toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-option">
          <div className="option-label">Show Featured Products</div>
          <div className="option-toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-option">
          <div className="option-label">Allow Guest Checkout</div>
          <div className="option-toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-option">
          <div className="option-label">Enable Coupons</div>
          <div className="option-toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-option">
          <div className="option-label">Enable Wishlist</div>
          <div className="option-toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Add  */}
      </div>

      {/* Store Information */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>Store Information</h3>
        {/* Setting Option 1: Store Name */}
          <div className="setting-option">
            <div className="option-label">Store Name</div>
            <div className="option-input-1">
            <input type="text" placeholder="Enter store name" style={{ width: '200px' }} />

            </div>
          </div>

          {/* Setting Option 2: Store Address */}
          <div className="setting-option">
            <div className="option-label">Store Address</div>
            <div className="option-input-1">
            <textarea placeholder="Enter store address" style={{ width: '200px' }}></textarea>
            </div>
          </div>

          {/* Setting Option 3: Business Hours */}
          <div className="setting-option">
            <div className="option-label">Business Hours</div>
            <div className="option-input-1">
            <input type="text" placeholder="Enter business hours" style={{ width: '200px' }} />
            </div>
          </div>

        {/* Setting Option 4: Contact Email */}
        <div className="setting-option">
          <div className="option-label">Contact Email</div>
          <div className="option-input-common">
            <input type="email" placeholder="Enter contact email" />
          </div>
        </div>

        {/* Setting Option 5: Contact Phone */}
        <div className="setting-option">
          <div className="option-label">Contact Phone</div>
          <div className="option-input-common">
            <input type="tel" placeholder="Enter contact phone" />
          </div>
        </div>

        {/* Add */}
      </div>

      {/* Product Settings */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>Product Settings</h3>
        {/* Setting Option 1: Allow Pre-orders */}
        <div className="setting-option">
          <div className="option-label">Allow Pre-orders</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 2: Product Reviews */}
        <div className="setting-option">
          <div className="option-label">Enable Product Reviews</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 3: Product Variants */}
        <div className="setting-option">
          <div className="option-label">Allow Product Variants</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 4: Minimum Quantity */}
        <div className="setting-option">
          <div className="option-label">Minimum Quantity per Order</div>
          <div className="option-input-common input">
            <input type="number" placeholder="Enter minimum quantity" />
          </div>
        </div>

        {/* Setting Option 5: Maximum Quantity */}
        <div className="setting-option">
          <div className="option-label">Maximum Quantity per Order</div>
          <div className="option-input-common input">
            <input type="number" placeholder="Enter maximum quantity" />
          </div>
        </div>

        {/* product settings */}
      </div>

      {/* Checkout Settings */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>Checkout Settings</h3>
        {/* Setting Option 1: Enable Guest Checkout */}
        {/* <div className="setting-option">
          <div className="option-label">Enable Guest Checkout</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div> */}

        {/* Setting Option 2: Allow Multiple Addresses */}
        <div className="setting-option">
          <div className="option-label">Allow Multiple Shipping Addresses</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 3: Enable Express Checkout */}
        <div className="setting-option">
          <div className="option-label">Enable Express Checkout</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 4: Show Order Summary */}
        <div className="setting-option">
          <div className="option-label">Show Order Summary</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 5: Order Confirmation Email */}
        <div className="setting-option">
          <div className="option-label">Send Order Confirmation Email</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* checkout settings */}
      </div>

      {/* User Account Settings */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>User Account Settings</h3>
        {/* Setting Option 1: Allow User Registration */}
        <div className="setting-option">
          <div className="option-label">Allow User Registration</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 2: Require Email Verification */}
        <div className="setting-option">
          <div className="option-label">Require Email Verification</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 3: Enable Social Media Login */}
        <div className="setting-option">
          <div className="option-label">Enable Social Media Login</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 4: Allow Password Reset */}
        <div className="setting-option">
          <div className="option-label">Allow Password Reset</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 5: Enable Two-Factor Authentication */}
        <div className="setting-option">
          <div className="option-label">Enable Two-Factor Authentication</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* user account settings */}
      </div>

      {/* Email Notifications */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>Email Notifications</h3>
        {/* Setting Option 1: Send Order Confirmation Emails */}
        <div className="setting-option">
          <div className="option-label">Send Order Confirmation Emails</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 2: Notify on Product Updates */}
        <div className="setting-option">
          <div className="option-label">Notify on Product Updates</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 3: Subscribe to Newsletter */}
        <div className="setting-option">
          <div className="option-label">Subscribe to Newsletter</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 4: Notify on Special Offers */}
        <div className="setting-option">
          <div className="option-label">Notify on Special Offers</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 5: Notify on Back in Stock */}
        <div className="setting-option">
          <div className="option-label">Notify on Back in Stock</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* email notifications settings */}
      </div>

      {/* Security Settings */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>Security Settings</h3>
        {/* Setting Option 1: Enable Two-Factor Authentication */}
        <div className="setting-option">
          <div className="option-label">Enable Two-Factor Authentication</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 2: Password Expiry Reminder */}
        <div className="setting-option">
          <div className="option-label">Password Expiry Reminder</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 3: IP Whitelisting */}
        <div className="setting-option">
          <div className="option-label">IP Whitelisting</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 4: Security Audits */}
        <div className="setting-option">
          <div className="option-label">Security Audits</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 5: Enable Captcha */}
        <div className="setting-option">
          <div className="option-label">Enable Captcha</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* security settings */}
      </div>

      {/* Design and Layout */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>Design and Layout</h3>
        {/* Setting Option 1: Theme Color */}
        <div className="setting-option">
          <div className="option-label">Theme Color</div>
          <div className="option-input">
            <input type="color" />
          </div>
        </div>

        {/* Setting Option 2: Font Size */}
        <div className="setting-option">
          <div className="option-label">Font Size</div>
          <div className="option-input">
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        </div>

        {/* Setting Option 3: Layout Style */}
        <div className="setting-option">
          <div className="option-label">Layout Style</div>
          <div className="option-input">
            <label>
              <input type="radio" name="layoutStyle" value="boxed" /> Boxed
            </label>
            <label>
              <input type="radio" name="layoutStyle" value="fullWidth" /> Full
              Width
            </label>
          </div>
        </div>

        {/* design and layout settings */}
      </div>

      {/* Analytics and Reporting */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>Analytics and Reporting</h3>
        {/* Setting Option 1: Enable Google Analytics */}
        <div className="setting-option">
          <div className="option-label">Enable Google Analytics</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 2: Report Frequency */}
        <div className="setting-option">
          <div className="option-label">Report Frequency</div>
          <div className="option-input">
            <select>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
        </div>

        {/* Setting Option 3: Email Reports */}
        <div className="setting-option">
          <div className="option-label">Email Reports</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        {/* analytics and reporting settings */}
      </div>

      {/* Legal and Compliance */}
      {/* <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">Legal and Compliance</h3> */}
        {/* Add legal and compliance settings */}
      {/* </di12v> */}

      {/* Promotions and Discounts */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ borderBottom: '1px solid #000' }}>Promotions and Discounts</h3>
        {/* Setting Option 1: Enable Discount Codes */}
        <div className="setting-option">
          <div className="option-label">Enable Discount Codes</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 2: Maximum Discount Percentage */}
        <div className="setting-option">
          <div className="option-label">Maximum Discount Percentage</div>
          <div className="option-input percentage">
          <input type="number" placeholder="Enter percentage" className="number-input" />
            <span className="">%</span>
          </div>
        </div>

        {/* Setting Option 3: Special Offers */}
        <div className="setting-option">
          <div className="option-label">Special Offers</div>
          <div className="option-input-common input">
            <textarea placeholder="Enter special offers"></textarea>
          </div>
        </div>

        {/* Setting Option 4: Seasonal Discounts */}
        <div className="setting-option">
          <div className="option-label">Seasonal Discounts</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Setting Option 5: Clearance Sale */}
        <div className="setting-option">
          <div className="option-label">Clearance Sale</div>
          <div className="option-input">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* promotions and discounts settings */}
      </div>
    </div>
  );
};

export default Setting;
