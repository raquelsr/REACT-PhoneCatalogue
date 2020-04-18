import React from 'react';
import { useSelector } from 'react-redux';

const Phone = () => {
  const phone = useSelector(state => state.phoneSelected);

  return (
    <p>{phone.name}</p>
  );
}

export default Phone;