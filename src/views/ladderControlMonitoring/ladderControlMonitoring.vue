<template>
    <div class="ladder-control-monitoring" data-msg="梯控监测">
        <CommonHeader title="梯控监测"/>
        <a-row type="flex" justify="space-between" align="middle" v-show="false">
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
        <br>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16" v-show="false">
                <VehicleApproachTrend componentType="4" data-msg="梯控运行工作量情况"/>
            </a-col>
            <a-col :span="8">
                <OperationConditionOfLadderControl data-msg="梯控运行情况"/>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import LadderControlCallType from '@/components/ladderControlMonitoring/ladderControlCallType.vue';
    import CurrentLadderControlStatus from '@/components/ladderControlMonitoring/currentLadderControlStatus.vue';
    import LadderControlOperationRanking from '@/components/ladderControlMonitoring/ladderControlOperationRanking.vue';
    import VehicleApproachTrend from '@/components/vehicleMonitoring/vehicleApproachTrend.vue';
    import OperationConditionOfLadderControl
        from '@/components/ladderControlMonitoring/operationConditionOfLadderControl.vue';

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
            //  梯控运行工作量情况
            VehicleApproachTrend,
            //  梯控运行情况
            OperationConditionOfLadderControl,
        }
    };
</script>
<style scoped lang="less">
    .ladder-control-monitoring {
    
    }
</style>
