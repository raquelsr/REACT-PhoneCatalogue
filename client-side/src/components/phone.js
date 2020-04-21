import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/phone.css';
import { getPhoneById } from '../actions/api';
import Spinner from './spinner';

const Phone = () => {
  const { id } = useParams();
  const phone = useSelector(state => state.phoneSelected);
  const status = useSelector(state => state.status);

  const dispatch = useDispatch();
  if (!phone && !status) {
    dispatch(getPhoneById(id));
  }

  if (status === 'loading') {
    return <Spinner />
  } else if (phone) {
    const phoneColor = {
      background: phone.color
    }
    return (
      <div>
        <h2 className="phone-title">{phone.name}</h2>
        <div className="details">
          <div className="phone-image">
            <img src={require(`../../images/${phone.imageFileName}`)} alt={phone.name} />
          </div>
          <div className="phone-description">
            <p><span>Manufacturer: </span>{phone.manufacturer}</p>
            <p className="phone-description--bold">Description: </p>
            <p>{phone.description}</p>
            <div className="phone-description--color">
              <span>Color: </span>
              <div className="square" style={phoneColor}></div>
            </div>
            <p><span>Price: </span>{phone.price} €</p>
            <p><span>Screen: </span>{phone.screen}</p>
            <p><span>Processor: </span>{phone.processor}</p>
            <p><span>RAM: </span>{phone.ram}</p>
          </div>
        </div>
      </div>);
  } else {
    return <h5 className="phone--null">Phone not found</h5>;
  }
}

export default Phone;