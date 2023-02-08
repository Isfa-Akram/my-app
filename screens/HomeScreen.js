import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import MapScreen from './MapScreen';
//import {GOOGLE_MAPS_APIKEY} from "@env"


const HomeScreen = ()=>{

    //dispatching data to data layer which is navslice
   const dispatch = useDispatch();

    return (
      <SafeAreaView style={tw`bg-blue-200 h-full`}> 
        <Text style={styles.text}> Searching Module </Text> 
        
        <GooglePlacesAutocomplete 
        nearbyPlacesAPI='GooglePlacesSearch'
        placeholder='Enter Pickup Location'
        debounce={400}
        enablePoweredByContainer={false}

        onPress={(data, details = null) => {

          console.log(data);
          
           dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description,
           }));

           dispatch(setDestination(null));
            
        }}

       
       

        fetchDetails={true}
        returnKeyType={"search"}
        query={{
        key: 'AIzaSyDtT2Wl3LOuxKkLwbqbkP9tQScwyH_RShg',
        language: 'en',
      }}
    />

<GooglePlacesAutocomplete 
        nearbyPlacesAPI='GooglePlacesSearch'
        placeholder='Enter Drop Location'
        query={{
        key: 'AIzaSyDtT2Wl3LOuxKkLwbqbkP9tQScwyH_RShg',
        language: 'en',
      }}
    />


        <MapScreen />
</SafeAreaView>


    
)}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      textAlign: 'center',
      color:'blue',
      padding: 20,
      
}})
  