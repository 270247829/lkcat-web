<template>
    <i-article>
        <article style="min-height:800px">
            <h1>关于 LKCat Pro</h1>
            <p>LKCat Pro 是一套基于 LKCat UI 组件库开发的后台管理系统。</p>
            <Anchor title="相关链接" h2></Anchor>
            <ul>
                <li>
                    <a href="https://github.com/270247829/lkcat-pro" target="_blank">LKCat Pro</a>
                </li>
            </ul>
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
                code: Code,
                value: [20, 50]
            }
        },
        methods: {

        }
    }
</script>