<template>
    <div class="age-distribution-by-sex" data-msg="年龄段性别分布">
        <a-card style="width: 600px; padding: 1em 0"
                :bordered="false"
        >
            <h2 class="card-component-title">年龄段性别分布</h2>
            <a-divider/>
            32
        </a-card>
    </div>
</template>
<script>
    import { ageDistributionBySexData } from '../../utils/staticData';

    export default {
        name: 'ageDistributionBySex',
        data(){
            return {
                ageDistributionBySexData: null
            };
        },
        created(){
            this.ageDistributionBySexData = ageDistributionBySexData;
        }
    };
</script>
<style scoped lang="less">
    .age-distribution-by-sex {
    
    }
</style>