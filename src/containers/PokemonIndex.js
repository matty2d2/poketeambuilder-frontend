import React from "react";
import './PokeIndex.css'
import PokemonCollection from "./PokemonCollection";
import { Search } from "semantic-ui-react";
import _ from "lodash";
import ChosenTeam from "./ChosenTeam";
import FilterColumn from "./FilterColumn";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: undefined
  };

  componentDidMount() {
    // fetch('http://localhost:3000/stealdata')
    //   .then(resp => resp.json())

    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          pokemon: json.pokemon
        })
      );
  }

  onSearchChange = (e, { value }) => {
    this.setState({
      search: value
    });
  };

  handleSearchChange = e => {
    e.persist();
    this.func = this.func || _.debounce(this.onSearchChange, 500);
    this.func(e);
  };

  render() {
    const { pokemon, search } = this.state;
    return (
      <>
        <div className="create-team-page-top">
          <ChosenTeam/>
        </div>

        <div className="create-team-page-bot">
          <div className="filter-column">
            <h1>Filter Search</h1>
            <Search
              onSearchChange={_.debounce(this.onSearchChange, 500)}
              showNoResults={false}
            />
            <br/>
            <FilterColumn/>
          </div>

          <div className="poke-collection">
            <PokemonCollection
              pokemon={
                search
                  ? pokemon.filter(poke => poke.name.includes(search))
                  : pokemon
              }
            />
          </div>
        </div>
      </>
    );
  }
}

export default PokemonPage;
