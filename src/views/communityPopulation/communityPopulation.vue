<template>
    <div class="community-population" data-msg="社区人口">
        <CommonHeader title="社区人口"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                <a-row type="flex" justify="space-between" align="middle">
                    <a-col :span="12">
                        <CommunityDemographics data-ms="社区人口统计"/>
                        <br>
                        <TypesOfIdentity data-msg="身份类型"/>
                    </a-col>
                    <a-col :span="12">
                        <AgeDistributionBySex data-msg="年龄段性别分布"/>
                    </a-col>
                </a-row>
                <br>
                <VehicleApproachTrend componentType="5" data-msg="近12月登记住户数量变化"/>
            </a-col>
            <a-col :span="8">
                <AreaOf data-msg="区域占比"/>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import CommunityDemographics from '@/components/communityPopulation/communityDemographics.vue';
    import TypesOfIdentity from '@/components/communityPopulation/typesOfIdentity.vue';
    import AgeDistributionBySex from '@/components/communityPopulation/ageDistributionBySex.vue';
    import VehicleApproachTrend from '@/components/vehicleMonitoring/vehicleApproachTrend.vue';
    import AreaOf from '@/components/communityPopulation/areaOf.vue';

    export default {
        name: 'communityPopulation',
        components: {
            CommonHeader,
            //  社区人口统计
            CommunityDemographics,
            //  身份类型
            TypesOfIdentity,
            //  年龄段性别分布
            AgeDistributionBySex,
            //  近12月登记住户数量变化
            VehicleApproachTrend,
            //  区域占比
            AreaOf,
        }
    };
</script>
<style lang="less" scoped>
    .community-population {
    
    }
</style>
