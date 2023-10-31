import { mesesCor, tpriWAnum, tprWAnum } from "../data.js";

var tpr = tprWAnum;
var tpri = tpriWAnum;

let con1 = tpr.map( (num) => {
    let n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

var con2 = tpri.map( (num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
})

// Inicializa el gráfico
let chartFB = echarts.init(document.getElementById('whatsapp'));

// Configura las opciones del gráfico
var option = {
    title: {
        left: 'left',
        text: 'WhatsApp',
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
        data: tpr,
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
        data: tpri,
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