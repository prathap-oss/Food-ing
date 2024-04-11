import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='App-download' id='App-download'>
        <p>Get Better Experience<br></br> 
        <div className='App-download-plotform'>
            <img src={assets.play_store}/>
            <img src={assets.app_store} />
        </div>
        </p>
    </div>
  )
}

export default AppDownload