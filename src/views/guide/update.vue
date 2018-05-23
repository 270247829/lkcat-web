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
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="0.0.1" h2></Anchor>
                    <p>
                        <code>2018-02-01</code>
                    </p>
                    <ul>
                        <li>初始化</li>
                    </ul>
                </Timeline-item>
            </Timeline>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
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