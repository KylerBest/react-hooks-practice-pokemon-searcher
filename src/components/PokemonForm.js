import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {
  const [addPokemon, setAddPokemon] = useState({})
  function handleSubmit(e) {
    e.preventDefault()
    console.log("submitting form...")
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addPokemon)
    })
      .then(r => r.json())
      .then(console.log)
  }

  function handleFormChange(e) {
    if(e.target.name.includes('Url')) {
      setAddPokemon({
        ...addPokemon, 
        sprites: {...addPokemon.sprites, 
          [e.target.name.split('Url')[0]]: e.target.value}
        })
    }
    else {
      setAddPokemon({
        ...addPokemon,
        [e.target.name]: e.target.value
      })
    }
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            onChange={handleFormChange} 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
          />
          <Form.Input 
            onChange={handleFormChange}
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
          />
          <Form.Input
            onChange={handleFormChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleFormChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
