<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .lkui-modal{
            top: 0;
        }
    }
</style>
<template>
    <lk-article>
        <article>
            <h1>Time 相对时间</h1>
            <p>常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <div>
                        <Time :time="time1" />
                        <br>
                        <Time :time="time2" />
                    </div>
                </div>
                <div slot="desc">
                    <p>设置一个时间戳或 Date，可自动转为相对于当前的时间。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.base }}</lk-code>
            </Demo>
            <Demo title="自动更新间隔">
                <div slot="demo">
                    <Time :time="time3" :interval="1" />
                </div>
                <div slot="desc">
                    <p>设置自动更新间隔，默认为 60 秒。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.position }}</lk-code>
            </Demo>
            <Demo title="不同类型">
                <div slot="demo">
                    <div>
                        <Time :time="time2" />
                        <br>
                        <Time :time="time2" type="date" />
                        <br>
                        <Time :time="time2" type="datetime" />
                    </div>
                </div>
                <div slot="desc">
                    <p>可以根据情况，设置不同的显示类型。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.button }}</lk-code>
            </Demo>
            <Demo title="锚点">
                <div slot="demo">
                    <Time :time="time2" hash="#hash" />
                </div>
                <div slot="desc">
                    <p>设置 <code>hash</code> 属性，相对时间可以点击并定位锚点。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.hash }}</lk-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Time props" h3></Anchor>
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
                            <td>time</td>
                            <td>需要对比的时间，可以是时间戳或 Date 类型</td>
                            <td>Number | Date | String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>类型，可选值为 <code>relative</code>、<code>date</code> 或 <code>datetime</code></td>
                            <td>String</td>
                            <td>relative</td>
                        </tr>
                        <tr>
                            <td>interval</td>
                            <td>自动更新的间隔，单位：秒</td>
                            <td>Number</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>hash</td>
                            <td>填写该值，点击会定位锚点</td>
                            <td>String</td>
                            <td>无</td>
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
    import Code from '../../code/time';
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
                code: Code,
                time1: (new Date()).getTime() - 60 * 3 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                time3: new Date(),
            }
        },
        methods: {

        }
    }
</script>
