// ShopProfileForm.jsx

import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const ShopProfileForm = () => {
  // State for form fields
  const [logo, setLogo] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [telephone, setTelephone] = useState('');
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [location, setLocation] = useState('');
  // const [googleMapApiKey] = useState('YOUR_API_KEY'); // Replace with your API key
  // const [mapCenter, setMapCenter] = useState({ lat: 51.505, lng: -0.09 });
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pincode, setPincode] = useState('');
  const [shopPhoto, setShopPhoto] = useState('');
  const [businessCategory, setBusinessCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  // const [socialLinks, setSocialLinks] = useState('');

  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Perform actions with form data (e.g., send to server)
    console.log('Form submitted:', {
      logo,
      name,
      description,
      contact,
      telephone,
      mobile1,
      mobile2,
      location,
      address,
      street,
      landmark,
      pincode,
      shopPhoto,
      businessCategory,
      subCategory,
      coverPhoto,
      socialLinks,
      facebook,
      twitter,
      instagram,
    });
    // API calls or other logic
  };

  return (
  
    <div className="shop-profile-form-container">
     <h2 class="shop-profile-heading">Shop Profile</h2>
    <form className="shop-profile-form" onSubmit={handleSubmit}>
      {/* Your form fields */}
      <div className="form-group">

      <label htmlFor="logo">Logo:</label>
          <input type="file" id="logo" onChange={(e) => setLogo(e.target.files[0])} />
          {logo && <img src={URL.createObjectURL(logo)} alt="Logo Preview" />}
        </div>

              <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="form-group">
      <div className="form-group">
        <label htmlFor="contact">Contact:-</label> 
      </div>
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Telephone:</label>
        <input type="text" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="mobile1">Mobile 1:</label>
        <input type="text" id="mobile1" value={mobile1} onChange={(e) => setMobile1(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="mobile2">Mobile 2:</label>
        <input type="text" id="mobile2" value={mobile2} onChange={(e) => setMobile2(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={address} onChange={(e) => setLocation(e.target.value)} />

        <div>
      {/* Paste the generated iframe code here */}
      <iframe
        title="Google Map"
        width="950"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.113859106588!2d-122.08407878538345!3d37.42211427972516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e9157304c3b%3A0x15fd5273b60bb3a1!2sGoogleplex!5e0!3m2!1sen!2suk!4v1644381507410!5m2!1sen!2suk"
      ></iframe>
    </div>
        </div>
        {/* <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} /> */}
        

      

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="landmark">Landmark:</label>
        <input type="text" id="landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="pincode">Pin Code:</label>
        <input type="text" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="shopPhoto">Shop Photo:</label>
        <input type="file" id="shopPhoto" onChange={(e) => setShopPhoto(e.target.files[0])} />
        {shopPhoto && <img src={URL.createObjectURL(shopPhoto)} alt="Shop Photo Preview" />}
      </div>

      <div className="form-group">
        <label htmlFor="businessCategory">Business Category:</label>
        <select id="businessCategory" value={businessCategory} onChange={(e) => setBusinessCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="electronics">Electronics Products</option>
          {/* more options*/}
        </select>
      </div>
      <br></br>

      <div className="form-group">
        <label htmlFor="subCategory">Sub Category:</label>
        <select id="subCategory" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
          <option value="">Select Sub Category</option>
          <option value="subCategory1">Sub Category 1</option>
          <option value="subCategory2">Sub Category 2</option>
          {/* more options */}
        </select>
      </div>
      <br></br>

    <div className="form-group">
      <label htmlFor="coverPhoto">Cover Photo:</label>
      <input type="file" id="coverPhoto" onChange={(e) => setCoverPhoto(e.target.files[0])} />
      {coverPhoto && <img src={URL.createObjectURL(coverPhoto)} alt="Cover Photo Preview" />}
    </div>

    <div className="form-group">
      <label htmlFor="socialLinks">Social Links:-</label>
      <div className="social-labels">
        <label htmlFor="facebook">Facebook:</label>
        <input type="url" id="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />

        <label htmlFor="twitter">Twitter:</label>
        <input type="url" id="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />

        <label htmlFor="instagram">Instagram:</label>
        <input type="url" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
      </div>
    </div>

    <form className="your-form-class" onSubmit={handleSubmit}>
          
    <button type="submit" className="center-button">Submit</button>
    </form>
        </form>
        <br></br>
        <br></br>
        </div>
      );
    };

export default ShopProfileForm;
