import './style.css'
import gamelist from "../../data/gamelist"

function GameList() {
  console.log(gamelist())

  return (
    <div className="gamelist__container">
      {/*{gamelist().map((game, key) => {*/}
      {/*  return <div key={key}>{game.name}</div>*/}
      {/*})}*/}
    </div>
  );
}

export default GameList;
