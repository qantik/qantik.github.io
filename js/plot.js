// Patents per year
function plotYear() {
    const data = [
        70497,  69136,  69949,  51960,  65761,  70514,  62819,
        61426,  72148,  76734, 76387,  88903,  83615, 101658,
        98445, 106130, 106742, 109014, 112790, 113136, 121064,
        123432, 162344, 168327, 175011, 183031, 182851, 185653,
        180079, 156844, 194789, 181394, 183353, 190583, 242652,
        246232, 275592, 301996, 325309, 325382, 333012, 215317
    ];
    
    const ctx = document.getElementById("plot-patents-year").getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nj.arange(1976, 2018, 1).tolist(),
            datasets: [{
                label: 'Number of patent grants per year',
                data: data,
                backgroundColor: 'rgba(0, 0, 128, 0.2)',
            }, {
    		data: data,
                type: 'line',
    		fill: false,
    		borderColor: 'rgba(0, 0, 128, 0.2)'
    	    }]
        },
        options: {
	    animation: {
		duration: 7500
	    },
    	    responsive: true,
    	    maintainAspectRation: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }],
    		xAxes: [{
    		    gridLines: {
    			display: false
    		    }
    		}]
            },
    	    legend: {
    		labels: {
    		    filter: (legend, label) => {
    			if (legend.text === undefined)
    			    return false;
    			return true;
    		    }
    		}
    	    }
        }
    });
}

function plotMonthDay() {
    // Patents per month
    let data = [
        483621, 482865, 546696, 545095, 572231, 530489, 536915, 557803,
        518561, 521570, 521819, 504346
    ];
    
    let ctx = document.getElementById("plot-patents-months").getContext('2d');
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nj.arange(1, 13, 1).tolist(),
            datasets: [{
                label: 'Number of patent grants per month',
                data: data,
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }, {
    	    data: data,
                type: 'line',
    	    fill: false,
    	    borderColor: 'rgba(0, 128, 0, 0.2)'
    	}]
        },
        options: {
	    animation: {
		duration: 7500
	    },
    	responsive: true,
    	maintainAspectRation: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }],
    	    xAxes: [{
    		gridLines: {
    		    display: false
    		}
    	    }]
            },
    	legend: {
    	    labels: {
    		filter: (legend, label) => {
    		    if (legend.text === undefined)
    			return false;
    		    return true;
    		}
    	    }
    	}
        }
    });
    
    // Patents per day
    data = [
        214909, 210078, 213383, 215652, 201635, 217979, 211608, 214458, 208599, 211850,
        212518, 198875, 212881, 208953, 205719, 207441, 207598, 206497, 195488, 206421,
        203352, 201631, 203237, 207508, 202843, 195911, 213412, 208882, 192512, 188340,
        121841 
    ];
    
    ctx = document.getElementById("plot-patents-days").getContext('2d');
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nj.arange(1, 32, 1).tolist(),
            datasets: [{
                label: 'Number of patent grants per day of the month',
                data: data,
                backgroundColor: 'rgba(128, 0, 0, 0.2)',
            }, {
    	    data: data,
                type: 'line',
    	    fill: false,
    	    borderColor: 'rgba(128, 0, 0, 0.2)'
    	}]
        },
        options: {
    	animation:  {
    	    duration: 7500
    	},
    	responsive: true,
    	maintainAspectRation: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }],
    	    xAxes: [{
    		gridLines: {
    		    display: false
    		}
    	    }]
            },
    	legend: {
    	    labels: {
    		filter: (legend, label) => {
    		    if (legend.text === undefined)
    			return false;
    		    return true;
    		}
    	    }
    	}
        }
    });
}

function plotInDegrees() {
    // Patents in-degree
    const data = [
        1423506, 1313281, 825015, 607590, 477962, 392683, 326983, 278964, 238402,
        207321, 180728, 159730, 140747, 125331, 111787, 100832, 89919, 80969, 73511,
        66286, 60818, 55675, 50934, 47024, 42950, 39632, 36754, 34222, 31472, 29214,
        27236, 25433, 23789, 22600, 21036, 19515, 18390, 17285, 16655, 15583, 14689,
        13738, 13144, 12558, 11742, 11285, 10687, 10048, 9814, 9339
    ];
    
    const ctx = document.getElementById("plot-citations-indegree").getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nj.arange(0, 51, 1).tolist(),
            datasets: [{
                label: 'Sum of in-degrees [0, 50]',
                data: data,
                backgroundColor: 'rgba(0, 0, 128, 0.2)',
            }, {
    		data: data,
                type: 'line',
    		fill: false,
    		borderColor: 'rgba(0, 0, 128, 0.2)'
    	    }]
        },
        options: {
    	    animation: {
    		duration: 7500
    	    },
    	    responsive: true,
    	    maintainAspectRation: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }],
    		xAxes: [{
    		    gridLines: {
    			display: false
    		    }
    		}]
            },
    	    legend: {
    		labels: {
    		    filter: (legend, label) => {
    			if (legend.text === undefined)
    			    return false;
    			return true;
    		    }
    		}
    	    }
        }
    });
}


