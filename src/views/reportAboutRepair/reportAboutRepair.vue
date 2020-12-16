<template>
    <div class="report-about-repair" data-msg="报事报修页">
        <CommonHeader title="报事报修"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="12" v-show="false">
                <ProportionAndSortingOfReportingTypes data-msg="报事报修类型占比与排序"/>
            </a-col>
            <a-col :span="12">
                <RealTimeRecord data-msg="实时记录"/>
            </a-col>
            <a-row type="flex" justify="space-between" align="middle">
                <a-col :span="6">
                </a-col>
                <a-col :span="18">
                </a-col>
            </a-row>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import ProportionAndSortingOfReportingTypes
        from '@/components/reportAboutRepair/proportionAndSortingOfReportingTypes.vue';
    import RealTimeRecord from '@/components/reportAboutRepair/realTimeRecord.vue';

    export default {
        name: 'reportAboutRepair',
        components: {
            CommonHeader,
            //  报事报修类型占比与排序
            ProportionAndSortingOfReportingTypes,
            //  实时记录
            RealTimeRecord,
        },
    };
</script>
<style scoped lang="less">
    .report-about-repair {
    
    }
</style>