import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(setCards)
  }, [setCards])

  const shownCards = cards.filter(card => card.name.includes(search))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection cards={shownCards} />
    </Container>
  );
}

export default PokemonPage;
