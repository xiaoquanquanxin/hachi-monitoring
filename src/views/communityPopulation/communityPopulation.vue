<template>
    <div class="community-population" data-msg="门禁统计">
        <CommonHeader title="报警事件"/>
        <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="16">
                <a-row type="flex" justify="space-between" align="middle">
                    <a-col :span="12">
                        <CommunityDemographics data-ms="社区人口统计"/>
                        <br>
                        <TypesOfIdentity data-msg="身份类型"/>
                    </a-col>
                </a-row>
            </a-col>
            <a-col :span="8">
                区域占比
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import CommonHeader from '@/components/commonHeader/commonHeader';
    import CommunityDemographics from '@/components/communityPopulation/communityDemographics.vue';
    import TypesOfIdentity from '@/components/communityPopulation/typesOfIdentity.vue';

    export default {
        name: 'communityPopulation',
        components: {
            CommonHeader,
            //  社区人口统计
            CommunityDemographics,
            //  身份类型
            TypesOfIdentity,
        }
    };
</script>
<style lang="less" scoped>
    .community-population {
    
    }
</style>
