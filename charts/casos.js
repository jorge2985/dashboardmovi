import { mesesCor, privadoFB, casosWA } from './data.js'

// El parámetro 'dark' dentro de la función echarts.init() brinda un fondo oscuro al container.
var chartCasos = echarts.init(document.getElementById('totalcasos'));

let total = [];

for (let i = 0; i < mesesCor.length; i++) {
  const suma = privadoFB[i] + casosWA[i];
  total[i] = suma;
}

var option = {
  // 'legend' muestra el nombre de las series aunque este vacío.
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: mesesCor
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: "Total",
      type: 'bar',
      // La condición 'stack' con valor 'total' apila las columnas
      stack: 'total',
      label: { show: true },
      emphasis: { focus: 'series' },
      data: total
    },
    {
      name: 'Casos Facebook',
      type: 'bar',
      stack: 'total',
      label: { show: true },
      // 'emphasis' enfatiza el valor del eje seleccionado. Oculta el resto.
      emphasis: { focus: 'series' },
      data: privadoFB
    },
    {
      name: "Casos WhatsApp",
      type: 'bar',
      stack: 'total',
      label: { show: true },
      emphasis: { focus: 'series' },
      data: casosWA
    }
  ]
};

option && chartCasos.setOption(option);
window.addEventListener('resize', chartCasos.resize);