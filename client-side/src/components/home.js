import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhones } from '../actions/api';
import PhoneList from './phoneList';

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
        <PhoneList />
        :
        <p>No data</p>
      }
    </React.Fragment>
  );
}

export default Home;