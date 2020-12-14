<template>
    <div class="access-statistics" data-msg="门禁统计">
        <commonHeader/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                <a-row type="flex" justify="space-between" align="middle">
                    <a-col :span="12">
                        <ProportionOfOpeningMode data-msg="开门方式占比"
                                                 :proportionOfOpeningModeData="proportionOfOpeningModeData"
                                                 v-show="false"
                        ></ProportionOfOpeningMode>
                        <ProportionOfPersonnelTypes data-msg="人员类型占比"
                                                    :proportionOfPersonnelTypesData="proportionOfPersonnelTypesData">
                        </ProportionOfPersonnelTypes>
                    </a-col>
                    <a-col :span="12"></a-col>
                </a-row>
                <div data-msg="开门次数统计"></div>
            </a-col>
            <a-col :span="8">
                <div data-msg="门禁实时记录"></div>
                <div data-msg="门禁列表"></div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import commonHeader from '@/components/commonHeader/commonHeader';
    import ProportionOfOpeningMode from '@/components/accessStatistics/proportionOfOpeningMode.vue';
    import ProportionOfPersonnelTypes from '@/components/accessStatistics/proportionOfPersonnelTypes.vue';

    //  数据
    import {
        //  开门方式占比
        proportionOfOpeningModeData,
        //  人员类型占比
        proportionOfPersonnelTypesData,
    } from '@/utils/staticData';

    export default {
        name: 'accessStatistics',
        components: {
            commonHeader,
            //  开门方式占比
            ProportionOfOpeningMode,
            //  人员类型占比
            ProportionOfPersonnelTypes,
        },
        data(){
            return {
                //  开门方式占比
                proportionOfOpeningModeData,
                //  人员类型占比
                proportionOfPersonnelTypesData,
            };
        },
    };
</script>
<style scoped lang="less">
    .access-statistics {
    
    }
</style>