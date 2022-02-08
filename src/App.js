import React, { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import SearchLocations from './components/SearchLocations/SearchLocations';
import PostList from './components/PostList/PostList';
// import Hotel from "./components/Hotel/Hotel"
import { DestType } from './context';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [destType, setDestType] = useState('');

  return (
    <div className="App">
      <DestType.Provider value={{
        destType,
        setDestType
      }}>

        {/* <Hotel /> */}
        <NavBar />
        <SearchLocations
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <PostList searchQuery={searchQuery} />

      </DestType.Provider>
    </div>
  );
}

export default App;