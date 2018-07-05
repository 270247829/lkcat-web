<template>
    <lk-article>
        <article>
            <h1>LKCat Loader</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Uniform LKCat tag writing specification, all tags can be used in the form of capital letters, including two tags <code>Switch</code> and <code>Circle</code> that are restricted by Vue.</p>
            <p>Although not recommended, you can use the loader option configuration to open all tag prefixes, such as <code>i-date-picker</code> .</p>
            <p><a href="https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended" target="_blank">Why is it recommended to always be PascalCase in a single file component and a string template.</a></p>
            <Anchor title="Usage" h2></Anchor>
            <Anchor title="Install" h3></Anchor>
            <p>First, install lkcat-loader through npm</p>
            <lk-code lang="auto" bg>{{ code.loader.install }}</lk-code>
            <Anchor title="Setting" h3></Anchor>
            <p>Configure webpack to rewrite the normal vue-loader configuration, such as: </p>
            <lk-code bg>{{ code.loader.webpack }}</lk-code>
            <Anchor title="Illustrate" h3></Anchor>
            <ul>
                <li>You can write <code>&lt;Switch&gt;</code> and <code>&lt;Circle&gt;</code> tags now；</li>
                <li>After the parameter <code>prefix</code> is set to <code>true</code>, all LKCat component tag names can be prefixed, such as <code>&lt;i-row&gt;</code> and <code>&lt;i-select&gt;</code> .</li>
            </ul>
            <p>The following is the complete tag name: </p>
            <lk-code bg>{{ code.loader.tags }}</lk-code>
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