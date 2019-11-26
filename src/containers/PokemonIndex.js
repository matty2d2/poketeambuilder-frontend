import React, {useEffect} from "react";
import './PokeIndex.css'
import PokemonCollection from "./PokemonCollection";
import { Search } from "semantic-ui-react";
import _ from "lodash";
import ChosenTeam from "./ChosenTeam";
import FilterColumn from "./FilterColumn";

import useSearch from '../hooks/useSearch'
import usePokemonCollection from '../hooks/usePokemonCollection'
import useChosenTeam from '../hooks/useChosenTeam'
import API from "../helpers/API";

const PokemonPage = () => {
  const {pokemon, setPokemon} = usePokemonCollection()
  const {setSearch, filterPokemon} = useSearch()
  const {chosenTeam, addToTeam, removeFromTeam, resetTeam} = useChosenTeam()

  useEffect(
    () => {
      API.getPokemon()
      .then(data => setPokemon(data))
    },
    []
  )

  // useEffect(
  //   () => {
  //     fetch("http://localhost:3000/stealdata")
  //   },
  //   []
  // )
  
  const addPokeToTeam = (id) => addToTeam(id)

  const removePokeFromTeam = (idx) => removeFromTeam(idx)
  
  const onSearchChange = (e, { value }) => setSearch(value)

  const filterByGen = () => {

  }

  const filteredPokemon = filterPokemon(pokemon)

  const pokemonTeam = () => {
    const team = chosenTeam.map(pokeId => {
      if (pokeId === 0) return 0
      return [...pokemon].find(poke => poke.id === pokeId)
    })
    return team
  }

  return (
    <>
      <div className="create-team-page-top">
        <ChosenTeam team={pokemonTeam()} removeFromTeam={removePokeFromTeam} resetTeam={resetTeam} teamIds={chosenTeam}/>
      </div>

      <div className="create-team-page-bot">
        <div className="filter-column">
          <h1>Filter Search</h1>
          <Search
            onSearchChange={_.debounce(onSearchChange, 500)}
            showNoResults={false}
          />
          <br/>
          <FilterColumn/>
        </div>

        <div className="poke-collection">
          <PokemonCollection
            pokemon={filteredPokemon}
            addToTeam={addPokeToTeam}
          />
        </div>
      </div>
    </>
  );

}

export default PokemonPage;
