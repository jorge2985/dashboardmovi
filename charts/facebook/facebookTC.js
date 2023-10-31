import { mesesCor, tprTecFB, tpriTecFB } from "../data.js";

let nombre = ['TPR Tec', 'TPRI Tec'];
let total = [];

let tprTec = tprTecFB;
let tpriTec = tpriTecFB;

// Convierte los números en formato hh:mm:ss
let tiempo1 = tprTec.map((num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

let tiempo2 = tpriTec.map((num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

// Inicializa el gráfico
let chartFBtc = echarts.init(document.getElementById('facebookTC'));

// Configura lo que se visualiza del chart
const option = {
    legend: {
        left: 'center',
        data: nombre
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
        name: 'TPR Tec',
        type: 'bar',
        itemStyle: {
            offset: 1,
            color: '#68BBE3'
        },
        data: tprTec,
        label: {
            show: true,
            position: 'top',
            formatter: (parametro) => {
                return tiempo1[parametro.dataIndex];    //Muestra el formato hora que devuelve 'con'
            },
        }
    }, {
        name: 'TPRI Tec',
        type: 'bar',
        itemStyle: {
            offset: 1,
            color: '#0E86D4'
        },
        data: tpriTec,
        label: {
            show: true,
            position: 'top',
            formatter: (parametro) => {
                return tiempo2[parametro.dataIndex];
            },
        }
    }]
};

// Aplica las opciones al gráfico
option && chartFBtc.setOption(option);
window.addEventListener('resize', chartFBtc.resize);

/*
brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack']
            },
            dataView: {}
        }
    },
*/