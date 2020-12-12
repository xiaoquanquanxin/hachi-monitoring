<template>
    <div class="community-workers">
        <a-card style="width: 445px"
                :bordered="false">
            <span slot="title">基本信息统计</span>
            <p>社区人口类型占比饼图</p>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="10" class="">
                    <div id="proportionOfCommunityPopulationType"
                         data-msg="社区人口类型占比饼图"
                         style="height: 200px;"
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
                                    <div class="legend" :style="`backgroundColor:${item.type}`"></div>
                                    <span>{{item.label}}</span>
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

    const option = {
        tooltip: false,
        title: {
            text: '333',
            textStyle: {
                color: '#FFFFFF',
                fontSize: '32px'
            },
            subtext: '同名数量统计',
            subtextStyle: {
                color: '#BBBBBB'
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
                this.communityWorkersData.reduce(((prev, item) => {
                    return prev + item.num;
                }), 0);
            }
        },
        data(){
            return {};
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionOfCommunityPopulationType'));
            option.series[0].data = this.communityWorkersData;
            option.color = this.communityWorkersData.map(item => item.type);
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