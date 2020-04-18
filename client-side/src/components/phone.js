import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/phone.css';

const Phone = () => {
  //let { id }  = useParams(); // TODO: Si introduce la url directamente no tiene state
  //const phone = useSelector(state => state.phoneSelected);

  const phones = useSelector(state => state.phones);
  const phone = phones[0];
  return (
    <React.Fragment>
      <h3>{phone.name}</h3>
      <div className="details">
        <div className="image">
          <img src={require(`../../images/${phone.imageFileName}`)} alt={phone.name} />
        </div>
        <div className="description">
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Description: {phone.description}</p>
          <p>Color: {phone.color} </p>
          <p>Price: {phone.price}</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>RAM: {phone.ram}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Phone;