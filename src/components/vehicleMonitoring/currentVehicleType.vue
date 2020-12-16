<template>
    <div class="current-vehicle-type" data-msg="当前车辆类型">
        <a-card style="width: 290px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div class="card-component-title">当前车辆类型</div>
                <a-select default-value="1" :bordered="false" @change="handleChangeFn">
                    <a-icon class="suffix-icon" type="caret-down" slot="suffixIcon"/>
                    <a-select-option value="1">今日</a-select-option>
                    <a-select-option value="2">昨日</a-select-option>
                    <a-select-option value="3">本周</a-select-option>
                </a-select>
                <a-divider/>
            </a-row>
            <div id="currentVehicleType"
                 data-msg="当前车辆类型"
                 style="height: 160px;"
            >
            </div>
            <div class="list">
                <div v-for="item in currentVehicleTypeData"
                     :key="item.key"
                     align="middle"
                     class="list-item"
                >
                    <a-row type="flex" justify="space-between" align="middle">
                        <a-col :span="6" class="list-item-label">
                            <a-row type="flex" justify="space-between" align="middle">
                                <div class="legend" :style="`backgroundColor:${item.color}`"></div>
                                <span>{{item.name}}</span>
                            </a-row>
                        </a-col>
                        <span>{{item.value}}</span>
                        <span>{{item.value}}</span>
                    </a-row>
                </div>
            </div>
        </a-card>
    </div>
</template>
<script>
    import { currentVehicleTypeData } from '@/utils/staticData';
    import { init } from 'echarts';
    import { c03FFCC, c929292, cFFFFFF, c25292E, } from '../../utils/constants';

    const option = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '32px'
            },
            subtext: '总车辆',
            subtextStyle: {
                color: c929292,
            },
            left: 'center',
            top: '68px',
        },
        color: [],
        series: [
            {
                type: 'pie',
                radius: ['92%', '100%'],
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

    export default {
        name: 'currentVehicleType',
        computed: {
            //  总人数
            totalVehicle(){
                return this.currentVehicleTypeData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        data(){
            return {
                currentVehicleTypeData: null,
            };
        },
        created(){
            this.currentVehicleTypeData = currentVehicleTypeData;
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c929292];
            currentVehicleTypeData.forEach((item, index) => {
                item.color = colorList[index];
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('currentVehicleType'));
            option.series[0].data = this.currentVehicleTypeData;
            option.color = this.currentVehicleTypeData.map(item => item.color);
            option.title.text = this.totalVehicle;
            this.currentVehicleTypeData.forEach(item => {
                item.percent = `${(item.value / this.totalVehicle).toFixed(0)}%`;
            });
            myEchart.setOption(option);
        },
        methods: {
            handleChangeFn(val){

            }
        }
    };
</script>
<style scoped lang="less">
    .current-vehicle-type {
        .list {
            margin-top: 2em;
            
            .list-item {
                line-height: 3em;
                border-bottom: 1px solid var(--border-color-split);
                
                &:last-child {
                    border-bottom: none;
                }
                
                .list-item-label {
                }
            }
        }
    }
</style>
