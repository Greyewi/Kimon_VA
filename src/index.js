import './style.scss'
import {addToWishlist, removeFromWishlist, renderGameList, objectToArray} from './scripts/utils'

console.log("Webpack is awesome")

fetch('https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json')
  .then(res => res.json())
  .then(data => renderGameList(objectToArray(data)))
  .catch(err => console.log(err))