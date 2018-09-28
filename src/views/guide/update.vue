<style>
    .doc-update .lkui-timeline .lkui-timeline-item-content{
        top: -14px;
    }
    .doc-update h2{
        margin: 0;
        font-weight: normal;
    }
    .doc-update code{
        margin: 8px 0 10px;
    }
    .doc-update ul{
        padding-left: 22px !important;
    }
    .doc-update-important{
        color: #3399ff;
    }
    .doc-update-loop.lkui-load-loop{
        animation-duration: 3s;
    }
</style>
<template>
    <lk-article>
        <h1>更新日志</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="0.3.0" h2></Anchor>
                    <p>
                        <code>2018-09-12</code>
                    </p>
                    <ul>
                        <li>修复 日期选择器 <a href="/#/components/date-picker" target="_blank" ><code>DatePicker</code></a> 无法选择月份的BUG </li>
                        <li>修复 一些其他BUG </li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.2.9" h2></Anchor>
                    <p>
                        <code>2018-08-02</code>
                    </p>
                    <ul>
                        <li>新增 相对时间 <a href="/#/components/time" target="_blank" ><code>Time</code></a> 组件 </li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.2.8" h2></Anchor>
                    <p>
                        <code>2018-07-23</code>
                    </p>
                    <ul>
                        <li>新增 抽屉 <a href="/#/components/drawer" target="_blank" ><code>Drawer</code></a> 组件 </li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.2.7" h2></Anchor>
                    <p>
                        <code>2018-07-15</code>
                    </p>
                    <ul>
                        <li><code>Icon</code> 组件 字体未打包的BUG修复</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.2.6" h2></Anchor>
                    <p>
                        <code>2018-07-11</code>
                    </p>
                    <ul>
                        <li><code>Icon</code> 组件新增 <code>custom</code> 属性，可选择阿里巴巴字体库。</li>
                    </ul>
                </Timeline-item>
            </Timeline>
        </article>
    </lk-article>
</template>
<script>
    import lkArticle from '../../components/article.vue';
    import lkCode from 'lkCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            lkArticle,
            lkCode,
            Anchor,
            issue,
            mention
        },
        data () {
            return {
                code: Code
            }
        },
        mounted () {
            window.localStorage.setItem('version', version.version);
        },
        methods: {
            handleBefore () {
            }
        }
    }
</script>
