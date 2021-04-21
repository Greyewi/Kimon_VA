import './style.scss'
import {useMemo} from 'react';

function ClearBtn({isEmpty, ...props}) {
    return (
        (!isEmpty) ? <div className="clearBtn" {...props}>Clear All</div> : null
    );
}

function WishList(props) {
  const {wishList, handleRemoveGame} = props
    const isEmpty = useMemo(() => !wishList.length > 0, [wishList]) //listen instead of send data

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
          <ClearBtn isEmpty={isEmpty} onClick={() => handleRemoveGame(() => [])}/>
      </div>
    </div>
  )
}

export default WishList