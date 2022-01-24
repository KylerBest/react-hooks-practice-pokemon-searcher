import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [showFrontSide, setShowFrontSide] = useState(true)
  const {name, hp, sprites} = pokemon

  function onCardClick() {
    return setShowFrontSide(!showFrontSide)
  }

  return (
    <Card>
      <div onClick={onCardClick}>
        <div className="image">
          <img src={showFrontSide ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
