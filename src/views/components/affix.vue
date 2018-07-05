<style scoped>
    article{
        min-height: 1500px;
    }
    .demo-affix{
        display: inline-block;
        color: #fff;
        padding: 10px 30px;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
</style>
<template>
    <lk-article>
        <article>
            <h1>Affix 图钉</h1>
            <p>将页面元素钉在可视范围。</p>
            <Anchor title="何时使用" h2></Anchor>
            <p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p>
            <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Affix>
                        <span class="demo-affix">固定在最顶部</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>简单使用，当元素不可见时，直接固定在最顶端。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.base }}</lk-code>
            </Demo>
            <Demo title="偏移">
                <div slot="demo">
                    <Affix :offset-top="50">
                        <span class="demo-affix">固定在距离顶部 50px 的位置</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>当滚动到一定距离时再固定。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.top }}</lk-code>
            </Demo>
            <Demo title="固定在底部">
                <div slot="demo">
                    <Affix :offset-bottom="20">
                        <span class="demo-affix">固定在距离底部 20px 的位置</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。</p>
                    <p>注意，<code>offset-top</code>和<code>offset-bottom</code>只可以设置一个，如果都设置，会使用<code>offset-top</code>。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.bottom }}</lk-code>
            </Demo>
            <Demo title="固定状态改变时的回调">
                <div slot="demo">
                    <Affix :offset-top="100" @on-change="change">
                        <span class="demo-affix">固定在距离顶部 100px 的位置</span>
                    </Affix>
                </div>
                <div slot="desc">
                    <p>当固定状态发生改变时，会触发事件。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.change }}</lk-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Affix props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>offset-top</td>
                            <td>距离窗口顶部达到指定偏移量后触发</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>offset-bottom</td>
                            <td>距离窗口底部达到指定偏移量后触发</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Affix events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>在固定状态发生改变时触发</td>
                            <td>true | false</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </lk-article>
</template>
<script>
    import lkArticle from '../../components/article.vue';
    import lkCode from 'lkCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/affix';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            lkArticle,
            lkCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {
            change (status) {
                this.$Message.info(`当前状态：${status}`);
            }
        }
    }
</script>