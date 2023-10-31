import { mesesCor, tprcTecFB } from "../data.js";

const tprcTec = tprcTecFB;

let tiempo1 = tprcTec.map((num) => {
    let n = new Date(num);
    return n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
});

let chartFBtprc = echarts.init(document.getElementById("facebookTPRC"));

const option = {
    legend: {
        left: 'center',
        data: ['TPRC Tecnica']
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
        name: 'TPRC Tecnica',
        type: 'bar',
        itemStyle: {
            offset: 1,
            color: '#055C9D'
        },
        data: tprcTec,
        markpoint: {
            data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
            ]
        },
        label: {
            show: true,
            position: 'top',
            formatter: (parametro) => {
                return tiempo1[parametro.dataIndex];    //Muestra el formato hora que devuelve 'con'
            },
        }
    }, {
        type: 'line',
        data: tprcTec,
        smooth: true,
        itemStyle: {
            color: '#003060'
        }
    }]
};

option && chartFBtprc.setOption(option);
window.addEventListener('resize', chartFBtprc.resize);