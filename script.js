// Function to initialize the usage chart
function initUsageChart() {
    const ctx = document.getElementById('usageChart').getContext('2d');
    const usageChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Water Usage (Liters)',
                data: [120, 200, 150, 170, 240, 210, 190],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Ensures the chart scales based on container size
        }
    });
}

// Function to initialize the water quality chart
function initQualityChart() {
    const ctx = document.getElementById('qualityChart').getContext('2d');
    const qualityChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['pH Level', 'Turbidity', 'Contamination'],
            datasets: [{
                label: 'Quality Metrics',
                data: [7.5, 2.0, 0.5],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Function to save settings
function saveSettings() {
    const waterLimit = document.getElementById('waterLimit').value;
    alert(`Daily water usage limit set to: ${waterLimit} liters`);
}

// Initialize charts when the page loads
window.onload = function() {
    initUsageChart();
    initQualityChart();
};
