import {renderWishList} from './renders'

export function deleteGame(gameName) {
  const wishlist = JSON.parse(window.localStorage.getItem('wishlist') || '[]');
  const newWishList = wishlist && wishlist.filter(f => f.name !== gameName);
  window.localStorage.setItem('wishlist', JSON.stringify(newWishList));
  renderWishList(newWishList)
  const addBtn = document.getElementById(gameName.replaceAll(' ', '')).querySelector('.added');
  addBtn.setAttribute('class', 'add');
  addBtn.innerHTML = 'Add';
}

export function clearWrapper() {
  document.querySelectorAll('.added').forEach((item) => {
      item.innerHTML = 'Add'
      item.classList.remove('added')
      item.classList.add('add')
  })
}

export const gameAlreadyInWishlist = (gameName) => {
  const stringWishList = window.localStorage.getItem('wishlist')
  const wishlist = stringWishList && JSON.parse(stringWishList)
  console.log(wishlist);
  return wishlist && wishlist.filter(f => f.name === gameName).length > 0
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
}

export const objectToArray = (object) => Object.keys(object).map((item) => object[item]);
