document.addEventListener('DOMContentLoaded', function () {
    let canvas1 = document.getElementById("canvas1");
    let labels1 = ['Senza User Research', 'Con User Research'];
    let data1 = [20, 80];

    let chart1 = new Chart(canvas1, {
        type: 'doughnut',
        data: {
            labels: labels1,
            datasets: [{
                label: "UserResearch",
                data: data1,
                backgroundColor: ['#004aad', '#7ed957']
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Raleway', 
                            size: 8 
                        },
                        color: 'white'
                    }
                },
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });



    let canvas2 = document.getElementById("canvas2");

    let chart2 = new Chart(canvas2, {
        type: 'bar',
        data: {
            labels: ['Soddisfazione Utente'],
            datasets: [{
                label: 'Senza User Research',
                data: [20],
                backgroundColor: '#004aad'
            }, {
                label: 'Con User Research',
                data: [100],
                backgroundColor: '#7ed957'
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Raleway', 
                            size: 8 
                        },
                        color: 'white'
                    }
                },
            },
            elements: {
                arc: {
                    borderWidth: 0
                },
                rectangle: {
                    borderRadius: 50 
                }
            }
        }
    });



    let canvas3 = document.getElementById("canvas3");
    let labels3 = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'm11', 'm12', ];
    let data3 = [60, 65, 70, 75, 80, 85, 90, 95, 97, 98, 99, 100];

    let chart3 = new Chart(canvas3, {
        type: 'line',
        data: {
            labels: labels3,
            datasets: [{
                label: "Soddisfazione con U-R",
                data: data3,
                borderColor: 'white',
                backgroundColor: '#7ed957', 
                borderWidth: 0.3, 
                fill: false 
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Raleway', 
                            size: 8 
                        },
                        color: 'white'
                    }
                },
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });

    let canvas4 = document.getElementById("canvas4");
    let labels4 = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'm11', 'm12', ];
    let data4 = [30, 35, 40, 45, 50, 35, 37, 20, 22, 18, 25, 55];

    let chart4 = new Chart(canvas4, {
        type: 'line',
        data: {
            labels: labels4,
            datasets: [{
                label: "Soddisfazione No U-R",
                data: data4,
                borderColor: 'white',
                backgroundColor: '#004aad', 
                borderWidth: 0.3, 
                fill: false 
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Raleway', 
                            size: 8 
                        },
                        color: 'white'
                    }
                },
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });

});
