import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  // const coords = { lat: -34.9281805, lng: 138.5999312 };

  bounds ? (
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  ) : (
    <div className={classes.mapContainer}>
      {/* 
      ne: {lat: -34.91586481912602 lng: 138.64954133793947}
      sw: {lat: -34.940494332471076 lng: 138.55032106206056}
      */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAD5FDUpscCxFG23MRffGwaMdqGNnXHbww' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        // onChange={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
