export const addToWishlist = (wishList, game) => {
  return [...wishList, game];
};

export const removeFromWishlist = (wishList, gameId) => {
  return wishList.filter((f) => f.id !== gameId);
};

var sum = 0;
var hasPrice = false;
let p = document.createElement("p");

function clearWrapper() {
  document.querySelector('.right-wrapper > div:nth-child(2)').remove()
  document.querySelector('.right-wrapper > div:nth-child(2)').remove()
  document.querySelectorAll('.added').forEach((element) => {
    element.setAttribute('class', 'add')
    element.innerHTML = "Add"
  })
}

function handleClear(el) {
  let clearList = document.createElement('p')
  clearList.innerHTML = "Clear List"
  clearList.style.color = "rgb(21, 196, 240)"
  clearList.style.fontSize = 0.8 + "em"
  clearList.style.textDecoration = "underline"
  clearList.style.marginTop = 5 + "px"
  clearList.addEventListener('click', () => {clearWrapper()})
  el.append(clearList)
}

function handlePrice(price) {
  let priceBox = document.querySelector(".right-wrapper > div > p");
  let div = document.createElement("div");
  const wishlist = document.querySelector(".right-wrapper");
  p.innerHTML = "Sum: ";
  p.style.marginTop = 15 + "px";
  let span = document.createElement("span");
  span.innerHTML = price;
  span.setAttribute("style", "color: rgb(21, 196, 240)");
  p.append(span);
  p.innerHTML += " $";

  if (!hasPrice) {
    div.append(p);
  } 
  else {
    priceBox.innerHTML = "Sum: ";
    let span = document.createElement("span");
    span.innerHTML = price;
    span.setAttribute("style", "color: rgb(21, 196, 240)");
    p.append(span);
    p.innerHTML += " $";
  }

  wishlist.append(div);

  if (!hasPrice) {
    handleClear(p)
    hasPrice = true;
  }
  else {
    handleClear(priceBox)
  }
}

var hasTitles = false;

function handleAdd(addP) {
  const wishlist = document.querySelector(".right-wrapper");
  let titles = document.querySelector(".titles-div");

  addP.innerHTML = "Added";
  addP.setAttribute("class", "added");

  const title = addP.parentElement.querySelector(".title").innerHTML;
  const price = parseInt(
    addP.parentElement.querySelector(".price").innerHTML.replaceAll("$", ""),
    10
  );
  sum += price;

  let div = document.createElement("div");
  div.setAttribute("class", "titles-div");

  div.append(title);

  if (!hasTitles) {
    wishlist.append(div);
    hasTitles = true;
  } else {
    titles.append(div);
  }

  handlePrice(sum);
}

export const renderGameList = (data) => {
  const container = document.querySelector(".left-wrapper");
  container.innerHTML = "";

  data.map((item) => {
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

    addP.innerHTML = "Add";

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
      handleAdd(addP);
    });

    container.append(div);
  });
};

export const objectToArray = (object) =>
  Object.keys(object).map((item) => object[item]);
