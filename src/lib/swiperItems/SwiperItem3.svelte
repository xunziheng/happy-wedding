<div>
  <div id="china_chart"></div>
</div>

<script lang='ts'>
  import * as echarts from 'echarts';
  import { onMount } from 'svelte';
  import 'echarts/map/js/china.js'
  
  onMount(() => {
    var china_chart = echarts.init(document.getElementById('china_chart'));

    var data = [{
      name: '江苏',
      value: 1
    }, {
      name: '北京',
      value: 34
    }, {
      name: '上海',
      value: 68
    }, {
      name: '重庆',
      value: 23
    }, {
      name: '河北',
      value: 34
    }, {
      name: '河南',
      value: 32
    }, {
      name: '云南',
      value: 16
    }, {
      name: '辽宁',
      value: 43
    }, {
      name: '黑龙江',
      value: 41
    }, {
      name: '湖南',
      value: 24
    }, {
      name: '安徽',
      value: 33
    }, {
      name: '山东',
      value: 54
    }, {
      name: '新疆',
      value: 1
    }, {
      name: '浙江',
      value: 44
    }, {
      name: '江西',
      value: 22
    }, {
      name: '湖北',
      value: 21
    }, {
      name: '广西',
      value: 30
    }, {
      name: '甘肃',
      value: 12
    }, {
      name: '山西',
      value: 32
    }, {
      name: '内蒙古',
      value: 35
    }, {
      name: '陕西',
      value: 25
    }, {
      name: '吉林',
      value: 45
    }, {
      name: '福建',
      value: 28
    }, {
      name: '贵州',
      value: 18
    }, {
      name: '广东',
      value: 37
    }, {
      name: '青海',
      value: 16
    }, {
      name: '西藏',
      value: 14
    }, {
      name: '四川',
      value: 33
    }, {
      name: '宁夏',
      value: 18
    }, {
      name: '海南',
      value: 19
    }, {
      name: '台湾',
      value: 11
    }, {
      name: '香港',
      value: 11
    }, {
      name: '澳门',
      value: 11
    }];

    var option = {
      title: {
        show: false,
        text: '',
      },
      tooltip: {
        //悬浮弹框
        show: true,
        formatter: '{b}:{c}条祝福',
      },
      visualMap: [{
        //visualMap 是视觉映射组件，用于进行『视觉编码 visualMap：图注样式定制，其中包括color范围，文字提示
        // type:'continuous',//连续型视觉映射组件 type: 'piecewise',//类型为连续型
        type: 'piecewise', //分段型视觉映射组件
        // orient: 'horizontal',//如何放置 visualMap 组件，水平（'horizontal'）或者竖直（'vertical'）。
        // itemWidth: 40,
        // itemHeight: 20,
        // text: ['高', '低'],
        // min: 1,//最小值区域  小于1  显示的green
        // max: 60,//大于4显示 red       剩余是中间区域blue 左右叠色
        // inRange: {
        //     color: ['green','red','yellow']
        // },
        // bottom: 30,
        // left: 'left',
      }],
      geo: { //地理坐标系组件 geo:定义地图为china 常用zoom
        map: 'china', //地图类型。ECharts 3 中因为地图精度的提高，不再内置地图数据增大代码体积 map/js/china.js
        // zoom:1,//视角缩放比例  
        label: {
          show: false
        },
        emphasis: { //高亮
          label: { //地图的标签名字
            show: true
          },
          itemStyle: { //区域样式 hover样式
            areaColor: '#ffe2e2'
          }
        }
      },
      series: [{
        name: '祝福地图',
        type: 'map', //地图
        geoIndex: 0, //映射visualMap 颜色配置
        data: data
      }]
    };

    china_chart.setOption(option);
  })
</script>

<style>
  #china_chart {
    width: 100vw;
    height: 80vw;
  }
</style>