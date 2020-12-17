<template>
    <div class="ladder-control-call-type" data-msg="梯控呼叫类型">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">访客种类占比</div>
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
            <div id="ladderControlCallType"
                 data-msg="梯控呼叫类型占比饼图"
                 style="height: 320px;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { ladderControlCallTypeData } from '../../utils/staticData';
    import { init } from 'echarts';
    import {
        c03FFCC,
        cFFFFFF,
        c929292,
        c373A3E,
        cBBBBBB,
        c25292E,
    } from '@/utils/constants';

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
            top: '138px',
        },
        series: [
            {
                type: 'pie',
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                top: '12%',
                bottom: '12%',
                left: 'center',
                label: {
                    show: true,
                    color: cFFFFFF,
                    formatter(item){
                        const { percent, name, value } = item;
                        return `{per|${percent|0}%}\n{name|${name}}\t{num|${value}}`;
                    },
                    rich: {
                        per: {
                            color: cFFFFFF,
                            lineHeight: 24,
                            verticalAlign: 'top',
                            fontSize: 18,
                        },
                        name: {
                            color: cBBBBBB,
                            fontSize: 10,
                        },
                        num: {
                            color: cBBBBBB,
                            fontSize: 10,
                        },

                    },
                    //  文字与 线 之间的距离。
                    distanceToLabelLine: -50,
                },
                labelLine: {
                    length: 16,
                    length2: 64,
                    lineStyle: {
                        color: c373A3E,
                    }
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: c25292E,
                },
            }
        ]
    };
    export default {
        name: 'percentageOfVisitorsByType',
        computed: {
            totalNumber(){
                return this.ladderControlCallTypeData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        data(){
            return {
                //  激活的面板
                activeIndex: 0,
                ladderControlCallTypeData: null,
            };
        },
        created(){
            this.ladderControlCallTypeData = ladderControlCallTypeData;
        },
        mounted(){
            const myEchart = init(document.getElementById('ladderControlCallType'));
            option.series[0].data = this.ladderControlCallTypeData;
            option.color = [c03FFCC, cFFFFFF, c929292];
            option.title.text = this.totalNumber;
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
    
    .ladder-control-call-type {
    
    }
</style>


