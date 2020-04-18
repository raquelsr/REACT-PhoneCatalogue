import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPhoneDetails } from '../actions'

const PhoneList = () => {

  const phones = useSelector(state => state.phones);
  const dispatch = useDispatch();

  const selectPhone = (phone) => {
    console.log('click');
    console.log(phone);
    dispatch(showPhoneDetails(phone));
  }

  return(
    <React.Fragment>
      {phones.map(phone =>  
        <button 
          onClick = {() => selectPhone(phone)}  
          key={phone.id}>
          {phone.name}
        </button>)}
    </React.Fragment>
  );
}

export default PhoneList;