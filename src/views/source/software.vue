<style lang="less" scoped>
    .content p{
        padding-left: 30px
    }
    .lkui-list .list-item {
        min-height: 105px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>常用软件</h1>
            <Anchor title="常用工具" h2></Anchor>
            <List  :data="movieList" type="card" :grid="grid" >
                <!-- <div slot="header" >Header</div> -->
                <ListItem slot-scope="scope"  >
                    <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
                    <p>名称：{{scope.item.name}}</p>
                    <p>版本：{{scope.item.version}}</p>
                    <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
                </ListItem>

                <div slot="action" style="text-align:center;cursor:pointer" @click="showForm('常用工具')"><Icon type="plus-round" size="105" color="#e6f6ff"></Icon></div>

                <!-- <ListItem slot="footer">
                    <p><a href="scope.item.url" target="_blank">点击下载</a></p>
                </ListItem> -->
                <!-- <div slot="footer">Footer</div> -->
            </List>

            <Anchor title="环境配置" h2></Anchor>
            <List  :data="config" type="card" :grid="grid" >
                <!-- <div slot="header" >Header</div> -->
                <ListItem slot-scope="scope" >
                    <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
                    <p>名称：{{scope.item.name}}</p>
                    <p>版本：{{scope.item.version}}</p>
                    <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
                </ListItem>
                <div slot="action" style="text-align:center;cursor:pointer" @click="showForm('环境配置')"><Icon type="plus-round" size="105" color="#e6f6ff"></Icon></div>
                <!-- <div slot="footer">Footer</div> -->
            </List>
            <Modal
                v-model="modal6"
                title="共享"
                :loading="loading"
                @on-ok="asyncOK">
                <Form :model="formItem" :label-width="60">
                    <FormItem label="文件类型">
                        <Input v-model="formItem.type" readonly></Input>
                    </FormItem>
                    <FormItem label="名称">
                        <Input v-model="formItem.name" placeholder="请输入名称"></Input>
                    </FormItem>
                    <FormItem label="版本">
                        <Input v-model="formItem.version" placeholder="请输入版本"></Input>
                    </FormItem>
                    <FormItem label="下载地址">
                        <Input v-model="formItem.url" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入下载地址"></Input>
                    </FormItem>
                </Form>
            </Modal>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                movieList: window.download.software.s1,
                config: window.download.software.s2,
                grid:{
                    column:3,gutter:16
                },
                modal6: false,
                loading: true,
                formItem: {
                    name:'',
                    version:'',
                    type:'',
                    url:''
                }
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                    this.$Message.success('提交审核成功，请耐心等待。');
                }, 2000);
            },
            showForm (type){
                this.formItem.type = type;
                this.modal6 = true;
            }
        }
    }
</script>
