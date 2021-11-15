import React, {useState} from 'react'
import Lights from '../Lights'
import Climate from '../Climate'
import Blinds from '../Blinds'
import Energy from '../Energy'


const Dashboard = ({data : {lights, climate, blinds, energyConsumption}}) => {
    return (
        <main className="dashboard">
            <Lights lights={lights}/>
            <Climate climate={climate}/>
            <Blinds blinds={blinds}/>
            <Energy energyConsumption={energyConsumption}/>
        </main>
    )
}

export default Dashboard;