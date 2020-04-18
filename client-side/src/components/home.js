import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhones } from '../actions/api';
import PhoneList from './phoneList';
import '../styles/home.css'

const Home = () => { 
  const dataStorage = useSelector(state => state.phones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className='home'>
        <h1>PHONE CATALOGUE</h1>
        { dataStorage && dataStorage.length > 0 ?
          <PhoneList />
          :
          <h5 className='data--empty'>No data available.</h5>
        }
      </div>
    </React.Fragment>
  );
}

export default Home;