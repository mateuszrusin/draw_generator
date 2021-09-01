import React from "react";
import Game from "./game";

const Games = ({games}) => games.map((game, index) => (
    <Game game={game} key={index} />
))

export default Games