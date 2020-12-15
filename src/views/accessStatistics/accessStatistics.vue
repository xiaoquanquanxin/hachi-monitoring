<template>
    <div class="access-statistics" data-msg="门禁统计">
        <commonHeader/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16" v-show="false">
                <a-row type="flex" justify="space-between" align="middle">
                    <a-col :span="12">
                        <ProportionOfOpeningMode data-msg="开门方式占比"
                                                 :proportionOfOpeningModeData="proportionOfOpeningModeData"
                        />
                        <ProportionOfPersonnelTypes data-msg="人员类型占比"
                                                    :proportionOfPersonnelTypesData="proportionOfPersonnelTypesData"
                        />
                    </a-col>
                    <a-col :span="12"></a-col>
                </a-row>
                <StatisticsOfOpeningTimes data-msg="开门次数统计"
                                          :statisticsOfOpeningTimesData="statisticsOfOpeningTimesData"
                />
            </a-col>
            <a-col :span="8">
                <RealTimeRecordOfAccessControl data-msg="门禁实时记录"
                                               :realTimeRecordOfAccessControlData="realTimeRecordOfAccessControlData"
                />
                <AccessControlList data-msg="门禁列表"
                                   :accessControlListData="accessControlListData"
                />
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import commonHeader from '@/components/commonHeader/commonHeader';
    import ProportionOfOpeningMode from '@/components/accessStatistics/proportionOfOpeningMode.vue';
    import ProportionOfPersonnelTypes from '@/components/accessStatistics/proportionOfPersonnelTypes.vue';
    import StatisticsOfOpeningTimes from '@/components/accessStatistics/statisticsOfOpeningTimes.vue';
    import RealTimeRecordOfAccessControl from '@/components/accessStatistics/realTimeRecordOfAccessControl.vue';
    import AccessControlList from '@/components/accessStatistics/accessControlList.vue';

    //  数据
    import {
        //  开门方式占比
        proportionOfOpeningModeData,
        //  人员类型占比
        proportionOfPersonnelTypesData,
        //  开门次数统计
        statisticsOfOpeningTimesData,
        //  门禁实时记录
        realTimeRecordOfAccessControlData,
        //  门禁列表
        accessControlListData,
    } from '@/utils/staticData';

    export default {
        name: 'accessStatistics',
        components: {
            commonHeader,
            //  开门方式占比
            ProportionOfOpeningMode,
            //  人员类型占比
            ProportionOfPersonnelTypes,
            //  开门次数统计
            StatisticsOfOpeningTimes,
            //  门禁实时记录
            RealTimeRecordOfAccessControl,
            //  门禁列表
            AccessControlList,
        },
        data(){
            return {
                //  开门方式占比
                proportionOfOpeningModeData,
                //  人员类型占比
                proportionOfPersonnelTypesData,
                //  开门次数统计
                statisticsOfOpeningTimesData,
                //  门禁实时记录
                realTimeRecordOfAccessControlData,
                //  门禁列表
                accessControlListData,
            };
        },
    };
</script>
<style scoped lang="less">
    .access-statistics {
    
    }
</style>
