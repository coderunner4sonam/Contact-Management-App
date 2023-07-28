import React from 'react'
import CovidDashboard from '../components/CovidDashboard'
import { LatLngExpression } from 'leaflet';

const ChartsMaps:React.FC = () => {
  const center: LatLngExpression = [51.505, -0.09];
  return (
    <div>
      <CovidDashboard/>
  
    </div>
  )
}

export default ChartsMaps
