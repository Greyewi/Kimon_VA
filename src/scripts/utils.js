import {renderWishList} from './renders'

export function clearWrapper() {
  document.querySelectorAll('.added').forEach((item) => {
      item.innerHTML = 'Add'
      item.classList.remove('added')
      item.classList.add('add')
  })
}

export const gameAlreadyInWishlist = (gameName) => {
  const wishlist = JSON.parse(window.localStorage.getItem('wishlist') || '[]')
  return wishlist.filter(f => f.name === gameName).length > 0
}

export function handleClear(el) {
  let clearList = document.createElement('p')
  clearList.innerHTML = "Clear List"
  clearList.style.color = "rgb(21, 196, 240)"
  clearList.style.fontSize = 0.8 + "em"
  clearList.style.textDecoration = "underline"
  clearList.style.marginTop = 5 + "px"
  clearList.addEventListener('click', () => {clearWrapper()})
  el.append(clearList)
}

export function handleAdd(addP, e) {
  const wishlist = JSON.parse(window.localStorage.getItem('wishlist') || '[]')
  if(gameAlreadyInWishlist(addP.name)) {
    return
  }
  e.target.innerHTML = "Added"
  e.target.setAttribute("class", "added");
  const newWishList = [...wishlist, addP]
  window.localStorage.setItem('wishlist', JSON.stringify(newWishList))
  renderWishList(newWishList)
  //renderGameList(window.gameList)
}

export const objectToArray = (object) => Object.keys(object).map((item) => object[item]);
