<style>
.pic-plus > *{
    vertical-align: middle;
}
.pic-plus span {
    font-size: 30px;
    color: #aaa;
    margin: 0 20px;
}
</style>

<template>
    <i-article>
        <article class="pic-plus">
            <h1>LK Cat of Vue</h1>
            <p>这里是 LK Cat 的 Vue 实现，结合了 Ant Design 和 iView ，开发和服务于企业级后台产品。</p>
            <img :src="antd" width="150" />
            <span> + </span>
            <img :src="iview" width="150" />
            <span> + </span>
            <img :src="vue" width="150" />
            <span> = </span>
            <img :src="logo" width="150" />
            <Anchor title="特性" h2></Anchor>
            <ul>
                <li>提炼自企业级中后台产品的交互语言和视觉风格。</li>
                <li>开箱即用的高质量 Vue 组件。</li>
                <li>封装复杂性，提供简单友好的api。</li>
                <li>基于 Ant Design 样式优化。</li>
            </ul>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import antd from '../../images/antd.svg';
    import iview from '../../images/iview.png';
    import vue from '../../images/vue.png';
    import logo from '../../images/logo.svg';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                antd:antd,
                iview:iview,
                vue:vue,
                logo:logo
            }
        },
        methods: {

        }
    }
</script>