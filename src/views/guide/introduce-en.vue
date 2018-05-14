<template>
    <i-article>
        <article>
            <h1>Introduction</h1>
            <p>LKCat Pro is a background management system of website developed on the basis of LKCat UI component library.</p>
            <Anchor title="Related Links" h2></Anchor>
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
