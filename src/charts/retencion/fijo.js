import { meses, retenAtento, retenKA, retenPro } from '../../data.js';

const ctx = document.getElementById('retenFijo');

new Chart(ctx, {
    type: 'radar',
    data: {
        labels: meses,
        datasets: [{
            label: 'Atento',
            data: retenAtento
        }, {
            label: 'Konecta Argentina',
            data: retenKA
        }, {
            label: 'Propios',
            data: retenPro
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        }
    }
});