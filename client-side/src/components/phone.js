import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/phone.css';
import { getPhoneById } from '../actions/api';

const Phone = () => {
  const { id } = useParams();
  const phone = useSelector(state => state.phoneSelected);

  const dispatch = useDispatch();
  if (!phone) {
    dispatch(getPhoneById(id));
  }

  return (
    <React.Fragment>
      {phone ? 
        <div>
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
        </div> 
        :
        <p>No phone</p>}
    </React.Fragment>
  );
}

export default Phone;