<style lang="less">
    .demo-circle-custom{
        & h5{
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }
        & p{
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }
        & span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;
            &:before{
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            };
        }
        & span i{
            font-style: normal;
            color: #3f414d;
        }
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Divider 分割线</h1>
            <p>区隔内容的分割线。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="垂直分割线">
                <div slot="demo">
                    <div>
                        Text
                        <Divider type="vertical" />
                        <a href="#">Link</a>
                        <Divider type="vertical" />
                        <a href="#">Link</a>
                    </div>
                </div>
                <div slot="desc">
                    <p>使用 <code>type="vertical"</code> 设置为行内的垂直分割线。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="水平分割线">
                <div slot="demo">
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                        <Divider />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                        <Divider>With Text</Divider>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                        <Divider dashed />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                    </div>
                </div>
                <div slot="desc">
                    <p>默认为水平分割线，可在中间加入文字。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="标题位置">
                <div slot="demo">
                    <div>
                        <Divider orientation="left">Left Text</Divider>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                        <Divider orientation="right">Right Text</Divider>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
                    </div>
                </div>
                <div slot="desc">
                    <p>修改分割线标题的位置。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.load }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Divider props" h3></Anchor>
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
                            <td>dashed</td>
                            <td>是否虚线</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>水平还是垂直类型</td>
                            <td>enum: <code>horizontal</code><code> vertical</code></td>
                            <td><code>horizontal</code></td>
                        </tr>
                        <tr>
                            <td>orientation</td>
                            <td>分割线标题的位置</td>
                            <td>enum: <code>left</code><code> right</code></td>
                            <td><code>center</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/divider';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code,
                percent: 0
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
