import {handleAdd, gameAlreadyInWishlist, clearWrapper} from './utils'

export const renderWishList = (wishlist = []) => {
  const wishlistContainer = document.querySelector(".right-wrapper #item_container");
  wishlistContainer.innerHTML = ''
  let count = 0

  wishlist.map((game) => {
    const gameContainer = document.createElement('div')
    const title = document.createElement('span')
    //const price = document.createElement('span')
    const closeBtn = document.createElement('span')
    title.setAttribute("class", "titles-div");
    closeBtn.setAttribute("class", "del");
    title.innerHTML = game.name
    //price.innerHTML = game.price
    closeBtn.innerHTML = 'x' // TODO add event for remove game
    gameContainer.append(title)
    //gameContainer.append(price)
    gameContainer.append(closeBtn)
    wishlistContainer.append(gameContainer)
    count += game.price ? game.price : 0
  })

  if(wishlist.length){
    const countElement = document.createElement('div')
    countElement.setAttribute("class", "count")
    countElement.innerHTML = `Count: <span class="price">${count}</span>$`
    wishlistContainer.append(countElement)

    const clearWishlist = document.createElement('span')
    clearWishlist.setAttribute("class", "clear-wishlist")
    clearWishlist.innerHTML = 'Clear all'

    clearWishlist.addEventListener('click', () => {
      window.localStorage.removeItem('wishlist')
      renderWishList()
      clearWrapper()
    })
    wishlistContainer.append(clearWishlist)
  }
}

export const renderGameList = (data) => {
  const container = document.querySelector(".left-wrapper");
  container.innerHTML = "";

  data.map(item => {
    let div = document.createElement("div");
    let imagediv = document.createElement("div");
    let addP = document.createElement("p");
    let nameP = document.createElement("p");
    let priceP = document.createElement("p");

    imagediv.setAttribute("class", "imagebox");
    addP.setAttribute("class", "add");
    nameP.setAttribute("class", "title");
    priceP.setAttribute("class", "price");

    if (item.name) {
      nameP.innerHTML = item.name;
    } else {
      nameP.innerHTML = "Game";
    }

    if (item.price) {
      priceP.innerHTML = `${item.price} $`;
    } else {
      priceP.innerHTML = "0 $";
    }

    if(gameAlreadyInWishlist(item.name)) {
      addP.innerHTML = "Added";
      addP.setAttribute("class", "added");
    } else {
      addP.innerHTML = "Add";
    }

    var img = new Image();
    img.src = item.cover;

    img.onload = function () {
      imagediv.setAttribute("style", `background-image: url('${item.cover}')`);
    };

    img.onerror = function () {
      imagediv.setAttribute(
        "style",
        "background-image: url('https://icon-library.com/images/file-icon-size/file-icon-size-19.jpg')"
      );
      imagediv.style.backgroundRepeat = "no-repeat";
      imagediv.style.backgroundPosition = "center";
    };

    div.append(imagediv);
    div.append(addP);
    div.append(nameP);
    div.append(priceP);

    addP.addEventListener("click", (e) => {
      handleAdd(item, e);
    });

    container.append(div);
  });
};