<template>
    <div class="area-of" data-msg="区域占比">
        <a-card style="width: 600px;"
                :bordered="false"
        >
            <h2 class="card-component-title">区域占比</h2>
            <a-divider/>
            <div>主要区域占比</div>
            <a-row type="flex" justify="space-between" align="middle" class="information-chart">
                <a-col :span="8">
                    <div id="proportionOMajorRegionsPie"
                         data-msg="主要区域占比饼图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
                <a-col :span="16">
                    <div id="proportionOMajorRegionsBar"
                         data-msg="主要区域占比条形图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
            </a-row>
            <a-divider/>
            <h2 class="card-component-title">其他地区占比</h2>
            <br>
            <a-row type="flex" justify="space-between" align="middle" class="other-list"
                   v-for="(item,index) in otherRegionsData"
                   :key="index"
            >
                <a-col v-for="_item in item"
                       :key="_item.key"
                       :span="4"
                       class="other-list-item"
                >
                    <span v-show="_item.name" class="item-name">{{_item.name}}</span>
                    &emsp;
                    <span v-show="_item.name">{{(_item.value / otherAreaTotal *100).toFixed(0)}}%</span>
                </a-col>
            </a-row>
            <a-divider/>
            <h2 class="card-component-title">名族结构</h2>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col v-for="item in ethnicStructureData"
                       :key="item.key"
                       :span="6"
                       class="item-ethnic"
                       :style="`color:${item.color}`"
                >
                    <div>
                        <span class="item-label" :style="`background-color:${item.color}`"></span>
                        <span class="item-name">{{item.name}}</span>
                    </div>
                    <b class="item-rate">{{item.rate}}%</b>
                    <div class="item-value">{{item.value}}</div>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { proportionOMajorRegionsData, otherRegionsData, ethnicStructureData } from '../../utils/staticData';
    import { init } from 'echarts';
    import {
        c03FFCC,
        c929292,
        cFFFFFF,
        c25292E,
        c095B55,
        c4D4D4D,
        c373A3E,
        cBBC0F7,
        showFalse,
        grid,
    } from '../../utils/constants';

    const option = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '32px'
            },
            subtext: '总计',
            subtextStyle: {
                color: c929292,
            },
            left: 'center',
            top: '68px',
        },
        color: [],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['74%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: c25292E,
                }
            }
        ]
    };
    const option1 = {
        grid: Object.assign({}, grid, { top: '6%', left: '90px', right: '8%' }),
        xAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: c373A3E,
                }
            },
            axisLine: showFalse,
            axisTick: showFalse,
        },
        yAxis: {
            type: 'category',
            inverse: true,
            axisTick: showFalse,
            axisLine: showFalse,
            axisLabel: {
                fontSize: 12,
                lineHeight: 24,
                color: cFFFFFF,
                margin: 15,
                formatter: (value) => {
                    return value;
                }
            },
        },
        color: [c03FFCC],
        series: [{
            type: 'bar',
            barWidth: 10,
            label: {
                fontSize: 12,
                show: true,
                position: ['-80px', 0],
                color: c929292,
                formatter: '{b}',
            },
        }]
    };

    export default {
        name: 'areaOf',
        computed: {
            //  总计
            totalAmount(){
                return this.proportionOMajorRegionsData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            },
            //  其他地区总计
            otherAreaTotal(){
                if (!this.otherRegionsData) {
                    return 0;
                }
                let total = 0;
                this.otherRegionsData.forEach(item => {
                    item.forEach(_item => {
                        total += _item.value || 0;
                    });
                });
                return total;
            },
            //  名族总计
            ethnicTotal(){
                return this.ethnicStructureData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        data(){
            return {
                proportionOMajorRegionsData: null,
                otherRegionsData: null,
                ethnicStructureData: null,
            };
        },
        created(){
            //  主要区域占比
            this.proportionOMajorRegionsData = proportionOMajorRegionsData;
            //  其他区域占比
            this.otherRegionsData = [];
            const _otherRegionsData = JSON.parse(JSON.stringify(otherRegionsData));
            while (_otherRegionsData.length) {
                this.otherRegionsData.push(_otherRegionsData.splice(0, 5));
            }
            //  补全最后一个
            const last = this.otherRegionsData[this.otherRegionsData.length - 1];
            const lastLength = last.length;
            if (lastLength !== 5) {
                last.length = 5;
                last.fill(0, lastLength);
            }
            console.log(this.otherRegionsData);
            //  名族结构
            this.ethnicStructureData = ethnicStructureData;
            const ethnicColorList = [c03FFCC, cBBC0F7, c929292, cFFFFFF,];
            const ethnicTotal = this.ethnicTotal;
            this.ethnicStructureData.forEach((item, index) => {
                item.color = ethnicColorList[index];
                item.rate = (item.value / ethnicTotal * 100).toFixed(0);
            });
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c095B55, c929292, c4D4D4D];
            const totalAmount = this.totalAmount;
            this.proportionOMajorRegionsData.forEach((item, index) => {
                item.color = colorList[index];
                item.itemStyle = item.itemStyle || {};
                item.label = item.label || {};
                item.label.color = c929292;
                item.itemStyle.color = item.color;
                item.percent = `${(item.value / totalAmount * 100).toFixed(0)}`;
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionOMajorRegionsPie'));
            option.series[0].data = this.proportionOMajorRegionsData;
            option.color = this.proportionOMajorRegionsData.map(item => item.color);
            option.title.text = this.totalAmount;
            myEchart.setOption(option);

            const myEchart1 = init(document.getElementById('proportionOMajorRegionsBar'));
            option1.series[0].data = this.proportionOMajorRegionsData;
            option1.yAxis.data = this.proportionOMajorRegionsData;
            //  console.log(JSON.parse(JSON.stringify(this.proportionOMajorRegionsData)));
            myEchart1.setOption(option1);
        },
    };
</script>
<style scoped lang="less">
    .area-of {
        //  其他区域
        .other-list {
            line-height: 3em;
            background-color: var(--c2C3034);
            margin-bottom: .6em;
            
            .other-list:last-child {
                margin-bottom: 0;
            }
            
            .other-list-item {
                text-align: center;
                
                .item-name {
                    color: var(--cB3B5B5);
                }
            }
        }
        
        //  名族结构
        .item-ethnic {
            padding: .8em 0 .8em 2em;
            border-right: 1px solid var(--border-color-split);
            
            &:last-child {
                border-right: none;
            }
            
            .item-label {
                display: inline-block;
                width: 10px;
                height: 4px;
                vertical-align: middle;
                margin-right: .4em;
            }
            
            .item-name {
                font-size: 12px;
                color: var(--cB3B5B5);
            }
            
            .item-rate {
                font-size: 36px;
            }
            
            .item-value {
                font-size: 20px;
            }
        }
    }
</style>