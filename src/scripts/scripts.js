export const renderGameList = data => {
    const container = document.querySelector('.left-wrapper')
    container.innerHTML = '';
    data.map(item => {
        let div = document.createElement('div')
        let imagediv = document.createElement('div')
        let addP = document.createElement('p')
        let nameP = document.createElement('p')
        let priceP = document.createElement('p')

        imagediv.setAttribute('class', 'imagebox')
        addP.setAttribute('class', 'add')
        nameP.setAttribute('class', 'title')
        priceP.setAttribute('class', 'price')

        if (item.name) {
            nameP.innerHTML = item.name
        } else {
            nameP.innerHTML = "Game"
        }
        
        if(item.price) {
            priceP.innerHTML = `${item.price} $`
        } else {
            priceP.innerHTML = '0 $'
        }

        addP.innerHTML = 'Add'

        var img = new Image();
        img.src = item.cover;

        img.onload = function() {
            imagediv.setAttribute('style', `background-image: url('${item.cover}')`)
        }

        img.onerror = function() {
            imagediv.setAttribute('style', "background-image: url('https://icon-library.com/images/file-icon-size/file-icon-size-19.jpg')")
            imagediv.style.backgroundRepeat = "no-repeat";
            imagediv.style.backgroundPosition = "center";
        }
                
        div.append(imagediv)
        div.append(addP)
        div.append(nameP)
        div.append(priceP)

        container.append(div)
    })
}

