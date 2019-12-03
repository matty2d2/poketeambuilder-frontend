import React from "react";
import { Link } from 'react-router-dom';
import { Card, Form } from "semantic-ui-react";
import useFlipped from "../hooks/useFlipped";
import "./HealthBar.css";
import "./DisplayCard.css";
import useEditType from "../hooks/useEditType";
import API from "../helpers/API";

const DisplayCard = ({ poke, changeStat }) => {
  const { flipped, toggleFlipped } = useFlipped();
  const {editType, setEditType} = useEditType()

  const renderSprite = poke => {
    const { back_sprite, front_sprite } = poke.pokemon;
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
        <Link 
          to={{
            pathname: '/types',
            state: {type: type.name}
          }}
        >
          <div className={"type-icon" + " " + type.name + ' space'}>{type.name}</div>
        </Link>
        
      </>
    ));
  };


  const handleDoubleClick = (stat) => {
    setEditType(stat)
  }

  const validateField = (val) =>{

      // If x is Not a Number or less than one
      if (isNaN(val) || val < 1) {
        return false
      } else {
        return true
      }
  }

  const updateStat = (stat, val) => {
    const newStatData = {
      id: poke.id,
      stat: stat,
      value: val
    }
    API.updateTeamPokemon(newStatData)
      .then(()=> changeStat(poke.team_id, poke.id, stat, val))
  }

  const handleSubmit = (e, stat) => {
    e.preventDefault();
    const value = e.target[stat].value
    if (validateField(value)){
      updateStat(stat, value)
    }
    
    return setEditType(undefined)
  }

  const handleBlur = () => {
    return setEditType(undefined)
  }

  const showStatOrEdit = (stat) => {  
    if (stat === editType) {
      return (
        <span>
        <form  onSubmit={(e)=>handleSubmit(e, stat)} onBlur={handleBlur}>
          <input className='stat-input' name={`${stat}`} autoFocus/>
        </form>
        </span>
        // <Form onSubmit={(e)=>handleSubmit(e, stat)} onBlur={handleBlur}>
        //     <Form.Field>
        //       <input className='stat-input' name={`${stat}`} autoFocus/>
        //     </Form.Field>
        //   </Form>
      )
    }
    return poke[stat]
  }

  return (
    <>
      <Card className="display-card">
        <div>
          <div className="image" onClick={() => toggleFlipped()}>
            <img src={renderSprite(poke)} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{showPokeName(poke.name)}</div>
          </div>
          <div className="types-content">
            <span className="to-center">{showTypes(poke.pokemon.types)}</span>
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
                <div className="health-bar">
                  <div className="health-bar-glass">
                    <div className="health-bar-fluid"></div>
                  </div>
                </div>
              </div>
              
            <div className="hp"><strong>{poke.hp}/ <span onDoubleClick={()=>handleDoubleClick('hp')}>{showStatOrEdit('hp')}</span></strong></div>
            <br/>
            <div className='stats'>
                <div className='stat'> SPEED: <strong onDoubleClick={()=>handleDoubleClick('speed')}>{showStatOrEdit('speed')}</strong> </div>
                <div className='stat'> SPECIAL DEFENCE: <strong onDoubleClick={()=>handleDoubleClick('special_def')}>{showStatOrEdit('special_def')}</strong></div>
                <div className='stat'> SPECIAL ATTACK: <strong onDoubleClick={()=>handleDoubleClick('special_atk')}>{showStatOrEdit('special_atk')}</strong></div>
                <div className='stat'> DEFENCE: <strong onDoubleClick={()=>handleDoubleClick('defence')}>{showStatOrEdit('defence')}</strong> </div>
                <div className='stat'> ATTACK: <strong onDoubleClick={()=>handleDoubleClick('attack')}>{showStatOrEdit('attack')}</strong> </div>
            </div>
            
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default DisplayCard;
