import React from 'react'
import './style/SideNav.scss'
import RouteSelection from './RouteSelection'

export default function SideNav({ delays, setActiveDelay }) {
  return (
    <div className="SideNav">
      <div className="SideNavHeader">
        <h1>Trainalytics</h1>
      </div>
      <RouteSelection delays={delays} setActiveDelay={setActiveDelay} />
    </div>
  )
}
