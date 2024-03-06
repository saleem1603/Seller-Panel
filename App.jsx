import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Myaccount from "./pages/Myaccount";
import Login from "./pages/Login";
import Reviews from "./pages/Products/Reviews";
import Register from "./pages/Register";

import Setting from "./pages/Setting";

import HelpCenter from "./pages/HelpCenter/HelpCenter";
import AdminContact from "./pages/HelpCenter/AdminContact";
import Feedback from "./pages/HelpCenter/Feedback";
import Mail from "./pages/HelpCenter/Mail";

import Offer from "./pages/Offer/Offer";
import OfferCoverPhoto from './pages/Offer/OfferCoverPhoto';
import OfferExpiryDate from './pages/Offer/OfferExpiryDate';
import OfferTermsAndConditions from './pages/Offer/OfferTermsAndConditions';

// import Analytics from "./Analytic";
// import MetricVsTarget from './pages/Analytics/MetricVsTarget';
// import SessionsByDevice from './pages/Analytics/SessionsByDevice';
// import TinyAreaChart from './pages/Analytics/TinyAreaChart';
// import TinyAreaChartSpend from './pages/Analytics/TinyAreaChartSpend';
// import TrTableTrafficChannels from './pages/Analytics/TrTableTrafficChannels';
// import WebsitePerformance from './pages/Analytics/WebsitePerformance';

import ShopProfileForm from "./pages/ShopProfileForm";
import Category from "./pages/Category/Category";
import SaveTemplate from "./pages/SaveTemplate";
import Publish from "./pages/Publish";

import Dashboard from "./pages/Dashboard";

import Commission from "./pages/Products/Commission";

import Bulkupload from "./pages/Products/Bulkupload";

import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import AddCustomers from "./pages/Customers/Addcustomers";
import Orders from "./pages/Orders/Orders";

import Offers from "./pages/Offers/Offers";

import Addnewoffer from "./pages/Offers/Addnewoffer";

import Tracking from "./pages/Tracking/Tracking";
import Country from "./pages/Customers/Country";
import State from "./pages/Customers/State";
import City from "./pages/Customers/City";
import Address from "./pages/Customers/Addresstypes";
import Details from "./pages/Orders/Details";
import Basicinfo from "./pages/Orders/Basicinfo";
import Ordernote from "./pages/Orders/Ordernote";
import Paymentdetails from "./pages/Orders/Paymentdetails";
import Shippingdetails from "./pages/Orders/Shippingdetails";

import Addproducts from "./pages/Products/Addproducts";
import Reviewsdetails from "./pages/Products/Reviewsdetails";
import Editproducts from "./pages/Products/Editproducts";
import Editcategories from "./pages/Products/Editcategories";
import AddressTypes from "./pages/Customers/Addresstypes";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shopprofile" element={<ShopProfileForm />} />
        <Route path="/setting" element={<Setting />} />

        <Route path="/help/*" element={<HelpCenter />} />
        <Route path="/help/admin-contact" element={<AdminContact />} />
        <Route path="/help/feedback" element={<Feedback />} />
        <Route path="/help/mail" element={<Mail />} />

        <Route path="/publish" element={<Publish />} />

        {/* <Route path="/pages/Analytics" element={<Analytics />} /> */}
        {/* <Route path="/analytics/MetricVsTarget" element={<MetricVsTarget />} /> */}
        {/* <Route path="./pages/Analytics/SessionsByDevice" element={<SessionsByDevice />} />
        <Route path="./pages/Analytics/TinyAreaChart" element={<TinyAreaChart />} />
        <Route path="./pages/Analytics/TinyAreaChartSpend" element={<TinyAreaChartSpend />} />
        <Route path="./pages/Analytics/TrTableTrafficChannels" element={<TrTableTrafficChannels />} />
        <Route path="./pages/Analytics/WebsitePerformance" element={<WebsitePerformance />} /> */}
        
        <Route path="/offer/" element={<Offer />} />
        <Route path="/offer/cover-photo" element={<OfferCoverPhoto />} />
        <Route path="/offer/expiry-date" element={<OfferExpiryDate />} />
        <Route path="/offer/terms-and-conditions" element={<OfferTermsAndConditions />} />

        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/basicinfo" element={<Basicinfo />} />
        <Route path="/ordernote" element={<Ordernote />} />
        <Route path="/paymentdetails" element={<Paymentdetails />} />
        <Route path="/shippingdetails" element={<Shippingdetails />} />

        <Route path="/orders/details" element={<Details />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/addcustomers" element={<AddCustomers />} />

        <Route path="/category" element={<Category />} />

        <Route path="/savetemplate" element={<SaveTemplate />} />

        <Route path="/customers/country" element={<Country />} />
        <Route path="/customers/state" element={<State />} />
        <Route path="/customers/city" element={<City />} />
        <Route path="/customers/address types" element={<AddressTypes />} />
        <Route path="/tracking" element={<Tracking />} />

        <Route path="/offers" element={<Offers />} />
        {/* <Route path="/offers/all-category" element={<AllCategory />} />
        <Route path="/offers/choose-category" element={<ChooseCategory />} /> */}
        <Route path="/offers/addnewoffer" element={<Addnewoffer />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/addproducts" element={<Addproducts />} />
        <Route path="/products/editproducts" element={<Editproducts />} />
        <Route path="/products/reviews" element={<Reviews />} />
        <Route
          path="/products/reviews/reviewsdetails"
          element={<Reviewsdetails />}
        />
        <Route path="/products/commission" element={<Commission />} />
        <Route path="/products/bulk upload" element={<Bulkupload />} />
        <Route
          path="/products/category/editcategories"
          element={<Editcategories />}
        />
      </Routes>
    </RootLayout>
  );
};

export default App;
