<template>
    <div class="equipment-information">
        <a-card style="width: 445px"
                :bordered="false">
            <div class="card-component-title">设备信息</div>
            <a-divider/>
            <a-list :data-source="equipmentInformationData">
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-row type="flex" justify="space-between" align="middle" class="list-item">
                        <a-icon :type="item.icon" class="item-label"/>
                        <a-col align="middle">
                            <div class="item-label">{{item.name}}</div>
                            <div>{{item.quantity}}</div>
                        </a-col>
                        <a-col align="middle">
                            <div class="item-label">在线数</div>
                            <div>{{item.online}}</div>
                        </a-col>
                        <a-col align="middle">
                            <div class="item-label">离线数</div>
                            <div>{{item.outline}}</div>
                        </a-col>
                        <a-col align="middle">
                            <div class="item-label">在线比例</div>
                            <div>{{item.onlineRate}}</div>
                        </a-col>
                    </a-row>
                </a-list-item>
            </a-list>
        </a-card>
    </div>
</template>
<script>
    export default {
        name: 'equipmentInformation',
        props: ['equipmentInformationData']
    };
</script>
<style scoped lang="less">
    .equipment-information {
        .list-item {
            width: 100%;
            padding: .8em 1.4em;
            border-radius: 4px;
            background-color: var(--c2C3034);
            
            .item-label {
                color: var(--cB3B5B5);
            }
        }
    }
</style>
