import games from "../../assets//Data";
import "./GameListCard.scss";

const GameListCard = () => {
  const listOfGames = games.map((game) => {
    return game.name + "/" + " " + " ";
  });
  console.log(listOfGames);
  return (
    <div>
      <p className="list">{listOfGames}</p>
    </div>
  );
};

export default GameListCard;
