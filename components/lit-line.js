/**
 * 结合echarts库
 */
import { html, LitElement, css } from 'lit';
import {ref, createRef} from 'lit/directives/ref.js';
import * as echarts from 'echarts';

// 默认配置（数据）
const dimensions = ['月份', '维度1', '维度2', '维度3', '维度4'];
const source = [
  ['2019-04', 0, 10, 0, 4],
  ['2019-05', 362, 92, 1, 6],
  ['2019-06', 201, 251, 2, 7],
  ['2019-07', 484, 182, 3, 8],
  ['2019-08', 490, 310, 4, 100],
  ['2019-09', 630, 420, 5, 200],
  ['2019-10', 490, 380, 500, 100],
];
const nameList = {
  title: "折线图",
  xAxisName: 'x轴名称',
  yAxisName: 'y轴名称',
};
// 默认配置(样式)
const lineColors = ['#0082FF', '#30BFB3', '#FF7900', '#FF2200', '#666666'];
const serie = {
  type: 'line',
  symbolSize: 0,
  smooth: true,
  itemStyle: {
    color: '#0082FF',
  },
  areaStyle: {
    normal: {
      color: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: '#0082FF',
          },
          {
            offset: 1,
            color: 'rgba(255, 255, 255,1)',
          },
        ],
      },
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowBlur: 0,
      opacity: 0.3,
    },
  },
  label: {
    show: false,
  },
}


class LitLine extends LitElement {
  
  static properties = {
    width: Number,
    height: Number,
    nameList: {
      type: Object,
    },
    dimensions: {
      type: Array,

    },
    source: {
      type: Array
    }
  }

  ringRef = createRef();

  constructor() {
    super();
    this.nameList = this.nameList || nameList;
    this.dimensions = this.dimensions || dimensions;
    this.source = this.source || source;
  }

  firstUpdated() {
    var chartDom = this.ringRef.value;
    var myChart = echarts.init(chartDom, null, {
      width: this.width || 800,
      height: this.height || 400
    });

    const series = this.dimensions.slice(1).map((dimension, idx) => {
      const currentSerie = JSON.parse(JSON.stringify(serie));
      currentSerie.itemStyle.color = lineColors[idx];
      currentSerie.areaStyle.normal.color.colorStops[0].color = lineColors[idx];
      return currentSerie;
    });

    const option = {
      dataset: {
        dimensions: this.dimensions,
        source: this.source,
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            show: true,
          },
          boundaryGap: true,
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 2,
            lineStyle: {
              color: '#C4CBD5',
              width: 1,
            },
          },
          axisLabel: {
            show: true,
            align: 'center',
            margin: 4,
          },
          name: this.nameList.xAxisName,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 12,
            color: '#7F858C',
            align: 'center',
            padding: [8, 0, 0, 0],
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: true,
          },
          boundaryGap: true,
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 2,
            lineStyle: {
              color: '#C4CBD5',
              width: 1,
            },
          },
          axisLabel: {
            show: true,
            margin: 8,
            textStyle: {
              color: '#666',
              fontSize: 14,
            },
            align: 'right',
            verticalAlign: 'bottom',
          },
          name: this.nameList.yAxisName,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 12,
            padding: [0, 0, 22, 0],
          },
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
      series,
      legend: {
        icon: 'roundRect',
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 24,
        left: 'center',
        orient: 'horizontal',
        bottom: 10,
        textStyle: {
          fontSize: 16,
        },
      },
      title: {
        text: this.nameList.title,
        textStyle: {
          fontSize: 16,
          color: '#1C2026',
        },
        left: 20,
        top: 20,
        zlevel: 3,
      },
    };
    
    option && myChart.setOption(option);
  }

  render() {
    return html`
    <div ${ref(this.ringRef)}></div>
  `;
  }
}

!customElements.get('lit-line') && customElements.define('lit-line', LitLine);

export default LitLine;