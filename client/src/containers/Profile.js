import React from 'react'
<<<<<<< HEAD
import ProfileAllStock from '../components/profile/ProfileAllStock'
import ProfileChange from '../components/profile/ProfileChange'
import ProfileInfo from '../components/profile/ProfileInfo'
import ProfilePerformance from '../components/profile/ProfilePerformance'
import ProfilePie from '../components/profile/ProfilePie'
import ProfileWallet from '../components/profile/ProfileWallet'

import '../style/profile.css'
=======
import Wallet from '../components/profile_components/Wallet.js'
>>>>>>> profile/wallet

const Profile = ({allStock}) => {


    // const addCash = (total) => {
    //     console.log(total)
    //     setAllStock(total)
    // }
    return (
<<<<<<< HEAD
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
=======
        <div>
            <h1>PROFILE</h1>
            <Wallet allStock={allStock}/>
>>>>>>> profile/wallet
        </div>

        <div className = "profile-wallet">
            <ProfileWallet />
        </div>

        </div>

        </>
    )
}

export default Profile
