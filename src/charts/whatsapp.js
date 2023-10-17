import { fechas, TPRIWhatsApp, TPRWhatsApp } from "../data.js";

// Función para formatear las etiquetas de los tooltips
function formatTooltip(value) {
  const date = new Date(value);
  return 'TPRI ' + date.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
} 

// config
const config = {
    type: 'bar',
    data: {
      labels: fechas,
      datasets: [{
        label: 'TPRI WhatsApp',
        data: TPRIWhatsApp,
        backgroundColor: '#8BF291',
        borderWidth: 1
      }, {
        label: 'TPR WhatsApp',
        data: TPRWhatsApp,
        backgroundColor: '#B8F28B',
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
            type: 'time',
            time: { unit: 'second', displayFormats: { second: 'HH:mm:ss' } },
            min: '2023-06-01 00:00:00',
            max: '2023-06-01 01:00:00',
            ticks: {
              stepSize: 3600
              }
            }
          },
        // Función para visualizar el valor de las etiquetas de datos.
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => formatTooltip(context.parsed.y)
            }
          }
        }
      }
    };

// Renderizarlo en el DOM
const myChart1 = new Chart(
    document.getElementById('chartWA'),
    config
  );