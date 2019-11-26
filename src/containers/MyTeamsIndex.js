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
  const { teams, setTeams, removeTeam } = useTeams();
  const { hidden, switchHidden } = useHidden();

  useEffect(() => {
    setSelectedTeam(undefined);
    API.getTeams().then(data => setTeams(data));
  }, []);

  const showTeamView = id => {
    setSelectedTeam(id);
    switchHidden();
  };

  const renderTeamsView = () => {
    if (teams.length === 0) {
      return "You have no Teams! Go to Create Team to make one.";
    } else {
      return teams.map(team => (
        <Card key={team.id} onClick={() => showTeamView(team.id)}>
          <div>{team.name}</div>
        </Card>
      ));
    }
  };

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
        <Card.Group itemsPerRow={2} className='team-group'>
            {team.pokemons.map((poke, idx) => (
                <DisplayCard key={idx} poke={poke}/>
            ))}
        </Card.Group>
        <div><Button onClick={() => deleteTeam(team.id)}>Delete this team</Button></div>
        
      </>
    );
  };

  return <div>{hidden ? renderTeamsView() : renderTeamDisplay()}</div>;
};

export default MyTeamsIndex;
