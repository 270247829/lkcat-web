<template>
    <lk-article>
        <article>
            <h1>Internationalization</h1>
            <p>The default language is Chinese. To use other languages, you need to do some customization.</p>
            <Anchor title="Use in Webpack" h2></Anchor>
            <p>Import LKCat</p>
            <lk-code lang="js" bg>{{ code.i18n.demo }}</lk-code>
            <p>Import LKCat on demand</p>
            <lk-code lang="js" bg>{{ code.i18n.demand }}</lk-code>
            <p>Compatible with vue-i18n@6.x+</p>
            <lk-code lang="js" bg>{{ code.i18n.vuei18n6 }}</lk-code>
            <p>Compatible with vue-i18n@5.x</p>
            <lk-code lang="js" bg>{{ code.i18n.vuei18n5 }}</lk-code>
            <Alert show-icon style="margin-top: 16px">When you use vue-i18n, you can also import LKCat components on demand, similar to the example above.</Alert>
            <Anchor title="Use with CDN" h2></Anchor>
            <lk-code lang="html" bg>{{ code.i18n.cdn }}</lk-code>
            <p>Combined with vue-i18n</p>
            <lk-code lang="html" bg>{{ code.i18n.cdnvuei18n }}</lk-code>
            <Anchor title="Supported Languages" h2></Anchor>
            <p>LKCat have beed translated from Chinese to the following languages:</p>
            <ul>
                <li>Chinese Simplified(zh-CN)</li>
                <li>Chinese Traditional(zh-TW)</li>
                <li>English(en-US)</li>
                <li>Turkish(tr-TR)</li>
                <li>Spanish(es-ES)</li>
                <li>Japanese(ja-JP)</li>
                <li>Russian(ru-RU)</li>
                <li>French(fr-FR)</li>
                <li>German(de-DE)</li>
                <li>Brazilian Portuguese(pt-BR)</li>
                <li>Portuguese(pt-PT)</li>
                <li>Korean(ko-KR)</li>
                <li>Vietnamese(vi-VN)</li>
                <li>Swedish(sv-SE)</li>
                <li>Indonesian(id-ID)</li>
                <li>Ukrainian(uk-UA)</li>
                <li>Italian(it-IT)</li>
                <li>Thai(th-TH)</li>
                <li>Hindi(hi-IN)</li>
                <li>Farsi(fa-IR)</li>
                <li>Romanian(ro-RO)</li>
                <li>Greek(el-GR)</li>
                <li>Dutch(nl-NL)</li>
            </ul>
            <p>If your target language is not included, you are more than welcome to contribute: just add another language config <a href="https://github.com/lkcat/lkcat/tree/2.0/src/locale/lang" target="_blank">here</a> and create a pull request.</p>
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
