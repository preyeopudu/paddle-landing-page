import React from 'react'
import '../../styles/Stat.css'
import StatCard from '../../components/StatCard'
import ServerImg from '../../images/icons/Server.png'
import UserImg from '../../images/icons/user.png'
import LocationImg from '../../images/icons/location.png'

const Stat=()=>{
    return(
        <div className="stat-container" >
                <div className="stat-section" >
                    <StatCard image={UserImg} title='users' number='90'/>
                    <StatCard image={LocationImg} title='location' number='30'/>
                    <StatCard image={ServerImg} title='servers' number='50'/>
                </div>
        </div>
    )
}

export default Stat