<template>
    <lk-article>
        <article>
            <h1>Installation</h1>
            <Anchor title="CDN" h2></Anchor>
            <p>Get the latest version of LKCat from <a href="https://unpkg.com/lkcat/" target="_blank">unpkg.com/lkcat</a>. Use CDN to deliver compiled JS and CSS to your project:</p>
            <lk-code lang="html" bg>{{ code.install.cdn }}</lk-code>
            <Anchor title="Get Started" h3></Anchor>
            <p>It's easy to get started with CDN. Copy the following code or go to <a href="http://output.jsbin.com/vowupu" target="_blank">Online Testing Bin</a>。</p>
            <lk-code lang="auto" bg>{{ code.install.demo }}</lk-code>
            <Anchor title="npm" h2></Anchor>
            <p>Install LKCat with the node package manager. It can work with webpack and ES2015 very well.</p>
            <lk-code lang="auto" bg>{{ code.install.install }}</lk-code>
            <p>If you wish to use npm and webpack, please continue to read the <router-link to="/docs/guide/start">next paragraph</router-link>.</p>
        </article>
    </lk-article>
</template>
<script>
    import lkArticle from '../../components/article.vue';
    import lkCode from 'lkCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            lkArticle,
            lkCode,
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
