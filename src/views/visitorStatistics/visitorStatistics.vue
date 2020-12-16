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
            </a-col>
        </a-row>
        <br>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
            </a-col>
            <a-col :span="8">
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import PercentageOfVisitorsByType from '@/components/visitorStatistics/percentageOfVisitorsByType.vue';
    import VisitorDistributionStatistics from '@/components/visitorStatistics/visitorDistributionStatistics.vue';
    
    export default {
        name: 'visitorStatistics',
        components: {
            CommonHeader,
            //  访客种类占比
            PercentageOfVisitorsByType,
            //  访客分布统计
            VisitorDistributionStatistics,
        },
        data(){
            return {};
        }
    };
</script>
<style scoped lang="less">
    .visitor-statistics {
    
    }
</style>