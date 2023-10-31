import { mesesCor, tprtWA, tprCoWA, tpritWA, tpriCoWA } from "../data.js";

let nombre = ['TPR Tec', 'TPR Com', 'TPRI Tec', 'TPRI Com'];

let tprtec = tprtWA;
let tprco = tprCoWA;
let tpritc = tpritWA;
let tprico = tpriCoWA;

let con1 = tprtec.map((num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

let con2 = tprco.map((num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});


let con3 = tpritc.map((num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

let con4 = tprico.map((num) => {
    var n = new Date(num);
    return n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
});

let items = (parametro) => {
    let mensaje = `<li align="left">${nombre[0]} <span style="font-weight:bold";>${con1[parametro.dataIndex]}</span></li>
            <li align="left">${nombre[1]} <span style="font-weight:bold";>${con2[parametro.dataIndex]}</span></li>
            <li align="left">${nombre[2]} <span style="font-weight:bold";>${con3[parametro.dataIndex]}</span></li>
            <li align="left">${nombre[3]} <span style="font-weight:bold";>${con4[parametro.dataIndex]}</span></li>`;
    return mensaje;
};

// Inicializa el gráfico
let chartWAtc = echarts.init(document.getElementById('whatsappTC'));

// Configura las opciones del gráfico
let option = {
    tooltip: {
        trigger: 'item',
        formatter: items,
    },
    legend: {
        left: 'center',
        data: ['TPRI Tec', 'TPRI Com', 'TPR Tec', 'TPR Com']
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
        data: tprtec,
        label: {
            show: false,
            position: 'top',
            formatter: (parametro) => {
                return con1[parametro.dataIndex];    //Muestra el formato hora que devuelve 'con'
            },
        }
    }, {
        name: 'TPR Com',
        type: 'bar',
        data: tprco,
        label: {
            show: false,
            position: 'top',
            formatter: (parametro) => {
                return con2[parametro.dataIndex];
            },
        }
    }, {
        name: 'TPRI Tec',
        type: 'bar',
        data: tpritc,
        label: {
            show: false,
            position: 'top',
            formatter: (parametro) => {
                return con3[parametro.dataIndex];
            },
        }
    }, {
        name: 'TPRI Com',
        type: 'bar',
        data: tprico,
        label: {
            show: false,
            position: 'top',
            formatter: (parametro) => {
                return con4[parametro.dataIndex];
            },
        }
    }]
};

// Aplica las opciones al gráfico
option && chartWAtc.setOption(option);
window.addEventListener('resize', chartWAtc.resize);