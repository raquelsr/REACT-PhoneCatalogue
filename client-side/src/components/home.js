import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhones } from '../actions/api';
import PhoneList from './phoneList';
import '../styles/home.css';
import Spinner from './spinner';

const Home = () => { 
  const status = useSelector(state => state.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className='home'>
        <h1>PHONE CATALOGUE</h1>
        { status === 'loading' ?
          <Spinner />
          :
          <PhoneList />
        }
      </div>
    </React.Fragment>
  );
}

export default Home;