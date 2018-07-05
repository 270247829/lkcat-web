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
            <h1>Timeline</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Used to vertically display a series of information ordered by time.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
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
                    <p>Basic timeline.</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.base }}</lk-code>
            </Demo>
            <Demo title="Circle Colors">
                <div slot="demo">
                    <Timeline>
                        <TimelineItem color="green">发布1.0版本</TimelineItem>
                        <TimelineItem color="green">发布2.0版本</TimelineItem>
                        <TimelineItem color="red">严重故障</TimelineItem>
                        <TimelineItem color="blue">发布3.0版本</TimelineItem>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>Use various colors to indicate different situations. You can use <code>green</code>, <code>red</code>, <code>blue</code> or custom defined colors. Default color is blue.</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.color }}</lk-code>
            </Demo>
            <Demo title="Last Item">
                <div slot="demo">
                    <Timeline pending>
                        <TimelineItem>发布1.0版本</TimelineItem>
                        <TimelineItem>发布2.0版本</TimelineItem>
                        <TimelineItem>发布3.0版本</TimelineItem>
                        <TimelineItem><a href="#">查看更多</a></TimelineItem>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>Passing a <code>pending</code> property marks the last item as a ghost node, indicating incompleteness.</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.pending }}</lk-code>
            </Demo>
            <Demo title="Custom Timeline Items">
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
                    <p>Accepts a slot to customize the timeline item's content, such as the icon.</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.dot }}</lk-code>
            </Demo>

            

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Timeline props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>pending</td>
                            <td>Indicates if the last item is a ghost node</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TimelineItem props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>color</td>
                            <td>Circle color. Can choose between <code>blue</code>, <code>red</code>, <code>green</code>, or custom defined.</td>
                            <td>String</td>
                            <td>blue</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TimelineItem slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>dot</td>
                            <td>Custom defined timeline item content</td>
                        </tr>
                        <tr>
                            <td>None</td>
                            <td>Basic content</td>
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