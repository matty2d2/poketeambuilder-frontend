import React, { useEffect } from "react";
import { Card } from "semantic-ui-react";
import useFlipped from "../hooks/useFlipped";
import "./HealthBar.css";
import "./DisplayCard.css";

const DisplayCard = ({ poke }) => {
  const { flipped, toggleFlipped } = useFlipped();

  const renderSprite = poke => {
    const { back_sprite, front_sprite } = poke;
    if (flipped) {
      return back_sprite
        ? back_sprite
        : require(`../img/Missingno${this.randomNum(1, 5)}.png`);
      // return back_sprite
    }
    return front_sprite;
  };

  const showPokeName = name => name.charAt(0).toUpperCase() + name.slice(1);

  const showTypes = array => {
    return array.map(type => (
      <>
        <div className={"type-icon" + " " + type.name}>{type.name}</div> &nbsp;
      </>
    ));
  };

  return (
    <>
      <Card className="display-card" onClick={() => toggleFlipped()}>
        <div>
          <div className="image">
            <img src={renderSprite(poke)} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{showPokeName(poke.name)}</div>
          </div>
          <div className="extra content">
            <span className="to-center">{showTypes(poke.types)}</span>
          </div>
        </div>
      </Card>
      <Card className="display-info-card">
        <div>
          <div className="content">
            <div className="header">

              
            <div className="hp"><strong>:L6</strong></div> <br/>
              <div className='hp-container'>
                <span className='hp-text'><strong>HP:</strong></span>
                <div class="health-bar">
                  <div class="health-bar-glass">
                    <div class="health-bar-fluid"></div>
                  </div>
                </div>
              </div>
              
            <div className="hp"><strong>{poke.base_hp}/ &nbsp; {poke.base_hp}</strong></div>
            <br/>
            <div className='stats'>
                <div className='stat'> SPEED: <strong>{poke.base_speed}</strong> </div>
                <div className='stat'> SPECIAL DEFENCE: <strong>{poke.base_special_defence}</strong></div>
                <div className='stat'> SPECIAL ATTACK: <strong>{poke.base_special_attack}</strong></div>
                <div className='stat'> DEFENCE: <strong>{poke.base_defence}</strong> </div>
                <div className='stat'> ATTACK: <strong>{poke.base_attack}</strong> </div>
            </div>
            
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default DisplayCard;
