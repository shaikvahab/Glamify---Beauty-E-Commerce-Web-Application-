import React from "react";
import "./App.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Loginpage from "./Components/Loginpage";
import Footer from "./Components/Footer";
import Homepage from "./Homepage/Index";
import Productdetails1 from "./Product1/Productdetails1";
import Productdetails2 from "./Product2/Productdetails2";
import Productdetails3 from "./Product3/Productdetails3";
import Productdetails4 from "./Product4/Productdetails4";
import Shopbycategory from "./Components/Shopbycategory";
import Shopall from "./Components/Shopall";
import Cart from "./Components/Cart";
import Search from "./Components/Search";
import PaymentPage from "./Components/PaymentPage";
import OrderPlaced from "./Components/OrderPlaced";
import Aboutus from "./Components/Aboutus";
import Askexpert from "./Components/Askexpert";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Homepage />
          <Footer />
        </>
      ),
    },

    {
      path: "/Loginpage",  // This is for the Login Page
      element: (
        <>
          <Navbar />
          <Loginpage />  {/* Only render LoginPage here */}
        </>
      ),
    },

    {
      path: "/Productdetails1",  // This is for the Login Page
      element: (
        <>
          {/* <Navbar /> */}
          {/* <Loginpage />  Only render LoginPage here */}

          <Navbar />
          <Productdetails1 />
          <Footer />
        </>
      ),
    },

    {
      path: "/Productdetails2",  // This is for the Login Page
      element: (
        <>
          {/* <Navbar /> */}
          {/* <Loginpage />  Only render LoginPage here */}

          <Navbar />

          <Productdetails2 />
          <Footer />
        </>
      ),
    },

    {
      path: "/Productdetails3",  // This is for the Login Page
      element: (
        <>
          {/* <Navbar /> */}
          {/* <Loginpage />  Only render LoginPage here */}

          <Navbar />

          <Productdetails3 />
          <Footer />
        </>
      ),
    },

    {
      path: "/Productdetails4",  // This is for the Login Page
      element: (
        <>
          {/* <Navbar /> */}
          {/* <Loginpage />  Only render LoginPage here */}

          <Navbar />
          <Productdetails4 />
          <Footer />
        </>
      ),
    },

    {
      path: "/shop-by-category",  // This is for the shop-by-category.
      element: (
        <>
          <Navbar />
          <Shopbycategory />
          <Footer />
        </>
      ),
    },

    {
      path: "/shop-all",  // This is for the Login Page
      element: (
        <>
          <Navbar />
          <Shopall />
          <Footer />
        </>
      ),
    },

    {
      path: "/Cart",
      element: (
        <>
          <Navbar />
          <Cart />
          <Footer />
        </>
      ),
    },

    {
      path: "/Search",
      element: (
        <>
          <Search />
          {/* <Homepage /> */}
          <Footer />
        </>
      ),
    },

    {
      path: "/PaymentPage",
      element: (
        <>
          <PaymentPage/>
          <Footer />
        </>
      ),
    },

    {
      path: "/OrderPlaced",
      element: (
        <>
          <OrderPlaced/>
          <Footer />
        </>
      ),
    },

    {
      path: "/Aboutus",
      element: (
        <>
          <Navbar/>
          <Aboutus/>
          <Footer />
        </>
      ),
    },

    {
      path: "/Askexpert",
      element: (
        <>
          <Navbar/>
          <Askexpert/>
          <Footer />
        </>
      ),
    }



  ]);

  return <RouterProvider router={router} />;
};

export default App;