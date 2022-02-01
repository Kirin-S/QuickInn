import NavBar from './components/NavBar/NavBar';
import SearchLocations from './components/SearchLocations/SearchLocations';
import PostList from './components/PostList/PostList';

import './App.css';

function App() {
  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <NavBar />
      <SearchLocations
        // value={searchQuery}
        // onChange={e => setSearchQuery(e.target.value)}
      />
      <PostList />
    </div>
  );
}

export default App;