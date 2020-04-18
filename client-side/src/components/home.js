import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhones } from '../actions/api';
import { showPhoneDetails } from '../actions';

const Home = () => { 
  const dataStorage = useSelector(state => state.phones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhones());
  }, []);

  return (
    <React.Fragment>
      <h1>Welcome to phone catalogue!</h1>
      { dataStorage && dataStorage.length > 0 ?
        dataStorage.map(phone => 
          <button 
            onClick = {() => dispatch(showPhoneDetails(phone))}  
            key={phone.id}>
            {phone.name}
          </button>)
        :
        <p>No data</p>
      }
    </React.Fragment>
  );
}

export default Home;