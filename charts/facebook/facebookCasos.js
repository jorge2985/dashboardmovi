import { mesesCor, privadoFB, publicoFB } from "../data.js";

let chartFBCasos = echarts.init(document.getElementById('fbcasos'));

const option = {
    title: {
        text: 'Casos Facebook'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: { left: 'right' },
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
        type: 'value',
        axisLabel: { show: false }
    },
    series: [
        {
            name: 'Privados',
            type: 'line',
            data: privadoFB,
            smooth: true,
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            }
        },
        {
            name: 'Público',
            type: 'line',
            data: publicoFB,
            smooth: true,
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            }
        }
    ]
};

option && chartFBCasos.setOption(option);
window.addEventListener('resize', chartFBCasos.resize);

/* 
Sirve para mostrar el menú de descarga de imagen:
toolbox: {
    show: true,
    feature: {
        dataZoom: {
            yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
    }
},
*/