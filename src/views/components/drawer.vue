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
            <h1>Drawer 抽屉</h1>
            <p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Button type="primary" @click="modal1 = true">显示</Button>
                    <Drawer v-model="modal1" title="Basic Drawer" :footerHide="true" >
                        <p>
                            Some contents...
                        </p>
                        <p>
                            Some contents...
                        </p>
                        <p>
                            Some contents...
                        </p>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>最简单的使用方法，使用 v-model 实现双向绑定，来显示 / 隐藏抽屉。</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.base }}</lk-code>
            </Demo>
            <Demo title="自定义位置">
                <div slot="demo">
                    <Button type="primary" @click="modal10 = true">显示</Button>
                    <Drawer v-model="modal10" title="Basic Drawer" :footerHide="true" placement="left" >
                        <p>
                            Some contents...
                        </p>
                        <p>
                            Some contents...
                        </p>
                        <p>
                            Some contents...
                        </p>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p><code>placement</code> 可选值 <code>left</code> <code>right</code></p>
                </div>
                <lk-code lang="html" slot="code">{{ code.position }}</lk-code>
            </Demo>
            <Demo title="显示按钮">
                <div slot="demo">
                    <Button type="primary" @click="modal2 = true">显示</Button>
                    <Drawer v-model="modal2" title="Basic Drawer" >
                        <p>
                            Some contents...
                        </p>
                        <p>
                            Some contents...
                        </p>
                        <p>
                            Some contents...
                        </p>
                    </Drawer>
                </div>
                <div slot="desc">
                    <p>显示页脚操作按钮</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.position }}</lk-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Drawer props" h3></Anchor>
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
                            <td>value</td>
                            <td>抽屉是否显示，可使用 v-model 双向绑定数据。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>抽屉出现位置,可选 <code>left</code>  <code>right</code></td>
                            <td>String</td>
                            <td>right</td>
                        </tr>
                        <tr>
                            <td>mask</td>
                            <td>是否展示遮罩</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>footerHide</td>
                            <td>是否展示页脚</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>抽屉宽度</td>
                            <td>Number | String</td>
                            <td>256</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>抽屉标题，如果使用 slot 自定义了页头，则 title 无效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>mask-closable</td>
                            <td>是否允许点击遮罩层关闭</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>ok-text</td>
                            <td>确定按钮文字</td>
                            <td>String</td>
                            <td>确定</td>
                        </tr>
                        <tr>
                            <td>cancel-text</td>
                            <td>取消按钮文字</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                        <tr>
                            <td>transition-names</td>
                            <td>自定义显示动画，第一项是模态框，第二项是背景</td>
                            <td>Array</td>
                            <td>['move-right', 'move-left']</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Drawer events" h3></Anchor>
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
                            <td>on-ok</td>
                            <td>点击确定的回调</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-cancel</td>
                            <td>点击取消的回调</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-visible-change</td>
                            <td>显示状态发生变化时触发</td>
                            <td>true / false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Drawer slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>header</td>
                            <td>自定义页头</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>自定义页脚内容</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>自定义右上角关闭内容</td>
                        </tr>
                        <tr>
                            <td>无</td>
                            <td>抽屉主体内容</td>
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
    import Code from '../../code/modal';
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
                modal1: false,
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                loading: true,
                modal7: false,
                modal8: false,
                modal9: false,
                modal10: false,
                value: ''
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
