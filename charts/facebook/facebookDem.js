import { mesesCor, casosComFB, casosTecFB } from "../data.js";

let total = [];

var chartFBDem = echarts.init(document.getElementById('facebookDem'));

const option = {
    title: {
        text: 'Demanda'
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
            name: 'Comercial',
            type: 'line',
            data: casosComFB,
            smooth: true,
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            }
        },
        {
            name: 'Tecnica',
            type: 'line',
            data: casosTecFB,
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

option && chartFBDem.setOption(option);
window.addEventListener('resize', chartFBDem.resize);