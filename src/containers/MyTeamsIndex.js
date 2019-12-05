import React, { useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import { PulseLoader } from 'react-spinners';
import API from "../helpers/API";
import useTeams from "../hooks/useTeams";
import useHidden from "../hooks/useHidden";
import useSelectedTeam from "../hooks/useSelectedTeam";
import './PokeIndex.css'
import DisplayCard from "../components/DiplayCard";
import useLoading from "../hooks/useLoading";



const MyTeamsIndex = props => {
  const { selectedTeam, setSelectedTeam } = useSelectedTeam();
  const { teams, setTeams, removeTeam, updateStat } = useTeams();
  const { hidden, switchHidden, setHidden } = useHidden();
  const { loading, turnOffLoading } = useLoading()

  useEffect(() => {
    setSelectedTeam(undefined);
    API.getTeams().then(data => {
      turnOffLoading()
      setTeams(data.teams)
    });
  }, []);

  const showTeamView = id => {
    setSelectedTeam(id);
    setHidden('');
  };

  const renderTeams = () => {
    return teams.map(team => (
      <Card className={checkSelected(team)} color={(team.id===selectedTeam)?'blue':null} key={team.id} onClick={() => showTeamView(team.id)}>
        <div>{team.name}</div>

        <div className='icons-container'>
        {team.team_pokemons.map(tp=>
          <span className="image-icon" key={tp.id}>
            <img src={tp.front_sprite} alt="oh no!" />
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
        <>
          <h1>Teams</h1>
          <div className='home-teams'>
            {renderTeams()}
          </div>
        </>
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
                  <DisplayCard key={poke.id} poke={poke} changeStat={changeStat} teamId={team.id}/>
              ))}
          </Card.Group>
        <div><Button onClick={() => deleteTeam(team.id)}>Delete this team</Button></div>
      </div>
      </>
    );
  };

  const chooseRender = () => {
    if (loading){
      return (
        <PulseLoader
          sizeUnit={"px"}
          size={50}
          color={'#123abc'}
          loading={loading}
        />
      )
    }else{
      return (hidden) ? renderTeamsHomeView() : renderTeamDisplay()
    }
  }

  return (
  <div className='team-container'>
    { chooseRender() }
  </div>
  );
};

export default MyTeamsIndex;
