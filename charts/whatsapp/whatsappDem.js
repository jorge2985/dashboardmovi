import { mesesCor, casosComWA, casosTecWA } from '../data.js';

let chartWADem = echarts.init(document.getElementById('whatsappDem'));

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
            data: casosComWA,
            smooth: true,
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            }
        },
        {
            name: 'Técnica',
            type: 'line',
            data: casosTecWA,
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

option && chartWADem.setOption(option);
window.addEventListener('resize', chartWADem.resize);