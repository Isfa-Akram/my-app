import { createSlice } from '@reduxjs/toolkit';

//initial state of data layer
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation:null
 
};

//prepration of data layer
 export const navSlice = createSlice({
    //name of our slice
    name: 'navigation',

    //initial state of slice navigation  
    initialState,

    //dispatching an information/actions to data layer
    //state represents the current state of navigation
    //actions represents when we make a dispatch from componentto data layer so we give an instruction to change this piece of information
    //payload represents the information inside the action
    reducers: { 
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },

    },
     
  });
  
//destructuring of our set actions and exporting actions to whole application
 export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

//when we push data to data layer we need to pull data back from data layer
//By using selectors we can get data from data layer
//you have 1 selector for each piece of information in initial state

 export const selectOrigin = (state) => state.navigation.origin;
 export const selectDestination = (state) => state.navigation.destination;
 export const selectTravelTimeInformation = (state) => state.navigation.travelTimeInformation;


//string that conects us to the store is the reducer 
export default navSlice.reducer;