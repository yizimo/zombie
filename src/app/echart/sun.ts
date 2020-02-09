export class Sun {

  chartOption = {
    backgroundColor: '#FFFFFF',
    title: {
      text: '地图展示'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} {c}'
    },
    visualMap: {
      min: 800,
      max: 10000,
      realtime: false,
      calcuable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    },
    series: [{
      name: '地图展示',
      type: 'map',
      label: {
        show: true
      },
      data: [
        {name: '北京', value: 10000 }, {name: '天津', value: 10000 },
        {name: '上海', value: 10000 }, {name: '重庆', value: 10000 },
        {name: '河北', value: 10000 }, {name: '河南', value: 10000 },
        {name: '云南', value: 10000 }, {name: '辽宁', value: 10000 },
        {name: '黑龙江', value: 10000 }, {name: '湖南', value: 10000 },
        {name: '安徽', value: 10000 }, {name: '山东', value: 10000 },
        {name: '新疆', value: 10000 }, {name: '江苏', value: 10000 },
        {name: '浙江', value: 10000 }, {name: '江西', value: 10000 },
        {name: '湖北', value: 10000 }, {name: '广西', value: 10000 },
        {name: '甘肃', value: 10000 }, {name: '山西', value: 10000 },
        {name: '内蒙古', value: 10000 }, {name: '陕西', value: 10000 },
        {name: '吉林', value: 10000 }, {name: '福建', value: 10000 },
        {name: '贵州', value: 10000 }, {name: '广东', value: 10000 },
        {name: '青海', value: 10000 }, {name: '西藏', value: 10000 },
        {name: '四川', value: 10000 }, {name: '宁夏', value: 10000 },
        {name: '海南', value: 10000 }, {name: '台湾', value: 10000 },
        {name: '香港', value: 10000 }, {name: '澳门', value: 10000 }
      ]
    }]
  };
}
