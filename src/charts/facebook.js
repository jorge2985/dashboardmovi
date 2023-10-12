// import { Chart } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.register(ChartDataLabels);

import { fechas, TPRIFacebook, TPRFacebook } from "../data.js";

// Función para formatear las etiquetas de los tooltips
function formatTooltip(value) {
  const date = new Date(value);
  return 'TPRI ' + date.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

const config = {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: fechas,
    datasets: [{
      label: 'TPRI Facebook',
      data: TPRIFacebook
    }, {
      label: 'TPR Facebook',
      data: TPRFacebook
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
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => formatTooltip(context.parsed.y)
        }
      },
      datalabels: {
        formatter: (dato) => dato,
      }
    }
  }
};

const fbChart = new Chart(
  document.getElementById('chartFB'),
  config
);