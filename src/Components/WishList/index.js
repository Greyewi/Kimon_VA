import './style.scss'

function WishList(props) {
  const {wishList, handleRemoveGame} = props

  return (
    <div className="right-wrapper">
      <div>
        <div><h2>WISHLIST</h2></div>
        <section>
          {wishList.map((game, key) => <div key={key}>
            {game.name}{' '}{game.price}$ <span onClick={() => handleRemoveGame((prevState) => prevState.filter(f => f.name !== game.name))}>X</span>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default WishList