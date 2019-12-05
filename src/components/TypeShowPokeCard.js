import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import '../Types.css'
import useFlipped from "../hooks/useFlipped";

const TypeShowPokeCard = ({ poke }) => {
    const { flipped, toggleFlipped } = useFlipped();

    const showPokeName = (name) => {
        const init = name.charAt(0).toUpperCase() + name.slice(1)

        if (init.slice(-2) === '-m') return init.replace('-m', '♂')
        if (init.slice(-2) === '-f') return init.replace('-f', '♀')
        if (init.slice(-10) === '-incarnate') return init.replace('-incarnate', '')
        if (init.slice(-8) === '-average') return init.replace('-average', '')
        if (init.slice(-8) === '-altered') return init.replace('-altered', '')
        if (init.slice(-9) === '-standard') return init.replace('-standard', '')
        if (init.slice(-9) === '-ordinary') return init.replace('-ordinary', '')
        if (init.slice(-7) === '-normal') return init.replace('-normal', '')
        // if (init.slice(-5) === '-land') return init.replace('-land', '')
        if (init.slice(-12) === '-red-striped') return init.replace('-red-striped', '')
        if (init.slice(-7) === '-shield') return init.replace('-shield', '')
        if (init.slice(-5) === '-male') return init.replace('-male', '')
        return init
    }

  const showTypes = array => {
    return array.map(type => (
      <Link
        to={{
          pathname: "/types",
          state: { type: type.name }
        }}
      >
        <div className={"type-icon" + " " + type.name + " space"}>
          {type.name}
        </div>
      </Link>
    ));
  };

  const renderSprite = poke => {
    const { back_sprite, front_sprite } = poke;
    if (flipped) {
      return (back_sprite)
        ? back_sprite
        : require(`../img/Missingno${this.randomNum(1, 5)}.png`);
    }
    return front_sprite;
  };

    return (
        <Card className="poke-card">
        <div className="poke-container">
          <div className="poke-image" onClick={() => toggleFlipped()}>
            <img src={renderSprite(poke)} alt="oh no!" />
          </div>
          <div className="poke-types">{showTypes(poke.types)}</div>

          <div>
            <Card.Description>
              {showPokeName(poke.name)}
            </Card.Description>
          </div>
        </div>
      </Card>
        
    )
}

export default TypeShowPokeCard
