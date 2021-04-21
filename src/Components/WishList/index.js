import './style.scss'
import {useState, useMemo, useEffect} from 'react';

function ClearBtn({wishList, ...props}) {
  const [check, setCheck] = useState(1)

  useEffect(() => {
    console.log('START')
    setCheck(check + 1)

    return () => {
      console.log('END')
      setCheck(check + 1)
    }

  }, [])

  useEffect(() => {
    console.log('UPDATE', check)
  }, [check])

    return (
        <div className="clearBtn" {...props}>Clear All</div>
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
        {!isEmpty && <ClearBtn wishList={wishList} onClick={() => handleRemoveGame(() => [])}/>}
      </div>
    </div>
  )
}

export default WishList