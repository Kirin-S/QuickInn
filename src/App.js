import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HotelID } from './context';

import NavBar from './components/NavBar/NavBar';
import Pages from './components/Pages/Pages';

import './App.css';

function App() {
  // const [destType, setDestType] = useState('-553173'); // Czech ID
  const [hotel_id, setHotelID] = useState('');

  return (
    <BrowserRouter>
    <div className="App">
      <div className="navBar">
          <NavBar />
      </div>
      <HotelID.Provider value={{hotel_id, setHotelID}}>
        <Pages />
      </HotelID.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;