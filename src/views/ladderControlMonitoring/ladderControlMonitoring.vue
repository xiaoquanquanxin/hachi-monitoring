<template>
    <div class="ladder-control-monitoring" data-msg="梯控监测">
        <CommonHeader title="梯控监测"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="8">
                <LadderControlCallType data-msg="梯控呼叫类型"/>
            </a-col>
            <a-col :span="8">
                <CurrentLadderControlStatus data-msg="当前梯控状态"/>
            </a-col>
            <a-col :span="8">
                <LadderControlOperationRanking data-msg="梯控运行工作排名"/>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import LadderControlCallType from '@/components/ladderControlMonitoring/ladderControlCallType.vue';
    import CurrentLadderControlStatus from '@/components/ladderControlMonitoring/currentLadderControlStatus.vue';
    import LadderControlOperationRanking from '@/components/ladderControlMonitoring/ladderControlOperationRanking.vue';

    export default {
        name: 'ladderControlMonitoring',
        components: {
            CommonHeader,
            //  梯控呼叫类型
            LadderControlCallType,
            //  当前梯控状态
            CurrentLadderControlStatus,
            //  梯控运行工作排名
            LadderControlOperationRanking,
        }
    };
</script>
<style scoped lang="less">
    .ladder-control-monitoring {
    
    }
</style>
