import React from "react";
import { Card } from "semantic-ui-react";

class ChosenTeam extends React.Component {

  render(){
      const array = [1,2,3,4,5,6]
    return (
      <div className="ui segment inverted red selected-poke-team">
        <div className="ui six column grid poke-team-container">
          <div className="row selected-poke-team-row">
            {array.map((num)=>
                <Card 
                className='chosen-poke' 
                key={num} 
                color='red'>
                    <div className='selected-poke-img'>
                        <img src={require(`../img/Missingno2.png`)} alt="oh no!"/>
                    </div>
                    <Card.Header>Name</Card.Header>
                </Card>
              )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default ChosenTeam;