import './style.scss'
import {objectToArray} from './scripts/utils'
import {renderGameList, renderWishList} from './scripts/renders'

fetch('https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json')
  .then(res => res.json())
  .then(data => {
    renderGameList(objectToArray(data))
    window.gameList = objectToArray(data)
    renderWishList(JSON.parse(window.localStorage.getItem('wishlist')))
  })
  .catch(err => console.log(err))

