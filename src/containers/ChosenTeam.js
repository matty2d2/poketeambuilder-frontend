import React, {useEffect} from "react";
import ChosenPokemonCard from "../components/ChosenPokemonCard";
import { Form, Button } from "semantic-ui-react";
import API from "../helpers/API";
import useHidden from "../hooks/useHidden";
import useUsername from "../hooks/useUsername";

const ChosenTeam = ({ team, removeFromTeam, resetTeam, teamIds }) => {
  const { hidden, switchHidden } = useHidden();
  const {username, setUsername} = useUsername();
  
  const handleClick = () => {
    if (teamIds.length !== 6) return;

    switchHidden();
  };

  const toggleVal = () => {
    if (teamIds.length === 6) return false;
    return true
  }

  const saveTeam = (e) => {
    if (teamIds.length !== 6) return;

    e.target.form.reset()
    const data = {pokemon_array: teamIds, name: username}
    API.makeTeam(data).then(resetTeam).then(switchHidden);
  };

  const showInput = () => {
    if (hidden) return "team-form-hidden";
    return "team-form";
  };

  const handleChange = event => setUsername(event.target.value)

  return (
    <div>
      <div className="ui segment inverted red selected-poke-team">
        <div className="ui six column grid poke-team-container">
          <div className="row selected-poke-team-row">
            {Array(6)
              .fill()
              .map((_, idx) => (
                <ChosenPokemonCard
                  key={idx}
                  {...team[idx]}
                  removeFromTeam={() => removeFromTeam(idx)}
                />
              ))}
          </div>
        </div>

        <div className={showInput()}>
          <Form>
            <Form.Field>
              <label>Team Name</label>
              <input name="username" onChange={handleChange}/>
              <Button onClick={saveTeam}>Save</Button>
            </Form.Field>
          </Form>
        </div>

        <div className='make-button'>
        <Button onClick={handleClick} disabled={toggleVal()}>Make Team <i>(min 6)</i></Button>
        </div>
        
      </div>
    </div>
  );
};

export default ChosenTeam;
