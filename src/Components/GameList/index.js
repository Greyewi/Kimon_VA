import './style.scss'
import gamelist from "../../data/gamelist"
import {useState, useEffect} from 'react'

function AddBtn(props) {
  const {handleAddGame, game, wishList} = props
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {

    const isGameInWishList = wishList.find(f => f.name === game.name)
    if(!isGameInWishList && isAdded){
      setIsAdded(false)
    }

  }, [wishList, isAdded, game])

  return(
    <p className={isAdded ? 'added' : 'add'} onClick={() => {
      if(!isAdded){
        setIsAdded(true)
        handleAddGame((prevState) => [...prevState, game])
      }

    }}>{isAdded ? 'Added' : 'Add'}</p>
  )
}

export function GameList(props) {

  return (
    <div className="left-wrapper">
      {gamelist().map((game, key) =>
        <div key={key}>
          <div className="imagebox">
            <img src={game.cover} alt={game.name}/>
          </div>
          <AddBtn {...props} game={game}/>
          <p className="title">{game.name}</p>
          <p className="price">{game.price}$</p>
        </div>
      )}
    </div>
  )
}

export default GameList;



