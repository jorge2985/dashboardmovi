import { meses, retenAtentoF, retenKAF, retenProF } from '../../data.js';

const ctx = document.getElementById('retenFijo');

new Chart(ctx, {
    type: 'radar',
    data: {
        labels: meses,
        datasets: [{
            label: 'Atento',
            data: retenAtentoF
        }, {
            label: 'Konecta Argentina',
            data: retenKAF
        }, {
            label: 'Propios',
            data: retenProF
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                position: 'right',
                text: 'Fijo' 
            }
        }
    }
}); 