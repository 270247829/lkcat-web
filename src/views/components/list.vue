<style>
    .lkui-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .lkui-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .lkui-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .lkui-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .lkui-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .lkui-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
<template>
    <div>
        <i-article>
            <article>
                <h1>List 列表</h1>
                <p>通用列表。</p>
                <Anchor title="代码示例" h2></Anchor>
                <Demo title="基础用法" vertical hide-code>
                    <div slot="demo">
                        <List  :data="list" :border="true" >
                            <ListItem slot-scope="scope"  >
                                <p>名称：{{scope.item.name}}</p>
                            </ListItem>
                        </List>
                    </div>
                    <div slot="desc">
                        <p>列表的最简单用法。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
                <Demo title="头部和尾部" vertical hide-code>
                    <div slot="demo">
                        <List  :data="list" :border="true" >
                            <div slot="header" >Header</div>
                            <ListItem slot-scope="scope"  >
                                <p>名称：{{scope.item.name}}</p>
                            </ListItem>
                            <div slot="footer">Footer</div>
                        </List>
                    </div>
                    <div slot="desc">
                        <p>列表的头部和尾部。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.hf }}</i-code>
                </Demo>
                <Demo title="高级用法" vertical hide-code>
                    <div slot="demo">
                        <List  :data="list" :grid="grid" >
                            <ListItem slot-scope="scope"  >
                                <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
                                <p>名称：{{scope.item.name}}</p>
                                <p>版本：{{scope.item.version}}</p>
                                <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
                            </ListItem>
                        </List>
                    </div>
                    <div slot="desc">
                        <p>列表的高级用法。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.gj }}</i-code>
                </Demo>
                <Demo title="卡片显示" vertical hide-code>
                    <div slot="demo">
                        <List  :data="list" type="card" :grid="grid" >
                            <ListItem slot-scope="scope"  >
                                <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
                                <p>名称：{{scope.item.name}}</p>
                                <p>版本：{{scope.item.version}}</p>
                                <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
                            </ListItem>
                        </List>
                    </div>
                    <div slot="desc">
                        <p>列表的卡片展示。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.card }}</i-code>
                </Demo>
                <Demo title="卡片操作" vertical hide-code>
                    <div slot="demo">
                        <List  :data="list" type="card" :grid="grid" >
                            <ListItem slot-scope="scope"  >
                                <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
                                <p>名称：{{scope.item.name}}</p>
                                <p>版本：{{scope.item.version}}</p>
                                <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
                            </ListItem>
                            <div slot="action" style="text-align:center;cursor:pointer" @click="clickFunction()"><Icon type="plus-round" size="84" color="#e6f6ff"></Icon></div>
                        </List>
                    </div>
                    <div slot="desc">
                        <p>列表的卡片操作。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.cardAction }}</i-code>
                </Demo>
                <div class="api">
                    <Anchor title="API" h2></Anchor>
                    <Anchor title="List props" h3></Anchor>
                    <table>
                        <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>data</td>
                            <td>显示的数据。</td>
                            <td>Array</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>border</td>
                            <td>是否显示边框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>设置列表的类型，目前有<code>card</code></td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>grid</td>
                            <td>card模式下有效，设置一行显示的列数,列之间的间隔</td>
                            <td>Object</td>
                            <td>无</td>
                        </tr>
  
                        </tbody>
                    </table>
                    <Anchor title="List slot" h3></Anchor>
                    <table>
                        <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>header</td>
                            <td>表头</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>页脚</td>
                        </tr>
                        <tr>
                            <td>avatar</td>
                            <td>图片</td>
                        </tr>
                        <tr>
                            <td>action</td>
                            <td>操作</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </i-article>
    </div>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import Demo from '../../components/demo.vue';
    import Anchor from '../../components/anchor.vue';
    import iCode from 'iCode';
    import Code from '../../code/list';


    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code:Code,
                list: [
                    {cover:"http://60.10.113.44:10101/download/pic/winscp.png",name:"Winscp",version:"5.13.2",url:"http://60.10.113.44:10101/download/WinSCP-5.13.2-Setup.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/teamviewer.png",name:"TeamViewer13",version:"13",url:"http://60.10.113.44:10101/download/TeamViewer13_wm.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/vscode.png",name:"VSCode",version:"1.19.1-x64",url:"http://60.10.113.44:10101/download/VSCodeSetup-x64-1.19.1.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/mongobooster.png",name:"mongobooster",version:"3.5.6",url:"http://60.10.113.44:10101/download/mongobooster-3.5.6.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/neo4j.png",name:"neo4j-community",version:"3.3.4",url:"http://60.10.113.44:10101/download/neo4j-community-3.3.4-windows.zip"}
                ],
                grid:{
                    column:3,gutter:16
                }
            }
        },
        computed: {
            
        },
        methods: {
            clickFunction(){
                this.$Message.success('点击了');
            }
        },
        mounted () {

        }
    }
</script>