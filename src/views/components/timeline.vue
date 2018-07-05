<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
        margin: 0;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
    <lk-article>
        <article>
            <h1>Timeline 时间轴</h1>
            <p>垂直展示的时间流信息。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Timeline>
                        <TimelineItem>
                            <p class="time">1976年</p>
                            <p class="content">Apple I 问世</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">1984年</p>
                            <p class="content">发布 Macintosh</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2007年</p>
                            <p class="content">发布 iPhone</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2010年</p>
                            <p class="content">发布 iPad</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2011年10月5日</p>
                            <p class="content">史蒂夫·乔布斯去世</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>最简单定义一个时间轴的用法。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.base }}</lk-code>
            </Demo>
            <Demo title="圆圈颜色">
                <div slot="demo">
                    <Timeline>
                        <TimelineItem color="green">发布1.0版本</TimelineItem>
                        <TimelineItem color="green">发布2.0版本</TimelineItem>
                        <TimelineItem color="red">严重故障</TimelineItem>
                        <TimelineItem color="blue">发布3.0版本</TimelineItem>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>用各种颜色来标识不同状态，可以使用<code>green</code>、<code>red</code>、<code>blue</code>或自定义的颜色，默认是 blue 。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.color }}</lk-code>
            </Demo>
            <Demo title="最后一个">
                <div slot="demo">
                    <Timeline pending>
                        <TimelineItem>发布1.0版本</TimelineItem>
                        <TimelineItem>发布2.0版本</TimelineItem>
                        <TimelineItem>发布3.0版本</TimelineItem>
                        <TimelineItem><a href="#">查看更多</a></TimelineItem>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>通过添加<code>pending</code>属性来标记最后一个为幽灵节点，标识还未完成。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.pending }}</lk-code>
            </Demo>
            <Demo title="自定义时间轴点">
                <div slot="demo">
                    <Timeline>
                        <TimelineItem color="green">
                            <Icon type="trophy" slot="dot"></Icon>
                            <span>发布里程碑版本</span>
                        </TimelineItem>
                        <TimelineItem>发布1.0版本</TimelineItem>
                        <TimelineItem>发布2.0版本</TimelineItem>
                        <TimelineItem>发布3.0版本</TimelineItem>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>接受一个 slot 来自定义轴点的内容，比如一个图标。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.dot }}</lk-code>
            </Demo>


            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Timeline props" h3></Anchor>
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
                            <td>pending</td>
                            <td>指定是否最后一个节点为幽灵节点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TimelineItem props" h3></Anchor>
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
                            <td>color</td>
                            <td>圆圈颜色，可选值为<code>blue</code>、<code>red</code>、<code>green</code>，或自定义色值</td>
                            <td>String</td>
                            <td>blue</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TimelineItem slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>dot</td>
                            <td>自定义时间轴点内容</td>
                        </tr>
                        <tr>
                            <td>无</td>
                            <td>基本内容</td>
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
    import Code from '../../code/timeline';
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
        }
    }
</script>