<template>
    <i-article>
        <article>
            <h1>后端源码</h1>
            <Anchor title="后端框架" h2></Anchor>
            <List  :data="movieList" type="card" :grid="grid" :pagination="pagination">
                <!-- <div slot="header" >Header</div> -->
                <ListItem slot-scope="scope"  >
                    <img slot="avatar" :src="scope.item.cover" style="width: 50px;height: 60px;"/>
                    <h4 slot="title">{{scope.item.title}}</h4>
                    <p >{{scope.item.url}}</p>
                </ListItem>
                <!-- <div slot="footer">Footer</div> -->
            </List>
            <Anchor title="后端插件" h2></Anchor>
            <List  :data="movieList" type="card" :grid="grid" :pagination="pagination">
                <!-- <div slot="header" >Header</div> -->
                <ListItem slot-scope="scope"  >
                    <img slot="avatar" :src="scope.item.cover" style="width: 50px;height: 60px;"/>
                    <h4 slot="title">{{scope.item.title}}</h4>
                    <p >{{scope.item.url}}</p>
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
                   {cover:"http://60.10.113.44:10101/download/pic/zip.png",title:"昆池岩",url:"https://movie.douban.com/subject/26945085/"},
                   {cover:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2514384737.jpg",title:"现在去见你",url:"https://movie.douban.com/subject/27018285/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520212236.jpg",title:"疯狂婚礼周",url:"https://movie.douban.com/subject/27031084/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518132366.jpg",title:"血观音",url:"https://movie.douban.com/subject/27113517/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",title:"红海行动",url:"https://movie.douban.com/subject/26861685/"},
                   {cover:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.jpg",title:"黑豹",url:"https://movie.douban.com/subject/6390825/"}
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
