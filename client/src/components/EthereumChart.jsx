import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const EthereumChart = () => {
  const chartRef = useRef(null);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7&interval=daily'
        );
        const data = response.data.prices;

        setPriceData(data);
      } catch (error) {
        console.error('Error fetching Ethereum price data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (priceData.length === 0 || !chartRef.current) {
      return;
    }

    const timestamps = priceData.map((entry) => new Date(entry[0]).toLocaleDateString());
    const prices = priceData.map((entry) => entry[1]);

    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [
          {
            label: 'Ethereum Price (USD)',
            data: prices,
            borderColor: 'gold',
            borderWidth: 5,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, [priceData]);

  return <canvas ref={chartRef} />;
};

export default EthereumChart;
