<template>
    <div class="visitor-statistics" data-msg="访客统计">
        <CommonHeader title="访客统计"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="4">
                <PercentageOfVisitorsByType data-msg="访客种类占比"/>
            </a-col>
            <a-col :span="4">
            </a-col>
            <a-col :span="8">
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

    export default {
        name: 'visitorStatistics',
        components: {
            CommonHeader,
            //  访客种类占比
            PercentageOfVisitorsByType,
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