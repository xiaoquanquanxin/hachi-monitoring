<template>
    <div class="access-statistics" data-msg="物业缴费">
        <CommonHeader title="物业缴费"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                <DataList data-msg="数据列表"/>
                <br>
                <a-row type="flex" justify="space-between" align="middle">
                    <a-col :span="12">
                        <ProportionOfOperatingIncome type="1" data-msg="营业收入占比"/>
                    </a-col>
                    <a-col :span="12">
                        <ProportionOfOperatingIncome type="2" data-msg="欠费情况占比"/>
                    </a-col>
                </a-row>
            </a-col>
            <a-col :span="8">
                <PercentageOfReceivables data-msg="应收实收占比"/>
            </a-col>
        </a-row>
        <br>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                <RevenueComparison data-msg="营业收入对比"/>
            </a-col>
            <a-col :span="8">
                <ProportionOfBuildingPayment data-msg="楼栋缴费占比"/>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import DataList from '@/components/propertyPayCost/dataList.vue';
    import ProportionOfOperatingIncome from '@/components/propertyPayCost/proportionOfOperatingIncome.vue';
    import PercentageOfReceivables from '@/components/propertyPayCost/percentageOfReceivables.vue';
    import ProportionOfBuildingPayment from '@/components/propertyPayCost/proportionOfBuildingPayment.vue';
    import RevenueComparison from '@/components/propertyPayCost/revenueComparison.vue';

    export default {
        name: 'propertyPayCost',
        components: {
            CommonHeader,
            //  数据列表
            DataList,
            //  营业收入占比
            ProportionOfOperatingIncome,
            //  应收实收占比
            PercentageOfReceivables,
            //  楼栋缴费占比
            ProportionOfBuildingPayment,
            //  营业收入对比
            RevenueComparison
        }
    };
</script>