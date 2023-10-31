import { mesesCor, TPRFBnum, TPRIFBnum } from "../data.js";

var TPR = TPRFBnum;
var TPRI = TPRIFBnum;

var con1 = TPR.map( (num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

var con2 = TPRI.map( (num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
})

// Inicializa el gráfico
var chartFB = echarts.init(document.getElementById('facebook'));

// Configura las opciones del gráfico
var option = {
    title: {
        left: 'left',
        text: 'Facebook',
    },
    legend: {
        left: 'center',
        data: ['TPR', 'TPRI']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: mesesCor,
    },
    yAxis: {
        type: 'time',
        min: '2023-01-01 00:00:00',
        max: '2023-01-01 01:00:00',
        },
    series: [{
        name: 'TPR',
        type: 'bar',
        data: TPR,
        label: {
            show: true,
            position: 'top',
            formatter: (parametro) => {
                return con1[parametro.dataIndex];    //Muestra el formato hora que devuelve 'con'
            },
        }
    }, {
        name: 'TPRI',
        type: 'bar',
        data: TPRI,
        label: {
            show: true,
            position: 'top',
            formatter: (parametro) => {
                return con2[parametro.dataIndex];
            },
        }
    }]
};

// Aplica las opciones al gráfico
option && chartFB.setOption(option);
window.addEventListener('resize', chartFB.resize);