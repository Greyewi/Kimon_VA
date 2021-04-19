import React, {useState} from 'react'
import GameList from './Components/GameList'
import WishList from './Components/WishList'

function App() {
  const [wishList, setWishList] = useState([])

  return (
    <div className="main-wrapper">
      <GameList handleAddGame={setWishList} wishList={wishList}/>
      <WishList wishList={wishList} handleRemoveGame={setWishList}/>
    </div>
  )
}

export default App
