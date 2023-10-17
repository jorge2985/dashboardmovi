import { fechas, productividad, atento, propios, konectaArg, konectaPe } from '../../data.js';

const ctx = document.getElementById('productividad');

new Chart (ctx, {
    type: 'bar',
    data: {
        labels: ['Atento', 'Propios', 'Konecta Argentina', 'Konecta Perú'],
        datasets: [{
            label: 'Junio',
            data: [atento[0], propios[0], konectaArg[0], konectaPe[0]]
        }, {
            label: 'Julio',
            data: [atento[1], propios[1], konectaArg[1], konectaPe[1]]
        }, {
            label: 'Agosto',
            data: [atento[2], propios[2], konectaArg[2], konectaPe[2]]
        }, {
            label: 'Septiembre',
            data: [atento[3], propios[3], konectaArg[3], konectaPe[3]]
        }, {
            type: 'line',
            label: 'Productividad',
            data: [productividad[0], productividad[1], productividad[2], productividad[3]],
            pointStyle: 'circle',
            pointRadius: 7,
            pointHoverRadius: 15
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});