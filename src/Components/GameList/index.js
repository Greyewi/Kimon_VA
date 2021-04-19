import './style.scss'
import gamelist from "../../data/gamelist"

export function GameList() {
    return (
        <div className="left-wrapper">
            {gamelist().map((game, key) => {
                return (
                    <div>
                        <div className="imagebox">
                            <img src={game.cover} alt={game.name} />}
                        </div>
                        <p className="add">Add</p>
                        <p className="title">{game.name}</p>
                        <p className="price">{game.price}$</p>
                    </div>
                );
            })}
        </div>
    );
}

export default GameList;


