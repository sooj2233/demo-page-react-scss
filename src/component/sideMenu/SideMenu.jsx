import React from 'react'
import { MdLogoDev, MdOutlineRadioButtonChecked,MdManageHistory} from 'react-icons/md'
import {IoHome,IoFlashOutline,IoRocketOutline,IoHeadsetOutline,IoLibraryOutline,IoPlayCircleOutline,IoTimeOutline,IoDownloadOutline,IoChevronDownOutline} from 'react-icons/io5'
import './styles.scss'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
   <div className="sideMenu sideMenu--dark">
    <div className="top">
      <div className=" top__dark-mode ">
        <span className='top__dark-mode--black'><MdOutlineRadioButtonChecked/></span>
        <span className="top__dark-mode--red"><MdOutlineRadioButtonChecked/></span>
        <span className="top__dark-mode--blue"><MdOutlineRadioButtonChecked/></span>
      </div>
      <div className="top__logo-text">
        <span className='logo'><MdLogoDev/></span>
        <span className='logo-text'>MOVIE-L</span>
      </div>
    </div>
    <div className="main1">
      <button className="btn">
        <IoHome/>  <Link to="/">Home</Link>
        </button>
      <button >
      <IoFlashOutline/>  <Link to="/">Shorts</Link>
      </button>
      <button >
      <IoRocketOutline/>  <Link to="/">Subscriptions</Link>
      </button>
      <button >
      <IoHeadsetOutline/>  <Link to="/">Music</Link>
      </button>
      </div>

     
    <div className='main2'>
        <span className='text'>My CHANNEL</span>
       
      
      <button >
      <IoLibraryOutline/>  <Link to="/">Library</Link>
      </button>
      <button >
      <IoPlayCircleOutline/>  <Link to="/">Your Video</Link>
      </button>
      <button >
      <IoTimeOutline/>  <Link to="/">Watch later</Link>
      </button>
      <button >
      <IoDownloadOutline/>  <Link to="/">Downloads</Link>
      </button>
      <button >
      <MdManageHistory/>  <Link to="/">History</Link>
      </button>
      <button >
      <IoChevronDownOutline/>  <Link to="/">Show More</Link>
      </button>
      </div>
    
    <div className="bottom">SUBSCRIPTION</div>
   </div>
  )
}

export default SideMenu