import './style.scss'

function RenderClearBtn() {
    return (
        <div className="clearBtn">
            Clear All
        </div>
    )
}

function ClearBtn(props) {
    return (
        (!props.isEmpty) ? <RenderClearBtn wishList={props.wishList} /> : null
    );
}

function WishList(props) {
  const {wishList, handleRemoveGame} = props
    const isEmpty = !wishList.length > 0;

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
          <ClearBtn isEmpty={isEmpty} wishList={wishList} onClick={() => handleRemoveGame(wishList)}/>
      </div>
    </div>
  )
}

export default WishList