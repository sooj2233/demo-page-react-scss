import React from 'react'
import './styles.scss'
import {FaSearchDollar,FaMicrophoneAlt,FaUserCircle,FaRegBell,FaVideo} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
        <div className="search-bar">
            <div className="search">
                <div className='left'>
                    <FaSearchDollar/> 
                    <input type="text" placeholder="Search ..." />
                </div>
                <span className='right'><FaMicrophoneAlt/></span>
            </div>
            <div className="topAction">
                <span className="video"><FaVideo/></span>
                <span className="bell"><FaRegBell/></span>
                <span className="user"><FaUserCircle/></span>
            </div>
        </div>
        <div className="segmented-control">
            <ul >
                <li>
                    <Link to="/">All</Link>
                    <Link to="/">Movie</Link>
                    <Link to="/">Tv Show</Link>
                    <Link to="/">Game</Link>
                    <Link to="/">Korean</Link>
                    <Link to="/">Chinna</Link>
                    <Link to="/">Japan</Link>
                    <Link to="/">Kpop</Link>
                    <Link to="/">Kpop</Link>
                    <Link to="/">Kpop</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header