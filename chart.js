window.onload = function () {
    // Demand Chart Initialization
    const ctxDemand = document.getElementById('demandChart').getContext('2d');
    new Chart(ctxDemand, {
        type: 'bar',
        data: {
            labels: ['Furniture', 'Almirah', 'Table', 'Chair', 'Couch', 'Cabinet'],
            datasets: [{
                label: 'Demand by Region',
                data: [3000, 2000, 1500, 4000, 2500, 1800],
                backgroundColor: '#C6D200',
                borderColor: '#A3B000',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#D9D9D9',
                        font: { size: 14 }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#D9D9D9' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: '#D9D9D9' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });

    // Profit & Loss Chart Initialization
    const ctxProfitLoss = document.getElementById('profitLossChart').getContext('2d');
    new Chart(ctxProfitLoss, {
        type: 'pie',
        data: {
            labels: ["Profit", "Loss"],
            datasets: [{
                label: "Monthly Financial Status",
                data: [70000, 30000],
                backgroundColor: ["#C6D200", "#D9534F"],
                borderColor: ["#A3B000", "#B52B27"],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "#D9D9D9",
                        font: { size: 14 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const value = tooltipItem.raw; // Adjusted to fetch the value correctly
                            return ` ${tooltipItem.label}: ₹${value.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
};
