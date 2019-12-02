import React, { useEffect } from "react";
import { Image } from "semantic-ui-react";
import './TypeCharts.css';
import Types from '../helpers/Types-list'
import '../Types.css'

const TypeChartsPage = props => {
  
    const renderCharts = () => {
        return Object.keys(Types).map(type => 
            <>
            <div className='chart-container'>
                <img className='chart-image' src={require(`../img/` + Types[type] + `-types.png`)} alt=""/>
            </div>
            <br/>
            </>
        )
    } 

    return(
        <>
        <div className='chart-info'>
            <h1>Chart info</h1>
            <p>The huge chart here shows the strengths and weaknesses of each dual-type, along with the number of Pokémon have that type. The type of the attack move is along the top row. Follow that down to the corresponding row to see how effective it is.</p>
            <p>The total number of Pokémon with each type are listed.</p>

            <h2>Chart key</h2>
            <div> <span class="type-fx-icon type-fx-0">0</span> No effect (0%)</div>
            <div> <span class="type-fx-icon type-fx-25">¼</span> Resistant (25%)</div>
            <div> <span class="type-fx-icon type-fx-50">½</span> Not very effective (50%)</div>
            <div> <span class="type-fx-icon type-fx-100">&nbsp;</span> Normal (100%)</div>
            <div> <span class="type-fx-icon type-fx-200">2</span> Super-effective (200%)</div>
            <div> <span class="type-fx-icon type-fx-400">4</span> Doubly effective (400%)</div>

            <h2>Unused Types</h2>
            <div className='types-container'><span className='type-icon normal'>NORMAL</span>  <span className='type-icon ice'>ICE</span></div>
            <div className='types-container'><span className='type-icon normal'>NORMAL</span>  <span className='type-icon poison'>POISON</span></div>
            <div className='types-container'><span className='type-icon normal'>NORMAL</span>  <span className='type-icon bug'>BUG</span></div>
            <div className='types-container'><span className='type-icon normal'>NORMAL</span>  <span className='type-icon rock'>ROCK</span></div>
            <div className='types-container'><span className='type-icon normal'>NORMAL</span>  <span className='type-icon ghost'>GHOST</span></div>
            <div className='types-container'><span className='type-icon normal'>NORMAL</span>  <span className='type-icon steel'>STEEL</span></div>
            <div className='types-container'><span className='type-icon fire'>FIRE</span>  <span className='type-icon grass'>GRASS</span></div>
            <div className='types-container'><span className='type-icon fire'>FIRE</span>  <span className='type-icon ice'>ICE</span></div>
            <div className='types-container'><span className='type-icon fire'>FIRE</span>  <span className='type-icon fairy'>FAIRY</span></div>
            <div className='types-container'><span className='type-icon electric'>ELECTRIC</span>  <span className='type-icon fighting'>FIGHTING</span></div>
            <div className='types-container'><span className='type-icon electric'>ELECTRIC</span>  <span className='type-icon poison'>POISON</span></div>
            <div className='types-container'><span className='type-icon electric'>ELECTRIC</span>  <span className='type-icon dark'>DARK</span></div>
            <div className='types-container'><span className='type-icon ice'>ICE</span>  <span className='type-icon posion'>POISON</span></div>
            <div className='types-container'><span className='type-icon ice'>ICE</span>  <span className='type-icon bug'>BUG</span></div>
            <div className='types-container'><span className='type-icon fighting'>Fighting</span>  <span className='type-icon ground'>GROUND</span></div>
            <div className='types-container'><span className='type-icon fighting'>Fighting</span>  <span className='type-icon fairy'>FAIRY</span></div>
            <div className='types-container'><span className='type-icon poison'>POISON</span>  <span className='type-icon psychic'>PSYCHIC</span></div>
            <div className='types-container'><span className='type-icon poison'>POISON</span>  <span className='type-icon steel'>STEEL</span></div>
            <div className='types-container'><span className='type-icon poison'>POISON</span>  <span className='type-icon fairy'>FAIRY</span></div>
            <div className='types-container'><span className='type-icon ground'>GROUND</span>  <span className='type-icon fairy'>FAIRY</span></div>
            <div className='types-container'><span className='type-icon psychic'>PSYCHIC</span>  <span className='type-icon bug'>BUG</span></div>
            <div className='types-container'><span className='type-icon bug'>BUG</span>  <span className='type-icon dragon'>DRAGON</span></div>
            <div className='types-container'><span className='type-icon bug'>BUG</span>  <span className='type-icon dark'>DARK</span></div>
            <div className='types-container'><span className='type-icon rock'>ROCK</span>  <span className='type-icon ghost'>GHOST</span></div>
            <div className='types-container'><span className='type-icon dark'>DARK</span>  <span className='type-icon fairy'>FAIRY</span></div>
        </div>

        <div className='charts-container'>
            <h1>Dual Type Chart</h1>
            {renderCharts()}
        </div>
       </>
        
    )
};

export default TypeChartsPage;
