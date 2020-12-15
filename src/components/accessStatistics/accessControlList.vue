<template>
    <div data-msg="门禁列表" class="access-control-list">
        <a-list :data-source="accessControlListData"
                :grid="{ gutter: 16, xs: 4}"
        >
            <a-list-item slot="renderItem" slot-scope="item, index">
                <div class="item">
                    <img class="item-img" :src="item.img" alt=""/>
                    <div class="item-name">{{item.name}}</div>
                    <div class="item-content">
                        <h3>{{item.today}}</h3>
                        <p class="item-instructions">今日开门次数</p>
                        <h3>{{item.month}}</h3>
                        <p class="item-instructions">当月开门次数</p>
                    </div>
                </div>
            </a-list-item>
        </a-list>
    </div>
</template>
<script>
    export default {
        name: 'accessControlList',
        props: ['accessControlListData'],
    };
</script>
<style scoped lang="less">
    .access-control-list {
        width: 600px;
        background-color: var(--c2D3237);
        padding: 0 4em;
        
        .item {
            position: relative;
            padding: .2em 0 .6em;
            background-color: var(--c2C3034);
            
            .item-img {
                display: block;
                width: 100%;
            }
            
            .item-name {
                position: absolute;
                top: 1em;
                left: 1em;
            }
            
            .item-content {
                text-align: center;
                line-height: 1em;
                margin: .6em 0;
                
                .item-instructions {
                    font-size: 12px;
                    color:var(--cB3B5B5);
                }
            }
        }
    }
</style>
