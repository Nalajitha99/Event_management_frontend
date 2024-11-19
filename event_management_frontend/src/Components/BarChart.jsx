import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchTicketsData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/payment/ticketsSold', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, 
                    },
                });

                const eventIds = response.data.map(item => item.eventId);
                const ticketCounts = response.data.map(item => item.ticketCount);

                setChartData({
                    labels: eventIds, // X-axis
                    datasets: [
                        {
                            label: 'Total Tickets Sold',
                            data: ticketCounts, // Y-axis
                            backgroundColor: 'rgba(106, 49, 106, 0.6)',
                            borderColor: 'rgba(106, 19, 106, 1)',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchTicketsData();
    }, []);

    if (!chartData) return <p>Loading Chart...</p>;

    return (
        <Bar
            data={chartData}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Total Tickets Sold by Event_Id',
                    },
                },
            }}
        />
    );
};

export default BarChart;
