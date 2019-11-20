import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = (props) =>
    <div className="navbar">
        <div className='poke-header'>
            <a href="http://localhost:3001/create-team"><img src="https://fontmeme.com/permalink/191120/7b8d90738ab7c4dc15f1177511062b0f.png
            " alt=""/></a>
        </div>

        <div className='user-links'>
            <div>
                <NavLink
                    className='user-link'
                    to="/create-team"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                >Create Team</NavLink>
                <NavLink
                    className='user-link'
                    to="/my-teams"
                    exact
                    activeStyle={{
                        color: 'gold'
                    }}
                >My Teams</NavLink>
            </div>
        </div>
    </div >
export default NavBar
