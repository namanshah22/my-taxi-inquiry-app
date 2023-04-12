import React, { useState } from "react";

function Form({ submitForm }) {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inquiryDetails = {
      pickupLocation,
      dropoffLocation,
      date,
      time,
      additionalRequirements
    };
    submitForm(inquiryDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="pickup-location" className="form-label">
          Pickup Location
        </label>
        <input
          type="text"
          className="form-control"
          id="pickup-location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dropoff-location" className="form-label">
          Drop-off Location
        </label>
        <input
          type="text"
          className="form-control"
          id="dropoff-location"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">
          Time
        </label>
        <input
          type="time"
          className="form-control"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="additional-requirements" className="form-label">
          Additional Requirements
        </label>
        <textarea
          className="form-control"
          id="additional-requirements"
          rows="3"
          value={additionalRequirements}
          onChange={(e) => setAdditionalRequirements(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;