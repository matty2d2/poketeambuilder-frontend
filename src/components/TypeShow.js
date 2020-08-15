import React, { useEffect } from "react";
import useMoves from "../hooks/useMoves";
import API from "../helpers/API";
import useTypeName from "../hooks/useTypeName";
import "./TypesShow.css";
import "../Types.css";
import { Card, Image } from "semantic-ui-react";
import usePokemonCollection from "../hooks/usePokemonCollection";
import { Link } from "react-router-dom";
import useOffence from "../hooks/useOffence";
import useDefence from "../hooks/useDefence";
// import { refPropType } from "@stardust-ui/react-component-ref";
import TypeShowPokeCard from "./TypeShowPokeCard";


const TypeShow = ({ history }) => {
  const { moves, setMoves } = useMoves();
  const { typeName, setTypeName } = useTypeName();
  const { pokemon, setPokemon } = usePokemonCollection();
  const { offence, setOffence } = useOffence();
  const { defence, setDefence } = useDefence();
  

  useEffect(() => {
    const selectType = history.location.state
      ? history.location.state.type
      : "normal";
    API.getTypeData(selectType).then(data => {
      setOffence(data.type.offence);
      setDefence(data.type.defence);
      setMoves(data.type.moves);
      setTypeName(data.type.name);
      setPokemon(data.type.pokemon);
    });
  }, [history.location.state, setDefence, setOffence, setMoves, setTypeName, setPokemon]);

  const typeAgainst = effect => {
    switch (effect) {
      case "super effective":
        const array = offence.filter(
          item => item.damage_relation.effectiveness === effect
        );
        return array.map(i => i.defence_type);
      case "not very effective":
        const array2 = offence.filter(
          item => item.damage_relation.effectiveness === effect
        );
        return array2.map(i => i.defence_type);
      default:
        const array3 = offence.filter(
          item => item.damage_relation.effectiveness === "immune"
        );
        return array3.map(i => i.defence_type);
    }
  };

  const typeRecieve = effect => {
    switch (effect) {
      case "super effective":
        const array = defence.filter(
          item => item.damage_relation.effectiveness === effect
        );
        return array.map(i => i.attack_type);
      case "not very effective":
        const array2 = defence.filter(
          item => item.damage_relation.effectiveness === effect
        );
        return array2.map(i => i.attack_type);
      default:
        const array3 = defence.filter(
          item => item.damage_relation.effectiveness === "immune"
        );
        return array3.map(i => i.attack_type);
    }
  };

  const displayMoveName = name => {
    const a = name;
    const b = a.replace("--special", "");
    const c = b.replace("--physical", "");
    const d = c.replace(/-/g, " ");

    return d.charAt(0).toUpperCase() + d.slice(1);
  };

  // const showPokeName = (name) => {
  //   const init = name.charAt(0).toUpperCase() + name.slice(1)

  //   if (init.slice(-2) === '-m') return init.replace('-m', '♂')
  //   if (init.slice(-2) === '-f') return init.replace('-f', '♀')
  //   if (init.slice(-10) === '-incarnate') return init.replace('-incarnate', '')
  //   if (init.slice(-8) === '-average') return init.replace('-average', '')
  //   if (init.slice(-8) === '-altered') return init.replace('-altered', '')
  //   if (init.slice(-9) === '-standard') return init.replace('-standard', '')
  //   if (init.slice(-9) === '-ordinary') return init.replace('-ordinary', '')
  //   if (init.slice(-7) === '-normal') return init.replace('-normal', '')
  //   // if (init.slice(-5) === '-land') return init.replace('-land', '')
  //   if (init.slice(-12) === '-red-striped') return init.replace('-red-striped', '')
  //   if (init.slice(-7) === '-shield') return init.replace('-shield', '')
  //   if (init.slice(-5) === '-male') return init.replace('-male', '')
  //   return init
  // }

  const showTypes = array => {
    return array.map(type => (
      <Link
        key={type.id}
        to={{
          pathname: "/types",
          state: { type: type.name }
        }}
      >
        <div className={`type-icon ${type.name} space`}>
          {type.name}
        </div>
      </Link>
    ));
  };

  

  return (
    <div>
      <h1>
        <div className={`large-type-icon ${typeName}`}>
          {" "}
          <b>{typeName}</b>
        </div>{" "}
        &nbsp;
      </h1>

      <div className="main-container">
        <div className="moves-show">
          <h3>Moves</h3>
          <div className="moves-container">
            {moves.map(move => (
              <div key={move.name} className="move-card">
                <Card key={move.id} className='move'>
                  <div className="move-card-container">
                    <div className="move-card dmg-icon">
                      <Image
                        src={require("../img/dmg-categories/" +
                          move.damage_class +
                          "-icon.png")}
                        size="mini"
                      />
                    </div>
                    <div className="move-card move-desc">
                      <Card.Description>
                        {displayMoveName(move.name)}
                      </Card.Description>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="pokemon-show">
          <h3>Pokemon</h3>
          <div className="pokes-container">
            {pokemon.map(poke => (
              <TypeShowPokeCard key={poke.name} poke={poke}/>
              // <Card key={poke.id} className="poke-card">
              //   <div className="poke-container">
              //     <div className="poke-image">
              //       <img src={renderSprite(poke)} alt="oh no!" />
              //     </div>
              //     <div className="poke-types">{showTypes(poke.types)}</div>

              //     <div>
              //       <Card.Description>
              //         {showPokeName(poke.name)}
              //       </Card.Description>
              //     </div>
              //   </div>
              // </Card>

            ))}
          </div>
        </div>

        <div>
          <h3>Chart</h3>
          <div className="chart-container">
            <div className="type-chart">
              <div className="my-column">
                <h4>Offensive</h4>

                <div className="power-types">
                  <div className="description-header">
                    <p>
                        Power
                    </p>
                    <p>
                        Types
                    </p>
                  </div>
                  <div className="type-comparison-div">
                    <div className="power-lvl two-times">
                      <p>2x</p>
                    </div>
                    <div className="power-atr">
                      {showTypes(typeAgainst("super effective"))}
                    </div>
                  </div>
                  <div className="type-comparison-div">
                    <div className="power-lvl half-times">
                      <p>½x</p>
                    </div>
                    <div className="power-atr">
                      {showTypes(typeAgainst("not very effective"))}
                    </div>
                  </div>
                  <div className="type-comparison-div">
                    <div className="power-lvl zero-times">
                      <p>0x</p>
                    </div>
                    <div className="power-atr">
                      {showTypes(typeAgainst("immune"))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-column">
                <h4>Defensive</h4>
                <div className="power-types">
                  <div className="description-header">
                    <p>
                        Power
                    </p>
                    <p>
                        Types
                    </p>
                  </div>
                  <div className="type-comparison-div">
                    <div className="power-lvl half-times">
                      <p>½x</p>
                    </div>
                    <div className="power-atr">
                      {showTypes(typeRecieve("not very effective"))}
                    </div>
                  </div>
                  <div className="type-comparison-div">
                    <div className="power-lvl two-times">
                      <p>2x</p>
                    </div>
                    <div className="power-atr">
                      {showTypes(typeRecieve("super effective"))}
                    </div>
                  </div>
                  <div className="type-comparison-div">
                    <div className="power-lvl zero-times">
                      <p>0x</p>
                    </div>
                    <div className="power-atr">
                      {showTypes(typeRecieve("immune"))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeShow;
