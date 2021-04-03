import './style.css'
import {addToWishlist, removeFromWishlist} from './scripts/utils'
import {renderGameList} from './scripts/scripts'
import {data} from './scripts/model'

console.log("Webpack is awesome")

renderGameList(data)