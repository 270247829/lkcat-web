<template>
    <i-article>
        <article>
            <h1>快速上手</h1>
            <Anchor title="使用之前" h2></Anchor>
            <p>高效的开发，离不开基础工程的搭建。在开始使用 LKCat 之前，有必要先了解以下基础知识，我们也假设您已经写过 Vue，并掌握了下面的内容。</p>
            <ul>
                <li>
                    <a href="https://cn.vuejs.org/v2/guide/components.html" target="_blank">Vue组件</a>
                </li>
                <li>
                    <a href="https://cn.vuejs.org/v2/guide/single-file-components.html" target="_blank">单文件组件</a>
                </li>
            </ul>
            <p>以下概念贯穿 LKCat 前后，建议开发者花点时间来了解。</p>
            <ul>
                <li>
                    <code>props</code> 传递数据
                </li>
                <li>
                    <code>slot</code> 内容分发
                </li>
                <li>
                    <code>events</code> <code>$emit</code> <code>@click</code> 事件
                </li>
            </ul>

            <Anchor title="使用 LKCat Pro 示例项目" h2></Anchor>
            <p>以 LKCat Pro 为基础开发，可以为您省去大量配置和调试环境的时间。</p>
            <p>
                示例项目：<a href="https://github.com/270247829/lkcat-pro" target="_blank">lkcat-pro</a>
            </p>
           
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import Study from '../../components/study.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor,
            Study
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