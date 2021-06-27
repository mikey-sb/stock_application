import React, {useState} from 'react'
import ProfileAllStock from '../components/profile/ProfileAllStock'
import ProfileChange from '../components/profile/ProfileChange'
import ProfileInfo from '../components/profile/ProfileInfo'
import ProfilePerformance from '../components/profile/ProfilePerformance'
import ProfilePie from '../components/profile/ProfilePie'
import Wallet from '../components/Wallet'

import '../style/profile.css'

const Profile = () => {
    return (
        <>
        <div className = "profile-wrapper">
        <div className = "profile-all-stock">
            <ProfileAllStock />
        </div>
        
        <div className = "profile-change">
            <ProfileChange />
        </div>
        
        <div className = "profile-info">
            <ProfileInfo />
        </div>
        
        <div className = "profile-performance">
            <ProfilePerformance />
        </div>
        
        <div className = "profile-pie">
            <ProfilePie />
        </div>

        <div className = "profile-wallet">
            <h2>Wallet</h2>
            <Wallet />
        </div>

        </div>

        </>
    )
}

export default Profile
