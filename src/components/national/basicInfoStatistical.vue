<template>
    <a-card style="width: 445px"
            :bordered="false">
        <span slot="title">基本信息统计</span>
        <a-row type="flex" justify="space-between" align="middle">
            <div v-for="item in basicInfoStatisticalData"
                 :key="item.key"
                 align="middle"
            >
                <h2>{{item.value}}</h2>
                <span>{{item.label}}</span>
            </div>
        </a-row>
    </a-card>
</template>
<script>
    

    export default {
        name: 'basicInfoStatistical',
        props: ['basicInfoStatisticalData'],
        methods: {
            onChange(){

            }
        }
    };
</script>