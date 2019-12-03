import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) =>
    <div className="navbar">
        {props.user ?
        <div className='user-links left'>
            <NavLink
                className='user-link'
                to="/create-team"
                exact
                activeStyle={{
                    color: 'red'
                }}
            >Create Team</NavLink>
            <NavLink
                className='user-link'
                to="/my-teams"
                exact
                activeStyle={{
                    color: 'red'
                }}
            >{props.user}'s Teams</NavLink>
            <NavLink
                className='user-link'
                to="/type-charts"
                exact
                activeStyle={{
                    color: 'red'
                }}
            >Type Charts</NavLink>
        </div>
        :
        null
        }

        {props.user ?
        <div className='user-links right'>
            <NavLink
                className='user-link'
                to="/log-in"
                onClick={props.signOut}
                exact
                activeStyle={{
                    color: 'red'
                }}
            >Log Out</NavLink>
        </div>
        :
        null
        }
        <div className='poke-title'>
            <a href="http://localhost:3001/create-team"><img className='head-image' src="https://fontmeme.com/permalink/191120/7b8d90738ab7c4dc15f1177511062b0f.png
            " alt=""/></a>
        </div>
        
        

    </div >
export default NavBar
