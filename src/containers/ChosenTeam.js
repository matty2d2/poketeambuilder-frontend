import React from "react";
import ChosenPokemonCard from '../components/ChosenPokemonCard'

const ChosenTeam = ({team, removeFromTeam}) => {

  return (
    <div className="ui segment inverted red selected-poke-team">
      <div className="ui six column grid poke-team-container">
        <div className="row selected-poke-team-row">
          {Array(6).fill().map((_, idx)=>
              <ChosenPokemonCard key={idx} {...team[idx]} removeFromTeam={()=>removeFromTeam(idx)}/>
            )}
        </div>
      </div>
    </div>
  );
};

export default ChosenTeam;