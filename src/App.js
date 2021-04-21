import React, {useState, useEffect} from 'react'
import GameList from './Components/GameList'
import WishList from './Components/WishList'

function App() {
  const [wishList, setWishList] = useState(window.localStorage.getItem('wishlist') ? JSON.parse(window.localStorage.getItem('wishlist')) : [])

  useEffect(() => {
    window.localStorage.setItem('wishlist', JSON.stringify(wishList))
  }, [wishList])

  return (
    <div className="main-wrapper">
      <GameList handleAddGame={setWishList} wishList={wishList}/>
      <WishList wishList={wishList} handleRemoveGame={setWishList}/>
    </div>
  )
}

export default App
