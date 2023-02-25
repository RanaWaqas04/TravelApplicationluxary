import React, { useState } from 'react';
import ServicesList from '../ServicesList/ServicesList';
import './PrivateTwo.css';

const PrivateTwo = () => {

  const [services, setServices] = useState([])



  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Place Name</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                services.map((service => <ServicesList key={service._id} service={service}>

                </ServicesList>))
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrivateTwo;