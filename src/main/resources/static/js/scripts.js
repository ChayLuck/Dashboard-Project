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
                backgroundColor: ['#377195', '#36a2eb', '#ffce56', '#4bc0c0'],
                borderColor: 'transparent', // Set to 'transparent' to remove borders
                borderWidth: 0 // Set to 0 to remove borders
            }]
        },
        options: {
            cutout: '0%', // Remove or set to desired cutout size
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Text color for legend labels
                    }
                },
                tooltip: {
                    callbacks: {
                        labelTextColor: function() {
                            return '#ffffff'; // Text color for tooltip labels
                        }
                    }
                }
            },
            responsive: true
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
                backgroundColor: ['#092b4a', '#2c6faf', '#033a6e', '#1e597c', '#55a4ef', '#2b74b8', '#1a3b5a', '#7fb7ed', '#36a2eb', '#ff6384'],
                borderColor: 'transparent', // Set to 'transparent' to remove borders
                borderWidth: 0 // Set to 0 to remove borders
            }]
        },
        options: {
            cutout: '0%', // Remove or set to desired cutout size
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Text color for legend labels
                    }
                },
                tooltip: {
                    callbacks: {
                        labelTextColor: function() {
                            return '#ffffff'; // Text color for tooltip labels
                        }
                    }
                }
            },
            responsive: true
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
                backgroundColor: ['#2c6faf', '#033a6e', '#1e597c', '#55a4ef'],
                borderColor: 'transparent', // Set to 'transparent' to remove borders
                borderWidth: 0 // Set to 0 to remove borders
            }]
        },
        options: {
            cutout: '0%', // Remove or set to desired cutout size
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Text color for legend labels
                    }
                },
                tooltip: {
                    callbacks: {
                        labelTextColor: function() {
                            return '#ffffff'; // Text color for tooltip labels
                        }
                    }
                }
            },
            responsive: true
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
                backgroundColor: ['#2c6faf', '#033a6e', '#1e597c', '#55a4ef'],
                borderColor: 'transparent', // Set to 'transparent' to remove borders
                borderWidth: 0 // Set to 0 to remove borders
            }]
        },
        options: {
            cutout: '0%', // Remove or set to desired cutout size
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Text color for legend labels
                    }
                },
                tooltip: {
                    callbacks: {
                        labelTextColor: function() {
                            return '#ffffff'; // Text color for tooltip labels
                        }
                    }
                }
            },
            responsive: true
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
                backgroundColor: ['#377195', '#36a2eb', '#ffce56', '#4bc0c0'],
                borderColor: 'transparent', // Set to 'transparent' to remove borders
                borderWidth: 0 // Set to 0 to remove borders
            }]
        },
        options: {
            cutout: '0%', // Remove or set to desired cutout size
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Text color for legend labels
                    }
                },
                tooltip: {
                    callbacks: {
                        labelTextColor: function() {
                            return '#ffffff'; // Text color for tooltip labels
                        }
                    }
                }
            },
            responsive: true
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
                backgroundColor: ['#377195', '#36a2eb', '#ffce56', '#4bc0c0'],
                borderColor: 'transparent', // Set to 'transparent' to remove borders
                borderWidth: 0 // Set to 0 to remove borders
            }]
        },
        options: {
            cutout: '0%', // Remove or set to desired cutout size
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Text color for legend labels
                    }
                },
                tooltip: {
                    callbacks: {
                        labelTextColor: function() {
                            return '#ffffff'; // Text color for tooltip labels
                        }
                    }
                }
            },
            responsive: true
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
                backgroundColor: ['#377195', '#36a2eb', '#ffce56', '#4bc0c0'],
                borderColor: 'transparent', // Set to 'transparent' to remove borders
                borderWidth: 0 // Set to 0 to remove borders
            }]
        },
        options: {
            cutout: '0%', // Remove or set to desired cutout size
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Text color for legend labels
                    }
                },
                tooltip: {
                    callbacks: {
                        labelTextColor: function() {
                            return '#ffffff'; // Text color for tooltip labels
                        }
                    }
                }
            },
            responsive: true
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
                color: '#ffffff',
                data: hat1Data,
                backgroundColor: '#36a2eb'
            },
            {
                label: 'HAT-2',
                color: '#ffffff',
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
        .style('fill', '#499ff1')
        .attr('d', arc);

    var foreground = svg.append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    var valueArc = d3.arc()
        .innerRadius(radius - 20)
        .outerRadius(radius - 10)
        .startAngle(-Math.PI / 2);

    foreground.append('path')
        .datum({ endAngle: -Math.PI / 2 })
        .style('fill', '#499ff1')
        .attr('d', valueArc);

    // Set gauge value (example: 0.75 for 75%)
    var value = 0.64;
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
        .style('fill', '#499ff1')
        .text((value * 100).toFixed(0) + '%');

