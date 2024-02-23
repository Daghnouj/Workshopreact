{/*import { useParams } from "react-router-dom";

function EventDetails(){
    const {title,id} = useParams();
    return (
        console.log(title),
        console.log(id),
        <h1>EventDetails</h1>
    );
}
export default EventDetails;*/}

import React from 'react';
import '../App.css'; // Adjust the path based on the actual location of App.css

const EventDetails = ({ event }) => {
  return (
    <div className="event-details">
      <h1>{event.title} ({event.acronym})</h1>
      <div className="event-description">
        <strong>Description</strong>
        <p>{event.description}</p>
      </div>
      <div className="event-price">
        <strong>Price</strong>
        <p>{event.price} TND</p>
      </div>
    </div>
  );
};

export default EventDetails;
