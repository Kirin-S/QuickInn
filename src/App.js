import React, { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import SearchLocations from './components/SearchLocations/SearchLocations';
import PostList from './components/PostList/PostList';
import { DestType } from './context';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [destType, setDestType] = useState('-553173'); // Czech ID

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
          setSearchQuery={setSearchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <PostList searchQuery={searchQuery} />

      </DestType.Provider>
    </div>
  );
}

export default App;