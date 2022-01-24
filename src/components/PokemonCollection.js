import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({cards}) {
  return (
    <Card.Group itemsPerRow={6}>
      {cards.map(card => 
        <PokemonCard
          key={card.id}
          pokemon={card}
        />
      )}
    </Card.Group>
  );
}

export default PokemonCollection;
