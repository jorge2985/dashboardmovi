import { fechas, privadoFB, publicoFB } from '../data.js';

const ctx = document.getElementById('chartCasos');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: fechas,
        datasets: [{
            label: 'Casos Privados',
            data: privadoFB,
            borderWidth: 1
        }, {
            label: 'Casos Públicos',
            data: publicoFB,
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time',
                time: { unit: 'month' }
            },
            y: {
                beginAtZero: true
            }
        }
    }
});