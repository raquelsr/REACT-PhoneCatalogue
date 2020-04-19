import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/spinner.css';

const Spinner = () =>{
  return (
    <CircularProgress className = "spinner" />
  );
}

export default Spinner;