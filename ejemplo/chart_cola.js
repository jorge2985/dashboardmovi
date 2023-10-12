const fechas = ['2023-06-01', '2023-07-01', '2023-08-01', '2023-09-01'];

const convertirFecha = fechas.map(fecha => new Date(fecha).setHours(0, 0, 0, 0));

const dataCWM   = [36030, 32443, 41472, 41472];
const dataCEWC  = [10969, 8905, 7776, 7776];
const dataCCFWC = [9349, 4745, 3353, 3353];

/* GRÁFICO DE BARRAS DE WHATSAPP */
const data = {
    labels: fechas,
    datasets: [{
      label: 'Cola Whatsapp Masiva',
      data: dataCWM,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1
    },
    {
      label: 'Casos entrantes Whatsapp Comercial',
      data: dataCEWC,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      label: 'Casos Cola Fantasma Whatsapp Comercial',
      data: dataCCFWC,
      backgroundColor: 'rgba(255, 26, 104, 0.2)',
      borderColor: 'rgba(255, 26, 104, 1)',
      borderWidth: 1
    }]
  };
  
  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'month'
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  };
  
  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
  // función filtrar por fecha
  function filterDate(){
    const inicio1 = new Date(document.getElementById('inicio').value);
    const inicio  = inicio1.setHours(0, 0, 0, 0);
    const fin1 = new Date(document.getElementById('fin').value);
    const fin  = fin1.setHours(0, 0, 0, 0);
    console.log(fin);
  
    const filtrarFechas = convertirFecha.filter(fecha => fecha >= inicio && fecha <= fin)
    myChart.config.data.labels = filtrarFechas;
  
    // Mantener los datos al filtrar
    const inicioArray     = convertirFecha.indexOf(filtrarFechas[0]);
    const finArray        = convertirFecha.indexOf(filtrarFechas[filtrarFechas.length - 1]);
    
    const copiadataCWM = [...dataCWM];
    copiadataCWM.splice(finArray + 1, filtrarFechas.length);
    copiadataCWM.splice(0, inicioArray);
    myChart.config.data.datasets[0].data = copiadataCWM;
  
    const copiadataCEWC = [...dataCEWC];
    copiadataCEWC.splice(finArray + 1, filtrarFechas.length);
    copiadataCEWC.splice(0, inicioArray);
    myChart.config.data.datasets[1].data = copiadataCEWC;
  
    const copiadataCCFWC = [...dataCCFWC];
    copiadataCCFWC.splice(finArray + 1, filtrarFechas.length);
    copiadataCCFWC.splice(0, inicioArray);
    myChart.config.data.datasets[2].data = copiadataCCFWC;
    myChart.update();
  }
  
  function resetDate(){
    myChart.config.data.labels = convertirFecha;
    myChart.config.data.datasets[0].data = dataCWM;
    myChart.config.data.datasets[1].data = dataCEWC;
    myChart.config.data.datasets[2].data = dataCCFWC;
    myChart.update();
  }  