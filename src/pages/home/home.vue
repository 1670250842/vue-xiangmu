<template>
  <div>
      <div id="main" style="width:800px; height:400px; border:1px dashed #ccc" ></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      list:'classify/list'
    })
  },
  data() {
    return {};
  },
  methods:{
   ...mapActions({
      requestClassifyList:'classify/requestClassifyList'
    })
  },
  watch:{
    list:{
      handler(){
            // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data:this.list.map(item=>{return item.catename} )
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: this.list.map(item=>{return item.children?item.children.length:0})
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
  },
  mounted(){
   
    // this.requestClassifyList()
     
    // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data:this.list.map(item=>{return item.catename} )
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: this.list.map(item=>{return item.children?item.children.length:0})
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  }
};
</script>
<style>
</style>