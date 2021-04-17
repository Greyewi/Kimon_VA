import React from 'react'
import GameList from './Components/GameList'
import WishList from './Components/WishList'

function App() {
    return (
        <div className="main-wrapper">
            <GameList/>
            <WishList/>
        </div>
    );
}

export default App;
