import React, { useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import API from "../helpers/API";
import useTeams from "../hooks/useTeams";
import useHidden from "../hooks/useHidden";
import useSelectedTeam from "../hooks/useSelectedTeam";
import './PokeIndex.css'
import DisplayCard from "../components/DiplayCard";

const MyTeamsIndex = props => {
  const { selectedTeam, setSelectedTeam } = useSelectedTeam();
  const { teams, setTeams, removeTeam, updateStat } = useTeams();
  const { hidden, switchHidden, setHidden } = useHidden();

  useEffect(() => {
    setSelectedTeam(undefined);
    API.getTeams().then(data => setTeams(data));
  }, []);

  const showTeamView = id => {
    setSelectedTeam(id);
    setHidden('');
  };

  const renderTeams = () => {
    return teams.map(team => (
      <Card className={checkSelected(team)} color={(team.id===selectedTeam)?'blue':'white'} key={team.id} onClick={() => showTeamView(team.id)}>
        <div>{team.name}</div>

        <div className='icons-container'>
        {team.team_pokemons.map(tp=>
          <span className="image-icon">
            <img src={tp.pokemon.front_sprite} alt="oh no!" />
          </span>
        )}
        </div>
        
      </Card>
    ))
  }

  const checkSelected = (team) => {
    if (team.id === selectedTeam) return 'team-cards the-selected'
    return 'team-cards'
  }

  const renderTeamsHomeView = () => {
    if (teams.length === 0) {
      return "You have no Teams! Go to Create Team to make one.";
    } else {
      return (
        <div>
        <h1>Teams</h1>
        {renderTeams()}
        </div>
      );
    }
  };

  const changeStat = (teamId, pokemonId, stat, value) => {
    updateStat(teamId, pokemonId, stat, value)
  }

  const deleteTeam = (teamId) => {
    API.deleteTeam({team_id: teamId})
        .then(data =>  {
            switchHidden()
            setSelectedTeam(undefined)
            removeTeam(teamId)
        })
  }

  const renderTeamDisplay = () => {
    const team = teams.find(team => team.id === selectedTeam);
    return (
      <>
        <div className='top-teams'>
          {renderTeams()}
        </div>

        <div>
          <h1 className='team-name'>{team.name}</h1>
          <Card.Group itemsPerRow={2} className='team-group'>
              {team.team_pokemons.map((poke) => (
                  <DisplayCard key={poke.id} poke={poke} changeStat={changeStat}/>
              ))}
          </Card.Group>
        <div><Button onClick={() => deleteTeam(team.id)}>Delete this team</Button></div>
      </div>
      </>
    );
  };

  return <div className='team-container'>{hidden ? renderTeamsHomeView() : renderTeamDisplay()}</div>;
};

export default MyTeamsIndex;
