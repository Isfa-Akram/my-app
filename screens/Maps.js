import React, { Component, useState  } from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin, selectDestination } from '../slices/navSlice';

const Maps = ()=> {

 const origin = useSelector((state)=>{
    state.selectOrigin;

 });

 const destination = useSelector((state)=>{
    state.selectDestination;
 });

 const [state, setState] = useState({
  pickUp: {
    latitude: origin.location.lat,
    longitude: origin.location.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  dropDown: {
    latitude: destination.location.lat,
    longitude: destination.location.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
})

const { pickUp, dropDown } = state;

  
    return (
      
        <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{ width: 450, height: 350 }}
       mapType= "mutedStandard"

       initialRegion={pickUp}>

        <Marker coordinate={pickUp}/>
        <Marker coordinate={dropDown}/>
         <MapViewDirections
          origin={pickUp}
          destination={dropDown}
          apikey={"AIzaSyDtT2Wl3LOuxKkLwbqbkP9tQScwyH_RShg"}
          strokeWidth={5}
          strokeColor="hotpink"/>
        </MapView>
      //  region={{
       
      //   // latitude: origin.location.latitude,
      //   // longitude: origin.location.longitude,

      //    latitude: 37.78825,
      //    longitude: -122.4324,
      //    latitudeDelta: 0.015,
      //    longitudeDelta: 0.0121,
      //  }}
     

    // {origin?.location && (
    //   <Marker
    //   coordinate={{
    //     latitude: origin.location.latitude,
    //     longitude: origin.location.longitude,
    //   }}
    //   title="Origin"
    //   description={origin.description}
    //   identifier="origin"

    //   />
    // )}

      

     
    )}

export default Maps
