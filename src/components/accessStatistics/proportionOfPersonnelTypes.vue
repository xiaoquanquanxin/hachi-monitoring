<template>
    <div data-msg="人员类型占比" class="proportion-of-personnel-types">
        <a-card style="width: 600px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div>开门方式占比</div>
                <a-select default-value="1" :bordered="false" @change="handleChangeFn">
                    <a-icon class="suffix-icon" type="caret-down" slot="suffixIcon"/>
                    <a-select-option value="1">今日</a-select-option>
                    <a-select-option value="2">昨日</a-select-option>
                    <a-select-option value="3">本周</a-select-option>
                </a-select>
            </a-row>
            <a-divider/>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="10">
                    <div id="proportionOfPersonnelTypes"
                         data-msg="人员类型占比"
                         style="height: 280px;"
                    ></div>
                </a-col>
                <a-col :span="14">
                    <ul class="personnel-type-list">
                        <li v-for="item in proportionOfPersonnelTypesData"
                            :key="item.key"
                            class="list-item"
                        >
                            <a-row type="flex" justify="space-between" align="middle">
                                <a-icon class="item-icon" v-if="item.type === 'visitors'" type="user"
                                        :style="`color:${colorMap[item.type]}`"
                                />
                                <a-icon class="item-icon" v-if="item.type === 'resident'" type="user-delete"
                                        :style="`color:${colorMap[item.type]}`"
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
    import { c03FFCC, cFFFFFF, c4d4d4d, c929292, cBBC0F7 } from '@/utils/constants';
    import { showFalse } from '../../utils/constants';

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
                radius: ['97%', '100%'],
                avoidLabelOverlap: false,
                label: showFalse,
            },
            {
                type: 'pie',
                radius: ['77%', '80%'],
                avoidLabelOverlap: false,
                label: showFalse,
            }
        ]
    };
    export default {
        name: 'proportionOfPersonnelTypes',
        props: ['proportionOfPersonnelTypesData'],
        computed: {
            total(){
                return this.proportionOfPersonnelTypesData.reduce((prev, current) => {
                    return prev + current.value;
                }, 0);
            }
        },
        data(){
            return {
                //  设置颜色
                colorMap: {
                    //  访客
                    visitors: c03FFCC,
                    //  常驻
                    resident: cBBC0F7,
                    //  其他
                    other: c4d4d4d,
                },
            };
        },
        created(){
            this.proportionOfPersonnelTypesData.forEach((item, index) => {
                item.color = this.colorMap[item.type] || this.colorMap.other;
                item.percent = `${(item.value / this.total * 100).toFixed(2)}%`;
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionOfPersonnelTypes'));
            option.color = this.proportionOfPersonnelTypesData.map(item => item.color);
            option.title.text = this.total;
            option.title.subtext = '总计';
            //  访客
            const visitor = this.proportionOfPersonnelTypesData[0];
            //  常驻
            const resident = this.proportionOfPersonnelTypesData[1];
            option.series[0].data = [visitor, Object.assign({}, resident, { itemStyle: { color: c4d4d4d } })];
            option.series[1].data = [resident, Object.assign({}, visitor, { itemStyle: { color: c4d4d4d } })];
            console.log(option.series[0].data);
            console.log(option.series[1].data);
            myEchart.setOption(option);
        },
        methods: {
            handleChangeFn(val){

            }
        }
    };
</script>
<style scoped lang="less">
    .proportion-of-personnel-types {
        //  下拉标记
        .suffix-icon {
            color: var(--cB3B5B5);
        }
        
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
                    font-size: 1.7em;
                }
            }
        }
    }
</style>
