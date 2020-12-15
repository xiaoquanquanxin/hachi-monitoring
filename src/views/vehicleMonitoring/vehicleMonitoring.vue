<template>
    <div class="vehicle-monitoring" data-msg="车辆监控">
        <CommonHeader title="车辆监控"/>
        <a-row type="flex" justify="space-between" align="middle" v-show="false">
            <a-col :span="4">
                <CurrentVehicleType data-msg="当前车辆类型"/>
            </a-col>
            <a-col :span="4">
                <CurrentVehicleDistribution data-msg="当前车辆分布"/>
            </a-col>
            <a-col :span="8">
                <ParkingLotInformation data-msg="停车场信息"/>
            </a-col>
            <a-col :span="8">
                <FrequentApproach data-msg="频繁进场"/>
            </a-col>
        </a-row>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                <VehicleApproachTrend data-msg="车辆进场趋势"/>
            </a-col>
            <a-col :span="8">
                12
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import CurrentVehicleType from '@/components/vehicleMonitoring/currentVehicleType.vue';
    import CurrentVehicleDistribution from '@/components/vehicleMonitoring/currentVehicleDistribution.vue';
    import ParkingLotInformation from '@/components/vehicleMonitoring/parkingLotInformation.vue';
    import FrequentApproach from '@/components/vehicleMonitoring/frequentApproach.vue';
    import VehicleApproachTrend from '@/components/vehicleMonitoring/vehicleApproachTrend.vue';

    export default {
        name: 'vehicleMonitoring',
        components: {
            CommonHeader,
            //  当前车辆类型
            CurrentVehicleType,
            //  当前车辆分布
            CurrentVehicleDistribution,
            //  听停车信息
            ParkingLotInformation,
            //  频繁进场
            FrequentApproach,
            //  车辆进场趋势
            VehicleApproachTrend,
        },
        data(){
            return {};
        }
    };
</script>
<style scoped lang="less">
    .vehicle-monitoring {
    
    }
</style>