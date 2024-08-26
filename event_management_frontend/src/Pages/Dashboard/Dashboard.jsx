import React from 'react'
import NavBar from '../../Components/NavBar'
import GoogleMap from '../../Components/GoogleMap'

const Dashboard = () => {
  return (
    <div>
        <NavBar userType="admin"/>
        <GoogleMap/>

    </div>
  )
}

export default Dashboard