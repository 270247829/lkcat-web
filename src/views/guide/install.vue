<template>
    <i-article>
        <article>
            <h1>安装</h1>
            <Anchor title="使用 npm 安装" h2></Anchor>
            <p>我们推荐使用 npm 方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
            <br>
            <i-code lang="auto" bg>{{ code.install.install }}</i-code>
            <br>
            <p>如果你的网络环境不佳，推荐使用 <a href="https://github.com/cnpm/cnpm" target="_blank">cnpm</a>。</p>
            <Anchor title="浏览器引入" h2></Anchor>
            <p>通过 <a href="https://unpkg.com/lkcat/" target="_blank">unpkg.com/lkcat</a> 可以看到 LKCat 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：</p>
            <i-code lang="html" bg>{{ code.install.cdn }}</i-code>
            <br>
            <Alert type="warning" show-icon>
                强烈不推荐使用此方式
            </Alert>
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
                code: Code
            }
        },
        methods: {

        }
    }
</script>