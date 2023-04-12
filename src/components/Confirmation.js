import React from "react";

function Confirmation(props) {
  return (
    <div className="confirmation">
      <h2>Thank you for your inquiry!</h2>
      <p>Here are your inquiry details:</p>
      <ul>
        <li>Pickup location: {props.userInquiry.pickupLocation}</li>
        <li>Drop-off location: {props.userInquiry.dropoffLocation}</li>
        <li>Date: {props.userInquiry.date}</li>
        <li>Time: {props.userInquiry.time}</li>
        <li>
          Additional requirements: {props.userInquiry.additionalRequirements}
        </li>
      </ul>
    </div>
  );
}

export default Confirmation;