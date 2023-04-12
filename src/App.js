import React, { useState } from "react";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import "./styles/index.css";
import Navbar from "./components/Navbar";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userInquiry, setUserInquiry] = useState({});

  const submitForm = (inquiry) => {
    setUserInquiry(inquiry);
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      <Navbar/>
      <h1 className="text-center mb-5">Taxi Inquiry Service</h1>
      {!isSubmitted ? (
        <Form submitForm={submitForm} />
      ) : (
        <Confirmation userInquiry={userInquiry} />
      )}
    </div>
  );
}

export default App; 