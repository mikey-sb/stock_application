import React, {useState, useEffect} from 'react'
import ProfileAllStock from '../components/profile/ProfileAllStock'
import ProfileChange from '../components/profile/ProfileChange'
import ProfileInfo from '../components/profile/ProfileInfo'
import ProfilePerformance from '../components/profile/ProfilePerformance'
import ProfilePie from '../components/profile/ProfilePie'
import ProfileWallet from '../components/profile/ProfileWallet'
import { getStocks } from '../SharesServices'

import '../style/profile.css'
import { getCash } from '../WalletServices'

const Profile = ({setAllOwnedStocks, allOwnedStocks, wallet, setWallet}) => {
 
    const [ownedStocks, setOwnedStocks] = useState([])

    useEffect(() => {
        getStocks()
        .then((ownedStocks) => {
            setOwnedStocks(ownedStocks)
            setAllOwnedStocks(ownedStocks)
        })
    }, [])
    
    return (
        <>
        <div className = "profile-wrapper">
        <div className = "profile-all-stock">
            <ProfileAllStock ownedStocks={ownedStocks}/>
        </div>
        
        {/* <div className = "profile-change">
            <ProfileChange />
        </div> */}
        
        {/* <div className = "profile-info">
            <ProfileInfo />
        </div> */}
        
        <div className = "profile-performance">
            <ProfilePerformance />
        </div>
        
        <div className = "profile-pie">
            <ProfilePie />
        </div>

        <div className = "profile-wallet">
            <ProfileWallet setWallet={setWallet} wallet={wallet} ownedStocks={ownedStocks}/>
        </div>

        </div>

        </>
    )
}

export default Profile
