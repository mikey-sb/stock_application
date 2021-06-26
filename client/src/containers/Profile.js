import React from 'react'
import Wallet from '../components/profile_components/Wallet.js'

const Profile = ({allStock}) => {


    // const addCash = (total) => {
    //     console.log(total)
    //     setAllStock(total)
    // }
    return (
        <div>
            <h1>PROFILE</h1>
            <Wallet allStock={allStock}/>
        </div>
    )
}

export default Profile
