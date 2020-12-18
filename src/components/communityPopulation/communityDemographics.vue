<template>
    <div data-msg="社区人口统计" class="community-demographics">
        <a-card style="width: 600px; padding: 1em 0"
                :bordered="false"
        >
            <h2>实地常春藤二期</h2>
            <a-row type="flex" justify="end" align="bottom">
                <a-col><span style="color:var(--cB3B5B5)">总人数</span></a-col>
                <a-col :offset="1"><b class="num">34,677</b></a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
    export default {
        name: 'communityDemographics',
    };
</script>
<style scoped lang="less">
    .community-demographics {
        
        
        .num {
            font-size: 60px;
            line-height: 0;
        }
    }
</style>