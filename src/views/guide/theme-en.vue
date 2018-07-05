<style>
    .demo-theme-img{
        width: 90%;
        margin: 0 auto;
    }
</style>
<template>
    <lk-article>
        <article>
            <h1>Customize Theme</h1>
            <p>LKCat provides a default theme, and allows to customize some basic aspects in order to meet the needs of UI diversity from business and brand.</p>
            <p>LKCat uses <a href="http://lesscss.org/" target="_blank">Less</a> as developing language of styles. We use <code>.lkui-</code> as prefix, and have defined a set of variables which can be customized.</p>
            <Anchor title="By overriding variables (Recommend)" h2></Anchor>
            <p>If you are using webpack in your project, we recommend you to override default values of the variables for customization.</p>
            <p>In order to do this, you need to create a dictionary first. For example, create a dictionary <code>my-theme</code> and add a less file <code>index.less</code> in it.</p>
            <lk-code lang="auto" bg>{{ code.theme.less }}</lk-code>
            <blockquote>
                Note: For entire variable list, check out <a href="https://github.com/lkcat/lkcat/blob/2.0/src/styles/custom.less" target="_blank">Default Variables</a>。
            </blockquote>
            <p>After you creating the file which contains the variable you need to override, import it in your entry file <code>main.js</code>:</p>
            <lk-code lang="auto" bg>{{ code.theme.lessImport }}</lk-code>
            <Anchor title="By tool" h2></Anchor>
            <p>If you did not use webpack, it can be helpful to compile theme file by our tool <a href="https://github.com/lkcat/lkcat-theme" target="_blank">lkcat-theme</a></p>
            <p>Install the tool globally by npm first.</p>
            <lk-code lang="auto" bg>{{ code.theme.install }}</lk-code>
            <p>Then create a dictionary for the theme file and initialize the theme project. The tool will automatically pull up-to-date source code from LKCat repository.</p>
            <lk-code lang="auto" bg>{{ code.theme.init }}</lk-code>
            <p>Edit <code>my-theme/custom.less</code>, override the variables and compile it by this command:</p>
            <lk-code lang="auto" bg>{{ code.theme.build }}</lk-code>
            <p>The tool will generate the style code <code>lkcat.css</code> in this dictionary. The only thing you need to do is import it in your entry file <code>main.js</code>:</p>
            <lk-code lang="js" bg>{{ code.theme.import }}</lk-code>
            <Alert show-icon style="margin-top: 16px">Note: The tool will pull HEAD branch from GitHub, which could be different from the version you use. Also, you need to repull it every time you updating LKCat.</Alert>
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
