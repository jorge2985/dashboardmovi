import { mesesCor, tprcTecWA, tprcComWA } from "../data.js";

const tprcTec = tprcTecWA;
const tprcCom = tprcComWA;

let tiempo1 = tprcTec.map((num) => {
    let n = new Date(num);
    return n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
});

let tiempo2 = tprcCom.map((num) => {
    let n = new Date(num);
    return n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
});

let chartWAtprc = echarts.init(document.getElementById("whatsappTPRC"));

const option = {
    legend: {
        left: 'center',
        data: ['TPRC Tecnica', 'TPRC Comercial']
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
        name: 'TPRC Tecnica',
        type: 'bar',
        itemStyle: {
            offset: 1,
            color: '#76B947'
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
        name: 'TPRC Comercial',
        type: 'bar',
        itemStyle: {
            offset: 1,
            color: '#98D7C2'
        },
        data: tprcCom,
        label: {
            show: true,
            position: 'top',
            formatter: (parametro) => {
                return tiempo2[parametro.dataIndex];
            },
        }
    }]
};

option && chartWAtprc.setOption(option);
window.addEventListener('resize', chartWAtprc.resize);