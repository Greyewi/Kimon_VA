export const addToWishlist = (wishList, game) => {
  return [...wishList, game];
};

export const removeFromWishlist = (wishList, gameId) => {
  return wishList.filter((f) => f.id !== gameId);
};

const gameAlreadyInWishlist = (gameName) => {
  const wishlist = JSON.parse(window.localStorage.getItem('wishlist'))
  return wishlist.filter(f => f.name === gameName).length > 0
}

function handleAdd(addP) {
  const wishlist = JSON.parse(window.localStorage.getItem('wishlist') || '[]')
  if(gameAlreadyInWishlist(addP.name)) {
    return
  }

  const newWishList = [...wishlist, addP]
  window.localStorage.setItem('wishlist', JSON.stringify(newWishList))
  renderWishList(newWishList)
  renderGameList(window.gameList)
}

export const renderWishList = (wishlist) => {
  const wishlistContainer = document.querySelector(".right-wrapper #item_container");
  wishlistContainer.innerHTML = ''

  wishlist.map((game) => {
    const gameContainer = document.createElement('div')
    const title = document.createElement('span')
    //const price = document.createElement('span')
    const closeBtn = document.createElement('span')
    title.setAttribute("class", "titles-div");
    closeBtn.setAttribute("class", "del");
    title.innerHTML = game.name
    closeBtn.innerHTML = 'x' // TODO add event for remove game
    gameContainer.append(title)
    gameContainer.append(closeBtn)
    wishlistContainer.append(gameContainer)
  })

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

    addP.addEventListener("click", () => {
      handleAdd(item);
    });

    container.append(div);
  });
};

export const objectToArray = (object) => Object.keys(object).map((item) => object[item]);
