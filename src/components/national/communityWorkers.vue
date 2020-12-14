<template>
    <div class="community-workers">
        <a-card style="width: 445px"
                :bordered="false">
            <p>社区人员</p>
            <a-divider/>
            <p>社区人口类型占比</p>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="10">
                    <div id="proportionOfCommunityPopulationType"
                         data-msg="社区人口类型占比饼图"
                         style="height: 180px;"
                    >
                    </div>
                </a-col>
                <a-col :span="14" class="list">
                    <div v-for="item in communityWorkersData"
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
                        </a-row>
                    </div>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import { c03FFCC, c929292, cFFFFFF } from '../../utils/constants';

    const option = {
        tooltip: false,
        title: {
            textStyle: {
                color: cFFFFFF,
                fontSize: '32px'
            },
            subtext: '总人数',
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
                    borderColor: '#202428',
                }
            }
        ]
    };

    export default {
        name: 'basicInfoStatistical',
        props: ['communityWorkersData'],
        computed: {
            //  总人数
            totalPeopld(){
                return this.communityWorkersData.reduce(((prev, item) => {
                    return prev + item.value;
                }), 0);
            }
        },
        created(){
            //  设置颜色
            const colorList = [c03FFCC, cFFFFFF, c929292];
            this.communityWorkersData.forEach((item, index) => {
                item.color = colorList[index];
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionOfCommunityPopulationType'));
            option.series[0].data = this.communityWorkersData;
            option.color = this.communityWorkersData.map(item => item.color);
            option.title.text = this.totalPeopld;
            myEchart.setOption(option);
        },
        methods: {
            onChange(){

            }
        }
    };
</script>
<style scoped lang="less">
    //
    .community-workers {
        
        .list {
            padding-left: 40px;
            
            .list-item {
                line-height: 3em;
                border-bottom: 1px solid var(--border-color-split);
                
                &:last-child {
                    border-bottom: none;
                }
                
                .list-item-label {
                    //  颜色的小标记
                    .legend {
                        width: 8px;
                        height: 2px;
                    }
                }
            }
        }
    }
</style>