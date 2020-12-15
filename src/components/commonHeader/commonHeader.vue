<template>
    <a-row type="flex" justify="space-between" align="middle" class="common-header">
        <a-button class="back-btn" type="primary" @click="backFn">返回</a-button>
        <div class="title">门禁统计</div>
        <a-select default-value="1" :bordered="false" @change="handleChangeFn">
            <a-select-option value="1">实地常春藤二期</a-select-option>
            <a-select-option value="2">实地常春藤三期</a-select-option>
        </a-select>
    </a-row>
</template>
<script>
    export default {
        name: 'commonHeader',
        methods: {
            backFn(){
                this.$router.back();
            },
            handleChangeFn(val){
                console.log(val);
            }
        }
    };
</script>
<style scoped lang="less">
    .common-header {
        height: 6em;
        .back-btn {
            background-color: var(--c262A2E);
        }
        
        .title {
            font-size: 2em;
        }
    }
</style>