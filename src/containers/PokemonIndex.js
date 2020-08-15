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
import useGenFilter from "../hooks/useGenFilter";
import useTypeFilter from "../hooks/useTypeFilter";
import useLoading from "../hooks/useLoading";


const PokemonPage = () => {
  const {pokemon, setPokemon} = usePokemonCollection()
  const {setSearch, filterPokemon} = useSearch()
  const {chosenTeam, addToTeam, removeFromTeam, resetTeam} = useChosenTeam()
  const {genFilter, setGenFilter} = useGenFilter()
  const {typeFilter, setTypeFilter} = useTypeFilter()
  const { loading, turnOffLoading } = useLoading()

  useEffect(
    () => {
      if (pokemon.length === 721) return
      API.getPokemon()
      .then(data => {
        setPokemon(data)
        turnOffLoading()
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  
  const addPokeToTeam = (id) => addToTeam(id)

  const removePokeFromTeam = (idx) => removeFromTeam(idx)
  
  const onSearchChange = (e, { value }) => setSearch(value)

  const filterByGen = (array) => {
    if (genFilter === 0) return array
    return [...array].filter(poke=> poke.generation === genFilter)
  }

  const filterByType = () => {
    if (typeFilter === 0) return pokemon
    
    return [...pokemon].filter(poke=> poke.types.map(type=> type.id).includes(typeFilter))
  }

  const filteredPokemon = filterPokemon(filterByGen(filterByType()))
  

  const pokemonTeam = () => {
    const team = chosenTeam.map(pokeId => {
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
          <FilterColumn setGenFilter={setGenFilter} setTypeFilter={setTypeFilter}/>
        </div>

        <div className="poke-collection">
          <PokemonCollection
            pokemon={filteredPokemon}
            addToTeam={addPokeToTeam}
            loading={loading}
          />
        </div>
      </div>
    </>
  );

}

export default PokemonPage;
