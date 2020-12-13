<template>
    <div class="community-workers">
        <a-card style="width: 445px"
                :bordered="false">
            <a-row type="flex" justify="space-between" align="middle">
                <div>报警事件</div>
                <div>近7天报警总数<span>{{proportionOfAlarmTimeTodayData.lastWeek}}</span></div>
            </a-row>
            <a-divider/>
            <p>今日报警时间占比</p>
            <div id="proportionOfAlarmTimeToday"
                 data-msg="今日报警时间占比饼图"
                 style="height: 180px;width:100%;"
            ></div>
        </a-card>
    </div>
</template>
<script>
    import { init } from 'echarts';
    import { c03FFCC, c4e9a94, cFFFFFF, cCCCCCC, c4d4d4d, c262a2e, c373a3e } from '@/utils/constants';

    const option = {
        tooltip: false,
        series: [
            {
                type: 'pie',
                radius: ['50%', '100%'],
                avoidLabelOverlap: false,
                top: '12%',
                bottom: '12%',
                left: 'center',
                label: {
                    show: true,
                    color: cFFFFFF,
                    formatter: '{per|{d}%}\n{name|{b}}{num|{c}}',
                    rich: {
                        per: {
                            color: cFFFFFF,
                            lineHeight: 24,
                            verticalAlign: 'top',
                        },
                        name: {
                            color: cCCCCCC,
                            fontSize: 10,
                        },
                        num: {
                            color: cCCCCCC,
                            fontSize: 10,
                        },

                    },
                    //  文字与 线 之间的距离。
                    distanceToLabelLine: -32,
                },
                labelLine: {
                    length: 8,
                    length2: 64,
                    lineStyle: {
                        color: c373a3e,
                    }
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: c262a2e,
                },
            }
        ]
    };

    export default {
        name: 'alarmEvents',
        props: ['proportionOfAlarmTimeTodayData'],
        created(){
            //  设置颜色
            const colorList = [c03FFCC, c4e9a94, cFFFFFF, cCCCCCC, c4d4d4d];
            this.proportionOfAlarmTimeTodayData.list.forEach((item, index) => {
                item.bg = colorList[index];
            });
        },
        mounted(){
            const myEchart = init(document.getElementById('proportionOfAlarmTimeToday'));
            const { list } = this.proportionOfAlarmTimeTodayData;
            option.series[0].data = list;
            option.color = list.map(item => item.bg);
            console.log(JSON.parse(JSON.stringify(option.series[0].data)));
            myEchart.setOption(option);
        },
    };
</script>
<style scoped lang="less">
</style>
