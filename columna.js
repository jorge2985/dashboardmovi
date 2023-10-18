var chartDom = document.getElementById('columna');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'TPR',
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 200, 150, 80, 70, 110, 130]
    }
  ]
};

option && myChart.setOption(option);
