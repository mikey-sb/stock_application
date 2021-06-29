import React, {useState, useEffect} from 'react'
import ProfileAllStock from '../components/profile/ProfileAllStock'
import ProfileChange from '../components/profile/ProfileChange'
import ProfileInfo from '../components/profile/ProfileInfo'
import ProfilePerformance from '../components/profile/ProfilePerformance'
import ProfilePie from '../components/profile/ProfilePie'
import ProfileWallet from '../components/profile/ProfileWallet'
import WalletPie from '../components/profile/WalletPie'
import { getStocks } from '../SharesServices'

import '../style/profile.css'
import { getCash } from '../WalletServices'

const Profile = ({setAllOwnedStocks, allOwnedStocks, wallet, setWallet, boughtStockRecord}) => {
 
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
        <h1 className="header">PROFILE</h1>
        <div className = "profile-wrapper">
        <div className = "profile-all-stock">
            <ProfileAllStock ownedStocks={ownedStocks}/>
        </div>
        
        {/* <div className = "profile-change">
            <ProfileChange />
        </div> */}
        
        <div className = "wallet-pie">
            <WalletPie wallet={wallet} setWallet={setWallet}/>
        </div> 
        
        {/* <div className = "profile-performance">
            <ProfilePerformance ownedStocks={ownedStocks} wallet={wallet}/>
        </div>
         */}
        <div className = "profile-pie">
            <ProfilePie ownedStocks={ownedStocks}/>
        </div>

        <div className = "profile-wallet">
            <ProfileWallet setWallet={setWallet} wallet={wallet} ownedStocks={ownedStocks} boughtStockRecord={boughtStockRecord}/>
        </div>

        </div>

        </>
    )
}

export default Profile
