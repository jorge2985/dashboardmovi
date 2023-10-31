import { mesesCor, productividad } from "../data.js";

let produ = productividad;

const chartProdu = echarts.init(document.getElementById("productividad"));

const option = {
    title: {},
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [{
        name: 'Productividad',
        type: 'pie',
        radius: [35, 80],
        roseType: 'radius',
        data: [
            {value: produ[0], name: mesesCor[0]},
            {value: produ[1], name: mesesCor[1]},
            {value: produ[2], name: mesesCor[2]},
            {value: produ[3], name: mesesCor[3]},
            {value: produ[4], name: mesesCor[4]},
        ],
        label: {
            show: true
        },
        emphasis: {
            label: {
              show: true
            }
        },
    }]
};

option && chartProdu.setOption(option);
window.addEventListener('resize', chartProdu.resize);