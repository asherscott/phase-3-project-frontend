import "./DisplayGame.css";

function DisplayGame({ game, setSelected, setGame, setGameList , gameList}) {
  // Displays additional info about a game instance

  function avgRating() {
    // const ratingArray = game.review.map((review) => review.rating);
    // ratingArray.map
  }

  const deleteGame = (gameId) => {
      fetch(`http://localhost:9292/games/${gameId}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' }
      })
      const newGameList = gameList.filter(game => game.id !== gameId)
      setGameList(newGameList)
      setGame(null)
      setSelected(1)
    }
  

  return (
    <div className="gameInfo">
      <div className="gameCard">
        <h3>{game.name}</h3>
        <p>
          <span>Genre: </span>
          {game.genre}
        </p>
        <p>
          <span>Developer: </span>
          {game.developer}
        </p>
        <p>
          <span>Platform: </span>
          {game.platform}
        </p>
        <p>
          <span>Release: </span>
          {game.release}
        </p>
        <div className="desription">
          <br />
          <p>{game.description}</p>
        </div>
        <button onClick={()=>deleteGame(game.id)}>hi</button>
      </div>
      <img className="gameImg" src={game.image} alt={ game.name + " photo"} />
    </div>
  );
}

export default DisplayGame;
