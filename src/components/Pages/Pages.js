import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HotelID } from '../../context/index';

import HotelList from '../HotelList/HotelList';
import Hotel from '../Hotel/Hotel';
import MainPage from '../MainPage/MainPage';

import { createStore } from 'redux';
import { Provider } from 'react-redux';



const defaultState = {
  destID: '-553173',     // Дефолт ID Праги
  // people: {
  //   adultAmount: 1,
  //   childrenAmount: 0
  // },
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "getDestID":
      return {...state, destID: action.payload}

    // case "getAmountOfPeople":
    //   return {...state, people: action.payload}

    default:
      return state;
  }
}

const store = createStore(reducer);



function Pages() {
  const { hotel_id } = useContext(HotelID);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      
        <Route path={`/hotels/${pageNumber}/`} element={
          <Provider store={store}>
            <HotelList
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </Provider>
          }
        />
      <Route path={`/hotels/${pageNumber}/${hotel_id}/`} element={
        <Hotel
          idOfHotel={hotel_id}
        />}
      />
   </Routes>
  );
}

export default Pages;