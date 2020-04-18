import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPhoneDetails } from '../actions'
import { useHistory } from 'react-router-dom';
import '../styles/phoneList.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const PhoneList = () => {

  const phones = useSelector(state => state.phones);
  const dispatch = useDispatch();
  const history = useHistory();

  const selectPhone = (phone) => {
    console.log('click');
    console.log(phone);
    history.push(`/${phone.id}`);
    dispatch(showPhoneDetails(phone));
  }

  /*return(
      {phones.map(phone =>  
        <button 
          onClick = {() => selectPhone(phone)}  
          key={phone.id}>
          {phone.name}
        </button>)}
    </React.Fragment>
  );*/

  return (
    <React.Fragment>
      <div className='root'>
        <GridList cellHeight={320} className='gridList'>
          {phones.map((phone) => (
            <GridListTile onClick = {() => selectPhone(phone)} key = {phone.id}>
              <img src={require(`../../images/${phone.imageFileName}`)} alt={phone.name} />
              <GridListTileBar
                title={phone.name}
                subtitle={<span>by: {phone.id} - {phone.imageFileName}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${phone.name}`} className='icon'>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </React.Fragment>

  );
}

export default PhoneList;