import React from 'react';
import { useQuery } from 'react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import marker from "../asset/marker.png"

const customIcon = new L.Icon({
  iconUrl: marker,
  iconSize: [32, 32],
});

interface CovidData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  countryInfo?: {
    lat: number;
    long: number;
  };
}

interface HistoricalData {
  cases: { [date: string]: number };
}

const CovidDashboard: React.FC = () => {
  // Fetching worldwide data of cases using React Query
  const { data: worldwideData } = useQuery<CovidData>('worldwide', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    return response.json();
  });

  // Fetching country-specific data of cases using React Query
  const { data: countriesData } = useQuery<CovidData[]>('countries', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    return response.json();
  });

  // Fetching graph data for cases with date using React Query
  const { data: historicalData } = useQuery<HistoricalData>('historical', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return response.json();
  });

  // Line graph data processing (You may use a chart library like Chart.js)
  // ...

  // React Leaflet map configuration
  const center: LatLngExpression = [0, 0]; // Default center for the map
  const zoom: number = 2; // Default zoom level for the map

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Render your line graph here (not shown in the code) */}
      {/* Render your React Leaflet map here */}
      <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
        {/* TileLayer for the base map */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Render markers for each country */}
        {countriesData?.map((country) => (
          <Marker
            key={country.country}
            position={[
              country.countryInfo?.lat || 0,
              country.countryInfo?.long || 0,
            ]}
            icon={customIcon}
          >
            {/* Popup showing COVID-19 data for each country */}
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Active Cases: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CovidDashboard;
