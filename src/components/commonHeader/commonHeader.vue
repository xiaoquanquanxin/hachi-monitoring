<template>
    <a-row type="flex" justify="space-between" align="middle" class="common-header">
        <a-button class="back-btn" type="primary" @click="backFn" size="large">返回</a-button>
        <div class="title">{{title}}</div>
        <a-select default-value="1" :bordered="false" @change="handleChangeFn">
            <a-icon class="suffix-icon" type="caret-down" slot="suffixIcon"/>
            <a-select-option value="1">实地常春藤二期</a-select-option>
            <a-select-option value="2">实地常春藤三期</a-select-option>
        </a-select>
    </a-row>
</template>
<script>
    export default {
        name: 'commonHeader',
        props: ['title'],
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
        padding-bottom: 2em;
        
        .back-btn {
            background-color: var(--c2D3237);
        }
        
        .title {
            font-size: 2.5em;
        }
    }
</style>