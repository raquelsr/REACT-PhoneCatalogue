import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showPhoneDetails } from '../actions'
import { useHistory } from 'react-router-dom';
import '../styles/phoneList.css';
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
    history.push(`/${phone.id}`);
    dispatch(showPhoneDetails(phone));
  }

  return (
    <React.Fragment>
      {phones && phones.length > 0 ?
        <GridList className='phone-list--full'>
          {phones.map((phone) => (
            <GridListTile 
              onClick = {() => selectPhone(phone)}  
              key = {phone.id}>
              <img src={require(`../../images/${phone.imageFileName}`)} alt={phone.name} />
              <GridListTileBar
                title={phone.name}
                subtitle={<span>{phone.manufacturer}</span>}
                actionIcon={
                  <IconButton aria-label={`Info ${phone.name}`}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        :
        <h5 className='phone-list--empty'>No data available.</h5>
      }
    </React.Fragment>
  );
}

export default PhoneList;