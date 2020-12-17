<template>
    <div data-msg="当前梯控状态" class="current-ladder-control-status">
        <a-card style="width: 600px"
                :bordered="false">
            <div class="card-component-title">当前梯控状态</div>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="10">
                    <div id="currentLadderControlStatus"
                         data-msg="当前梯控状态"
                         style="height: 320px;"
                    ></div>
                </a-col>
                <a-col :span="14">
                    <ul class="personnel-type-list">
                        <li v-for="item in currentLadderControlStatusData"
                            :key="item.key"
                            class="list-item"
                        >
                            <a-row type="flex" justify="space-between" align="middle">
                                <a-icon class="item-icon"
                                        :style="`color:${colorMap[item.type]}`"
                                        :type="iconMap[item.type]"
                                />
                                <div class="item-value-wrap"
                                     :style="`color:${colorMap[item.type]}`">
                                    <div class="item-value">{{item.value}}</div>
                                    <div>{{item.name}}</div>
                                </div>
                                <b class="item-percent">{{item.percent}}</b>
                            </a-row>
                        </li>
                    </ul>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import { c03FFCC, cFFFFFF, c4D4D4D, c929292, cBBC0F7, cE56B6B } from '@/utils/constants';
    import { showFalse } from '../../utils/constants';
    import { currentLadderControlStatusData } from '../../utils/staticData';

    const option = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '24px',
            },
            subtext: '总计',
            subtextStyle: {
                color: c929292,
            },
            left: '49%',
            top: '42%',
            textAlign: 'center'
        },
        series: [
            {
                type: 'pie',
                radius: ['96%', '100%'],
                avoidLabelOverlap: false,
                label: showFalse,
            },
            {
                type: 'pie',
                radius: ['76%', '80%'],
                avoidLabelOverlap: false,
                label: showFalse,
            },
            {
                type: 'pie',
                radius: ['56%', '60%'],
                avoidLabelOverlap: false,
                label: showFalse,
            }
        ]
    };
    export default {
        name: 'currentLadderControlStatus',
        computed: {
            total(){
                return this.currentLadderControlStatusData.reduce((prev, current) => {
                    return prev + current.value;
                }, 0);
            }
        },
        data(){
            return {
                currentLadderControlStatusData: null,
                //  设置颜色
                colorMap: {
                    //  空闲
                    free: c03FFCC,
                    //  忙碌
                    busy: cBBC0F7,
                    //  故障
                    fault: cE56B6B,
                    //  其他
                    other: c4D4D4D,
                },
                //  设置icon
                iconMap: {
                    //  空闲
                    free: 'control',
                    //  忙碌
                    busy: 'control',
                    //  故障
                    fault: 'control',
                }
            };
        },
        created(){
            this.currentLadderControlStatusData = currentLadderControlStatusData;
            this.currentLadderControlStatusData.forEach((item, index) => {
                item.color = this.colorMap[item.type] || this.colorMap.other;
                item.percent = `${(item.value / this.total * 100).toFixed(0)}%`;
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('currentLadderControlStatus'));
            option.color = this.currentLadderControlStatusData.map(item => item.color);
            option.title.text = this.total;
            option.title.subtext = '总计';
            //  其他灰色的
            const other = { itemStyle: { color: c4D4D4D } };
            //  数据
            const free = this.currentLadderControlStatusData[0];
            const busy = this.currentLadderControlStatusData[1];
            const fault = this.currentLadderControlStatusData[2];
            const total = this.total;
            option.series[0].data = [free, Object.assign({ value: total - free.value }, other)];
            option.series[1].data = [busy, Object.assign({ value: total - busy.value }, other)];
            option.series[2].data = [fault, Object.assign({ value: total - fault.value }, other)];
            myEchart.setOption(option);
        },
    };
</script>
<style scoped lang="less">
    .current-ladder-control-status {
        
        //  列表
        .personnel-type-list {
            padding: 0 2em;
            
            .list-item {
                line-height: 6em;
                border-bottom: 1px solid var(--border-color-split);
                
                &:last-child {
                    border-bottom: none;
                }
                
                .item-icon {
                    font-size: 2em;
                }
                
                .item-value-wrap {
                    text-align: center;
                    line-height: 1.7em;
                    
                    .item-value {
                        font-size: 2em;
                    }
                }
                
                .item-percent {
                    font-size: 2.4em;
                }
            }
        }
    }
</style>
