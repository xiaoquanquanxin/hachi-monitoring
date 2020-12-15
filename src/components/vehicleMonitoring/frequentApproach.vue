<template>
    <div class="frequent-approach" data-msg="停车场信息">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span='9'>
                    <a-row type="flex" justify="space-between" align="middle">
                        <div :class="{'custom-label':true,'active-label':activeIndex===0}"
                             @click="setActiveIndex(0)"
                        >频繁进场（次）
                        </div>
                        <div :class="{'custom-label':true,'active-label':activeIndex===1}"
                             @click="setActiveIndex(1)"
                        >夜访车辆（次）
                        </div>
                    </a-row>
                </a-col>
                <a-col :span="3">
                    <a-row type="flex" justify="space-between" align="middle">
                        <div :class="{'custom-label':true,'active-label':activeIndex===0}"
                             @click="setActiveIndex(0)"
                        >今日
                        </div>
                        <div :class="{'custom-label':true,'active-label':activeIndex===1}"
                             @click="setActiveIndex(1)"
                        >7日
                        </div>
                    </a-row>
                </a-col>
            </a-row>
            <a-divider/>
            <div id="frequentApproach"
                 data-msg="停车场信息"
                 style="height: 320px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { frequentApproachData } from '../../utils/staticData';
    import { init } from 'echarts';
    import { c03FFCC, cFFFFFF, c929292, showFalse, grid, } from '../../utils/constants';

    const typeMap = {
        1: '固定车',
        2: '临时车',
    };
    const option = {
        grid: Object.assign({}, grid, { top: '6%', left: '90px' }),
        color: [c03FFCC,],
        dataZoom: {
            type: 'inside',
            start: 0,
            end: 50,
            zoomLock: true,
            orient: 'vertical',
        },
        xAxis: {
            type: 'value',
            splitLine: showFalse,
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
                color: c929292,
                margin: 15,
                formatter: (value) => {
                    return typeMap[value];
                }
            },
        },
        series: [{
            type: 'bar',
            barWidth: 6,
            data: [1, 2, 3, 34, 5, 66,],
            label: {
                fontSize: 12,
                show: true,
                position: ['-120px', -4],
                color: cFFFFFF,
                formatter: '{b}',
            },
        }]
    };

    export default {
        name: 'frequentApproach',
        data(){
            return {
                frequentApproachData: null,
                //  激活的面板
                activeIndex: 0,
            };
        },
        created(){
            this.frequentApproachData = frequentApproachData;
        },
        mounted(){
            const myEchart = init(document.getElementById('frequentApproach'));
            option.series[0].data = this.frequentApproachData;
            option.yAxis.data = this.frequentApproachData.map(item => item.type);
            option.xAxis.data = this.frequentApproachData.map(item => item.type);
            myEchart.setOption(option);

        },
        methods: {
            setActiveIndex(activeIndex){
                this.activeIndex = activeIndex;
            }
        }
    };
</script>
<style scoped lang="less">
    @import '~@/css/custom-tab.less';
    
    .frequent-approach {
    
    }
</style>
