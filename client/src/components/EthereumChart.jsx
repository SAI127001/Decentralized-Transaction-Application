import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const EthereumChart = () => {
  const chartRef = useRef(null);
  const [priceData, setPriceData] = useState([]);
  const [dataToShow, setDataToShow] = useState(7);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${dataToShow}&interval=daily`
        );
        const data = response.data.prices;

        setPriceData(data);
      } catch (error) {
        console.error('Error fetching Ethereum price data:', error);
      }
    };

    fetchData();
  }, [dataToShow]);

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
            borderColor: '#cb9b51',
            borderWidth: 3,
            fill: true,
            backgroundColor: 'rgba(255, 215, 1, 0.1)',
            pointRadius: 5,
            pointBackgroundColor: '#cb9b51',
            pointBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Date',
              color: 'white',
              font: {
                size: 18,
              },
            },
            ticks: {
              color: 'white',
              font: {
                size: 14,
              },
              maxRotation: 0,
              maxTicksLimit: 10, // Number of visible ticks
            },
            min: timestamps[0], // Set the minimum visible date
            max: timestamps[timestamps.length - 1], // Set the maximum visible date
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Price (USD)',
              color: 'white',
              font: {
                size: 18,
              },
            },
            ticks: {
              color: 'white',
              font: {
                size: 14,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#cb9b51',
              font: {
                size: 18,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          mode: 'x',
        },
      },
    });
  }, [priceData]);

  return (
    <div>
      <canvas ref={chartRef} className="ethereum-chart" />
    </div>
  );
};

export default EthereumChart;
