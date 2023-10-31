import { mesesCor, tprcFB, tprcWA } from "./data.js";   

var con1 = tprcFB.map( (num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

var con2 = tprcWA.map( (num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

// Inicializa el gráfico
var charttprc = echarts.init(document.getElementById('tprc'));

// Configura las opciones del gráfico
var option = {
    title: {
        left: 'left',
        text: 'TPRC',
        show: false,
    },
    tooltip: {
        trigger: 'item',
        formatter: (parametro) => {
            return con1[parametro.dataIndex]
        }
    },
    legend: {
        left: 'center',
        data: ['TPRC Facebook', 'TPRC WhatsApp'],
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
        max: '2023-01-01 02:00:00',
        },
    series: [{
        name: 'TPRC Facebook',
        type: 'line',
        data: tprcFB,
        label: {
            show: true,
            position: 'top',
            formatter: (parametro) => {
                return con1[parametro.dataIndex];    //Muestra el formato hora que devuelve 'con'
            },
        },
        smooth: true
    }, {
        name: 'TPRC WhatsApp',
        type: 'line',
        data: tprcWA,
        label: {
            show: true,
            position: 'top',
            formatter: (parametro) => {
                return con2[parametro.dataIndex];    //Muestra el formato hora que devuelve 'con'
            },
        },
        smooth: true
    }]
};

// Aplica las opciones al gráfico
option && charttprc.setOption(option);
window.addEventListener('resize', charttprc.resize);