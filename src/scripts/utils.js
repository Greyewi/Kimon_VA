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
  return wishlist && wishlist.filter(f => f.name === gameName).length > 0
}

export function handleAdd(addP, target) {
  const wishlist = JSON.parse(window.localStorage.getItem('wishlist') || '[]')
  if(gameAlreadyInWishlist(addP.name)) {
    return
  }
  if(target.innerHTML === "Add"){
    target.innerHTML = "Added"
    target.setAttribute("class", "added");
  } else {
    console.log(target, target.querySelector('.add'))
    target.querySelector('.add').innerHTML = "Added"
    target.querySelector('.add').setAttribute("class", "added");
  }

  const newWishList = [...wishlist, addP]
  window.localStorage.setItem('wishlist', JSON.stringify(newWishList))
  renderWishList(newWishList)
}

export const dragDrop = (gameTarget, game) => {
  gameTarget.draggable = true
  const dropZone = document.querySelector('.right-wrapper')
  dropZone.style.border = '2px dashed #ccc'
  const handleDragEnter = e => {
    if(e.target){
      handleAdd(game, gameTarget.parentElement)
      dropZone.style.border = '0'
      e.target.removeEventListener('dragenter', handleDragEnter)
    }
  }
  dropZone.addEventListener('dragenter', handleDragEnter)
}

export const objectToArray = (object) => Object.keys(object).map((item) => object[item]);

