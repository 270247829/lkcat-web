<template>
    <i-article>
        <article>
            <h1>参与贡献</h1>
            <Anchor title="加入我们" h2></Anchor>
            <p>QQ群</p>
            <ul>
                <li><a href="https://jq.qq.com/?_wv=1027&k=5HrXvU0" target="_blank" >点击加群</a>，或者手动搜索群号：813229201</li>
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
                code: Code
            }
        },
        methods: {

        }
    }
</script>