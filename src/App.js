import './App.css';
import React, {useState} from 'react'
import GameList from './Components/GameList'
import WishList from './Components/WishList'

function App() {
  const [iterator, setIterator] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <GameList/>
        <WishList/>
      </header>
    </div>
  );
}

export default App;
