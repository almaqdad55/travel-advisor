import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coords = { lat: -34.9281805, lng: 138.5999312 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAD5FDUpscCxFG23MRffGwaMdqGNnXHbww' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        // onChange={(e) => {
        //   console.log(e);
        //   setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        // }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
