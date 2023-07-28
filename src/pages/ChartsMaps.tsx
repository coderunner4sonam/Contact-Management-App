import React from 'react';
import CovidDashboard from '../components/CovidDashboard';
import { LatLngExpression } from 'leaflet';

const ChartsMaps: React.FC = () => {
  // Define the center coordinates for the map
  const center: LatLngExpression = [51.505, -0.09];

  return (
    <div>
      {/* Render the CovidDashboard component to display the charts and maps related to COVID-19 data */}
      <CovidDashboard />
    </div>
  );
};

export default ChartsMaps;
