let code = {};

code.base = `
<template>
    <List  :data="list"  :border="true">
        <ListItem slot-scope="scope"  >
            <p>名称：{{scope.item.name}}</p>
        </ListItem>
    </List>
</template>
<script>
    export default {
        data () {
            return {
                list: [
                    {cover:"http://60.10.113.44:10101/download/pic/winscp.png",name:"Winscp",version:"5.13.2",url:"http://60.10.113.44:10101/download/WinSCP-5.13.2-Setup.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/teamviewer.png",name:"TeamViewer13",version:"13",url:"http://60.10.113.44:10101/download/TeamViewer13_wm.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/vscode.png",name:"VSCode",version:"1.19.1-x64",url:"http://60.10.113.44:10101/download/VSCodeSetup-x64-1.19.1.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/mongobooster.png",name:"mongobooster",version:"3.5.6",url:"http://60.10.113.44:10101/download/mongobooster-3.5.6.zip"}
                ]
            }
        }
    }
</script>
`;

code.hf = `
<template>
    <List  :data="list" :border="true" >
        <div slot="header" >Header</div>
        <ListItem slot-scope="scope"  >
            <p>名称：{{scope.item.name}}</p>
        </ListItem>
        <div slot="footer">Footer</div>
    </List>
</template>
<script>
    export default {
        data () {
            return {
                list: [
                    {cover:"http://60.10.113.44:10101/download/pic/winscp.png",name:"Winscp",version:"5.13.2",url:"http://60.10.113.44:10101/download/WinSCP-5.13.2-Setup.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/teamviewer.png",name:"TeamViewer13",version:"13",url:"http://60.10.113.44:10101/download/TeamViewer13_wm.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/vscode.png",name:"VSCode",version:"1.19.1-x64",url:"http://60.10.113.44:10101/download/VSCodeSetup-x64-1.19.1.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/mongobooster.png",name:"mongobooster",version:"3.5.6",url:"http://60.10.113.44:10101/download/mongobooster-3.5.6.zip"}
                ]
            }
        }
    }
</script>
`;

code.gj = `
<template>
    <List  :data="list" :grid="grid" >
        <ListItem slot-scope="scope"  >
            <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
            <p>名称：{{scope.item.name}}</p>
            <p>版本：{{scope.item.version}}</p>
            <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
        </ListItem>
    </List>
</template>
<script>
    export default {
        data () {
            return {
                list: [
                    {cover:"http://60.10.113.44:10101/download/pic/winscp.png",name:"Winscp",version:"5.13.2",url:"http://60.10.113.44:10101/download/WinSCP-5.13.2-Setup.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/teamviewer.png",name:"TeamViewer13",version:"13",url:"http://60.10.113.44:10101/download/TeamViewer13_wm.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/vscode.png",name:"VSCode",version:"1.19.1-x64",url:"http://60.10.113.44:10101/download/VSCodeSetup-x64-1.19.1.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/mongobooster.png",name:"mongobooster",version:"3.5.6",url:"http://60.10.113.44:10101/download/mongobooster-3.5.6.zip"}
                ],
                grid:{
                    column:3,gutter:16
                }
            }
        }
    }
</script>
`;
code.card = `
<template>
    <List  :data="list" type="card" :grid="grid" >
        <ListItem slot-scope="scope"  >
            <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
            <p>名称：{{scope.item.name}}</p>
            <p>版本：{{scope.item.version}}</p>
            <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
        </ListItem>
    </List>
</template>
<script>
    export default {
        data () {
            return {
                list: [
                    {cover:"http://60.10.113.44:10101/download/pic/winscp.png",name:"Winscp",version:"5.13.2",url:"http://60.10.113.44:10101/download/WinSCP-5.13.2-Setup.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/teamviewer.png",name:"TeamViewer13",version:"13",url:"http://60.10.113.44:10101/download/TeamViewer13_wm.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/vscode.png",name:"VSCode",version:"1.19.1-x64",url:"http://60.10.113.44:10101/download/VSCodeSetup-x64-1.19.1.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/mongobooster.png",name:"mongobooster",version:"3.5.6",url:"http://60.10.113.44:10101/download/mongobooster-3.5.6.zip"}
                ],
                grid:{
                    column:3,gutter:16
                }
            }
        }
    }
</script>
`;
code.cardAction = `
<template>
    <List  :data="list" type="card" :grid="grid" >
        <ListItem slot-scope="scope"  >
            <img slot="avatar" :src="scope.item.cover" style="width: 50px;margin-top: 15px;"/>
            <p>名称：{{scope.item.name}}</p>
            <p>版本：{{scope.item.version}}</p>
            <p><a :href="scope.item.url" target="_blank">点击下载</a></p>
        </ListItem>
        <div slot="action" style="text-align:center;cursor:pointer" @click="clickFunction()"><Icon type="plus-round" size="84" color="#e6f6ff"></Icon></div>
    </List>
</template>
<script>
    export default {
        data () {
            return {
                list: [
                    {cover:"http://60.10.113.44:10101/download/pic/winscp.png",name:"Winscp",version:"5.13.2",url:"http://60.10.113.44:10101/download/WinSCP-5.13.2-Setup.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/teamviewer.png",name:"TeamViewer13",version:"13",url:"http://60.10.113.44:10101/download/TeamViewer13_wm.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/vscode.png",name:"VSCode",version:"1.19.1-x64",url:"http://60.10.113.44:10101/download/VSCodeSetup-x64-1.19.1.zip"},
                    {cover:"http://60.10.113.44:10101/download/pic/mongobooster.png",name:"mongobooster",version:"3.5.6",url:"http://60.10.113.44:10101/download/mongobooster-3.5.6.zip"}
                ],
                grid:{
                    column:3,gutter:16
                }
            }
        },
        methods: {
            clickFunction(){
                this.$Message.success('点击了');
            }
        }
    }
</script>
`;
export default code;