<template>
    <div class="visitor-statistics" data-msg="访客统计">
        <CommonHeader title="访客统计"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="8">
                <PercentageOfVisitorsByType data-msg="访客种类占比"/>
            </a-col>
            <a-col :span="8">
                <VisitorDistributionStatistics data-msg="访客分布统计"/>
            </a-col>
            <a-col :span="8">
                <ProportionOfVisitorsEnteringTheDoor data-msg="访客进门方式占比"/>
            </a-col>
        </a-row>
        <br>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                <VehicleApproachTrend componentType="3" data-msg="当前社区访客量统计"/>
            </a-col>
            <a-col :span="8">
                <StatisticsOnFrequentVisits data-msg="频繁到访统计"/>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import PercentageOfVisitorsByType from '@/components/visitorStatistics/percentageOfVisitorsByType.vue';
    import VisitorDistributionStatistics from '@/components/visitorStatistics/visitorDistributionStatistics.vue';
    import ProportionOfVisitorsEnteringTheDoor
        from '@/components/visitorStatistics/proportionOfVisitorsEnteringTheDoor.vue';
    import VehicleApproachTrend from '@/components/vehicleMonitoring/vehicleApproachTrend.vue';
    import StatisticsOnFrequentVisits from '@/components/visitorStatistics/statisticsOnFrequentVisits.vue';

    export default {
        name: 'visitorStatistics',
        components: {
            CommonHeader,
            //  访客种类占比
            PercentageOfVisitorsByType,
            //  访客分布统计
            VisitorDistributionStatistics,
            //  访客进门方式占比
            ProportionOfVisitorsEnteringTheDoor,
            //  报事报修数目统计
            VehicleApproachTrend,
            //  频繁到访统计
            StatisticsOnFrequentVisits,
        },
        data(){
            return {};
        }
    };
</script>
<style scoped lang="less">
    .visitor-statistics {
        overflow: hidden;
    }
</style>