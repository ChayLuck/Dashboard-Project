document.addEventListener('DOMContentLoaded', function () {
    // OEE Rate Distribution Chart
    var ctxOEE = document.getElementById('oeeChart').getContext('2d');
    var oeeChart = new Chart(ctxOEE, {
        type: 'pie',
        data: {
            labels: oeeData.map(item => item.lineCode),
            datasets: [{
                label: '',
                data: oeeData.map(item => item.oeeRate * 100),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }]
        }
    });

    // Stop Reasons Distribution Chart
    var ctxStopReasons = document.getElementById('stopReasonsChart').getContext('2d');
    var stopReasonsChart = new Chart(ctxStopReasons, {
        type: 'pie',
        data: {
            labels: stoppageData.map(item => `${item.lineCode} ${item.stopReason}`),
            datasets: [{
                label: '',
                data: stoppageData.map(item => item.stopDuration),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb', '#ff6384']
            }]
        }
    });

    // Stop Reasons Distribution Chart for Hat 1
    var stoppageDataHat1 = stoppageData.filter(item => item.lineCode === 'HAT-1');
    var ctxStopReasonsHat1 = document.getElementById('stopReasonsChartHat1').getContext('2d');
    var stopReasonsChartHat1 = new Chart(ctxStopReasonsHat1, {
        type: 'pie',
        data: {
            labels: stoppageDataHat1.map(item => `${item.lineCode} ${item.stopReason}`),
            datasets: [{
                label: '',
                data: stoppageDataHat1.map(item => item.stopDuration),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }]
        }
    });

    // Stop Reasons Distribution Chart for Hat 2
    var stoppageDataHat2 = stoppageData.filter(item => item.lineCode === 'HAT-2');
    var ctxStopReasonsHat2 = document.getElementById('stopReasonsChartHat2').getContext('2d');
    var stopReasonsChartHat2 = new Chart(ctxStopReasonsHat2, {
        type: 'pie',
        data: {
            labels: stoppageDataHat2.map(item => `${item.lineCode} ${item.stopReason}`),
            datasets: [{
                label: '',
                data: stoppageDataHat2.map(item => item.stopDuration),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }]
        }
    });

    // Performance Rate Distribution Chart
    var ctxPerformance = document.getElementById('performanceChart').getContext('2d');
    var performanceChart = new Chart(ctxPerformance, {
        type: 'pie',
        data: {
            labels: oeeData.map(item => item.lineCode),
            datasets: [{
                label: '',
                data: oeeData.map(item => item.performanceRate * 100),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }]
        }
    });

    // Quality Rate Distribution Chart
    var ctxQuality = document.getElementById('qualityChart').getContext('2d');
    var qualityChart = new Chart(ctxQuality, {
        type: 'pie',
        data: {
            labels: oeeData.map(item => item.lineCode),
            datasets: [{
                label: '',
                data: oeeData.map(item => item.qualityRate * 100),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }]
        }
    });

    // Availability Rate Distribution Chart
    var ctxAvailability = document.getElementById('availabilityChart').getContext('2d');
    var availabilityChart = new Chart(ctxAvailability, {
        type: 'pie',
        data: {
            labels: oeeData.map(item => item.lineCode),
            datasets: [{
                label: '',
                data: oeeData.map(item => item.availabilityRate * 100),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }]
        }
    });
});

// Production Comparison Chart
var ctxProductionComparison = document.getElementById('productionComparisonChart').getContext('2d');

var monthsOrder = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

var labels = Object.keys(productionData).sort((a, b) => monthsOrder.indexOf(a) - monthsOrder.indexOf(b));
var hat1Data = labels.map(month => productionData[month]["HAT-1"] || 0);
var hat2Data = labels.map(month => productionData[month]["HAT-2"] || 0);

var productionComparisonChart = new Chart(ctxProductionComparison, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'HAT-1',
                data: hat1Data,
                backgroundColor: '#36a2eb'
            },
            {
                label: 'HAT-2',
                data: hat2Data,
                backgroundColor: '#ff6384'
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    // Gauge Chart
    var svg = d3.select('#gaugeChart'),
        width = +svg.attr('width'),
        height = +svg.attr('height'),
        radius = Math.min(width, height) / 2;

    var arc = d3.arc()
        .innerRadius(radius - 20)
        .outerRadius(radius - 10)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2);

    var background = svg.append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    background.append('path')
        .datum({ endAngle: Math.PI })
        .style('fill', '#ddd')
        .attr('d', arc);

    var foreground = svg.append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    var valueArc = d3.arc()
        .innerRadius(radius - 20)
        .outerRadius(radius - 10)
        .startAngle(-Math.PI / 2);

    foreground.append('path')
        .datum({ endAngle: -Math.PI / 2 })
        .style('fill', '#ff6384')
        .attr('d', valueArc);

    // Set gauge value (example: 0.75 for 75%)
    var value = 0.75;
    foreground.select('path')
        .transition()
        .duration(1000)
        .attr('d', d3.arc()
            .innerRadius(radius - 20)
            .outerRadius(radius - 10)
            .startAngle(-Math.PI / 2)
            .endAngle(-Math.PI / 2 + (Math.PI * 2 * value))
        );

    // Add text label to display the percentage value
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height / 2)
        .attr('text-anchor', 'middle')
        .attr('font-size', '24px')
        .attr('fill', '#333')
        .text((value * 100).toFixed(0) + '%');

