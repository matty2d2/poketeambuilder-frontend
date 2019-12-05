import React, {useEffect} from "react";
import ChosenPokemonCard from "../components/ChosenPokemonCard";
import { Form, Button } from "semantic-ui-react";
import API from "../helpers/API";
import useHidden from "../hooks/useHidden";
import useUsername from "../hooks/useUsername";

const ChosenTeam = ({ team, removeFromTeam, resetTeam, teamIds }) => {
  const { hidden, switchHidden, setHidden } = useHidden();
  const {username, setUsername} = useUsername();
  
  const handleClick = (e) => {
    if (teamIds.length !== 6) return;

    if (hidden === false){
      // const form = document.getElementById('create-team-form')
      // debugger
      // form.submit()
      switchHidden();
    }else{
      switchHidden();
    } 
  };

  useEffect(
    ()=> {
      if (teamIds === 6){
        return setHidden(false)
      }else {
        return setHidden(true)
      }
    },
    [teamIds, setHidden]
  )

  const toggleVal = () => {
    if (teamIds.length === 6) return false;
    return true
  }

  const saveTeam = (e) => {
    e.preventDefault();
    if (teamIds.length !== 6) return;

    e.target.reset()

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
      <div className="ui segment inverted selected-poke-team">
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
          <Form autoComplete='off' onSubmit={saveTeam} id='create-team-form'>
            <Form.Field>
              <label>Team Name</label>
              <input required={true} name="username" onChange={handleChange}/>
              {/* <Button onClick={saveTeam}>Save</Button> */}
              {/* <input type="submit" id="submit-form" class="hidden" /> */}
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
