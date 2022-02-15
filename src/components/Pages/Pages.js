import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HotelID } from '../../context/index';

import HotelList from '../HotelList/HotelList';
import Hotel from '../Hotel/Hotel';
import MainPage from '../MainPage/MainPage';

function Pages() {
  const { hotel_id } = useContext(HotelID);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path={`/hotels/${pageNumber}/`} element={<HotelList pageNumber={pageNumber} setPageNumber={setPageNumber}/>} />
      <Route path={`/hotels/${pageNumber}/${hotel_id}/`} element={<Hotel idOfHotel={hotel_id}/>} />
   </Routes>
  );
}

export default Pages;