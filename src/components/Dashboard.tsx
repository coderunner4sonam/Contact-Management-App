import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Line } from 'react-chartjs-2';

interface CountryData {
  country: string;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    iso2: string;
    lat: number;
    long: number;
  };
}

interface GraphData {
  cases: { [date: string]: number };
}

const WORLD_DATA_API = 'https://disease.sh/v3/covid-19/all';
const COUNTRY_DATA_API = 'https://disease.sh/v3/covid-19/countries';
const GRAPH_DATA_API = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

const Dashboard: React.FC = () => {
  const [worldData, setWorldData] = useState<CountryData>();
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);
  const [graphData, setGraphData] = useState<GraphData>();

  useEffect(() => {
    // Fetch world data
    axios.get<CountryData>(WORLD_DATA_API).then((response) => {
      setWorldData(response.data);
    });

    // Fetch country data
    axios.get<CountryData[]>(COUNTRY_DATA_API).then((response) => {
      setCountriesData(response.data);
    });

    // Fetch graph data
    axios.get<GraphData>(GRAPH_DATA_API).then((response) => {
      setGraphData(response.data);
    });
  }, []);

  const renderCountryMarkers = () => {
    return countriesData.map((country) => (
      <Marker key={country.countryInfo.iso2} position={[country.countryInfo.lat, country.countryInfo.long]}>
        <Popup>
          <strong>{country.country}</strong>
          <br />
          Total Cases: {country.cases}
          <br />
          Active Cases: {country.active}
          <br />
          Recovered Cases: {country.recovered}
          <br />
          Deaths: {country.deaths}
        </Popup>
      </Marker>
    ));
  };

  const renderLineGraph = () => {
    const labels = Object.keys(graphData?.cases || {});
    const data = Object.values(graphData?.cases || {});

    const chartData = {
      labels,
      datasets: [
        {
          label: 'Cases',
          data,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.4)',
        },
      ],
    };

    return <Line data={chartData} />;
  };

  return (
    <div>
      <h1>COVID-19 Dashboard</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, margin: '10px' }}>
          {renderLineGraph()}
        </div>
        <div style={{ flex: 1 }}>
          <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {renderCountryMarkers()}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
