<template>
    <div class="vehicle-monitoring" data-msg="车辆监控">
        <CommonHeader title="车辆监控"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="4">
                <CurrentVehicleType/>
            </a-col>
            <a-col :span="4">
<!--                <CurrentVehicleType/>-->
            </a-col>
            <a-col :span="8">
                12
            </a-col>
            <a-col :span="8">
                12
            </a-col>
        </a-row>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                12
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
    export default {
        name: 'vehicleMonitoring',
        components: {
            CommonHeader,
            CurrentVehicleType,
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