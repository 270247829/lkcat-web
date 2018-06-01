<template>
    <i-article>
        <article>
            <h1>常用软件</h1>
            <Anchor title="常用工具" h2></Anchor>
            <List  :data="movieList" type="card" :grid="grid" :pagination="pagination">
                <!-- <div slot="header" >Header</div> -->
                <ListItem slot-scope="scope"  >
                    <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
                    <p>名称：{{scope.item.name}}</p>
                    <p>版本：{{scope.item.version}}</p>
                    <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
                </ListItem>
                <!-- <div slot="footer">Footer</div> -->
            </List>
            <Anchor title="环境配置" h2></Anchor>
            <List  :data="config" type="card" :grid="grid" :pagination="pagination">
                <!-- <div slot="header" >Header</div> -->
                <ListItem slot-scope="scope"  >
                    <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
                    <p>名称：{{scope.item.name}}</p>
                    <p>版本：{{scope.item.version}}</p>
                    <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
                </ListItem>
                <!-- <div slot="footer">Footer</div> -->
            </List>
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
                movieList: [
                    {cover:"http://60.10.113.44:10101/download/pic/teamviewer.png",name:"TeamViewer13",version:"13",url:"http://60.10.113.44:10101/download/TeamViewer13_wm.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/vscode.png",name:"VSCode",version:"1.19.1-x64",url:"http://60.10.113.44:10101/download/VSCodeSetup-x64-1.19.1.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/mongobooster.png",name:"mongobooster",version:"3.5.6",url:"http://60.10.113.44:10101/download/mongobooster-3.5.6.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/neo4j.png",name:"neo4j-community",version:"3.3.4",url:"http://60.10.113.44:10101/download/neo4j-community-3.3.4-windows.zip"}

                ],
                config: [
                    {cover:"http://60.10.113.44:10101/download/pic/zip.png",name:"node.js",version:"8.9.3-x64",url:"http://60.10.113.44:10101/download/node-v8.9.3-x64.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/cratedb.png",name:"cratedb",version:"2.2.5",url:"http://60.10.113.44:10101/download/crate-2.2.5.tar.gz"},
                    {cover:"http://60.10.113.44:10101/download/pic/kafka.png",name:"kafka",version:"2.11-1.0.0",url:"http://60.10.113.44:10101/download/kafka_2.11-1.0.0.tgz"}

                   
                ],
                grid:{
                    column:3,gutter:16
                }
            }
        },
        methods: {

        }
    }
</script>
