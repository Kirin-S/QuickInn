import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DestType } from './context'; 
  
import NavBar from './components/NavBar/NavBar';
import SearchLocations from './components/SearchLocations/SearchLocations';
import HotelList from './components/PostList/HotelList';
import Hotel from './components/Hotel/Hotel';

import './App.css';

function App() {
  // const [searchQuery, setSearchQuery] = useState('');
  const [destType, setDestType] = useState('-553173'); // Czech ID

  return (
    <BrowserRouter>
    <div className="App">
      <DestType.Provider value={{destType, setDestType}}>
        <div className="navBar">
          <NavBar />
        </div>

        {/* <SearchLocations
          value={searchQuery}
          setSearchQuery={setSearchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        /> */}

        <Routes>
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/111111" element={<Hotel />} />
        </Routes>

      </DestType.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;