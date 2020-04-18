import React from 'react';
import { useSelector } from 'react-redux';

const Phone = () => {
  //let { id }  = useParams(); // TODO: Si introduce la url directamente no tiene state

  const phone = useSelector(state => state.phoneSelected);
  console.log(phone);
  return (
    <React.Fragment>
      <p>{phone.name}</p>
      <p>{phone.description}</p>
    </React.Fragment>
  );
}

export default Phone;