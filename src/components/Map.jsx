import React, {useState, useCallback} from 'react';
import { GoogleMap, useJsApiLoader, MarkerClusterer, Marker } from '@react-google-maps/api';
// const ScriptLoaded = require('../../docs/ScriptLoaded').default

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 9.74507645151382,
  lng: -63.17598890761697
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBCSu8FOxQgqqImB8U5mWRvZUnlrJEETgM"
  })

  const locations = [
    { lat: 9.74507645151382, lng: -63.17598890761697 },
    { lat: 10.74507645151382, lng: -64.1759889076169 },
    { lat: 22.727111, lng: -60.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
  ]

  const options = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }

  function createKey(location) {
    return location.lat + location.lng
  }

  // const [map, setMap] = useState(null)

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return isLoaded ? (
    <div className='container rounded border'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
         <MarkerClusterer options={options}>
          {(clusterer) =>
            locations.map((location) => (
              <Marker key={createKey(location)} position={location} clusterer={clusterer} />
            ))
          }
        </MarkerClusterer>
        { /* Child components, such as markers, info windows, etc. */ }
        
      </GoogleMap>
    </div>
      
  ) : <></>
}
