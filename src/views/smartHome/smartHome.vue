<template>
    <div class="smart-home" data-msg="智能家居">
        <CommonHeader title="智能家居"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                <a-row type="flex" justify="space-between" align="middle" v-show="true">
                    <a-col :span="12">
                        <SmartHomeEnabledStatistics data-msg='智能家居启用统计'/>
                    </a-col>
                    <a-col :span="12">
                        <ControlMode data-msg='控制方式'/>
                    </a-col>
                </a-row>
                <br>
                <UsagePeriodStatistics data-msg='使用时段统计'/>
            </a-col>
            <a-col :span="8"></a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import ControlMode from '@/components/smartHome/controlMode.vue';
    import SmartHomeEnabledStatistics from '@/components/smartHome/smartHomeEnabledStatistics.vue';
    import UsagePeriodStatistics from '@/components/smartHome/usagePeriodStatistics.vue';
    
    export default {
        name: 'smartHome',
        components: {
            CommonHeader,
            //  控制方式
            ControlMode,
            //  智能家居启用统计
            SmartHomeEnabledStatistics,
            //  使用时段统计
            UsagePeriodStatistics,
        },
    };
</script>
<style lang="less" scoped>
    .smart-home {
    
    }
</style>

