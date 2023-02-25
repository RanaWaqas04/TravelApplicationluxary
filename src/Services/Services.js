import React, { useState } from "react";
// import ServiceContent from "../ServiceContent/ServiceContent";
import "./services.css";
const Services = () => {
//   const [services, setServices] = useState([]);

//   const fiteredData = [];
//   services.map((service) => fiteredData.push(service));
//   let filteredService = fiteredData.filter(
//     (service) => service._id !== "6195ffe27a4f53f3360c7354"
//   );
//   filteredService = filteredService.filter(
//     (service) => service._id !== "618a0fc7960e95fdab1cab65"
//   );

  return (
    <div className="container">
      <div className="luxury-car-service">
        <h1>Choose Your Luxury Car</h1>
        <div className="car-grid">
          <div className="car-card">
            <img src="https://i.pinimg.com/originals/9e/28/5d/9e285d16781ce966f1d16f7ac6b6991a.jpg" alt="Luxury Car 1" />
            <h2>Car Model 1</h2>
            <p>Description of Car Model 1</p>
            <button>Select Car</button>
          </div>
          <div className="car-card">
            <img src="https://i.pinimg.com/originals/e9/bc/c0/e9bcc0c2fbf899214d2d746242657dce.jpg" alt="Luxury Car 2" />
            <h2>Car Model 2</h2>
            <p>Description of Car Model 2</p>
            <button>Select Car</button>
          </div>
          <div className="car-card">
            <img src="https://i.pinimg.com/originals/e9/bc/c0/e9bcc0c2fbf899214d2d746242657dce.jpg" alt="Luxury Car 3" />
            <h2>Car Model 3</h2>
            <p>Description of Car Model 3</p>
            <button>Select Car</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
