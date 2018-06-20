<style lang="less">
    .lkui-article .lkui-select li{
        margin-bottom: 0;
    }
    .lkui-article .lkui-select ul{
        padding-left: 0 !important;
        list-style-type: none;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>TreeSelect 树选择</h1>
            <p>树型选择控件。</p>
            <Anchor title="何时使用" h2></Anchor>
            <p>类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。</p>
            <Demo title="基础用法">
                <div slot="demo">
                    <TreeSelect :data="treeData1" allow-clear style="width:300px" @select="onSelect" @clear="onClear">
                    </TreeSelect>
                </div>
                <div slot="desc">
                    <p>基础用法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="多选">
                <div slot="demo">
                    <TreeSelect :data="treeData1" :multiple="true"  allow-clear style="width:300px" @select="onSelect" @clear="onClear">
                    </TreeSelect>
                </div>
                <div slot="desc">
                    <p>可勾选。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="异步加载">
                <div slot="demo">
                    <TreeSelect :data="treeData3"  allow-clear style="width:300px" @select="onSelect" @clear="onClear" :async="loadData">
                    </TreeSelect>
                </div>
                <div slot="desc">
                    <p>点击展开节点，动态加载数据。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.load }}</i-code>
            </Demo>

            

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="TreeSelect props" h3></Anchor>
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
                            <td>data</td>
                            <td>可嵌套的节点属性的数组，生成tree的数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>支持多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>allow-clear</td>
                            <td>显示清除按钮</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>async</td>
                            <td>异步加载数据</td>
                            <td>Function(node)</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TreeSelect events" h3></Anchor>
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
                            <td>check</td>
                            <td>点击复选框触发</td>
                            <td>childrenArray</td>
                        </tr>
                        <tr>
                            <td>select</td>
                            <td>点击树节点触发</td>
                            <td>childrenArray</td>
                        </tr>
                        <tr>
                            <td>clear</td>
                            <td>点击清除按钮触发</td>
                            <td>null</td>
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
    import Code from '../../code/tree-select';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data() {
            return {
                code:Code,
                treeData1: [{
                    title: 'parent 1',
                    expanded: true,
                    children: [{
                    title: 'parent 1-0',
                    expanded: true,
                    children: [{
                        title: 'my leaf',
                    }, {
                        title: 'your leaf',
                    }]
                    }, {
                    title: 'parent 1-1',
                    children: [{
                        title: "abc"
                    }]
                    }]
                }],
                treeData3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ]
            }
        },
        methods: {
            onSelect(data) {
                console.log(data);
            },
            onClear(data) {
                console.log('clear', data);
            },
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>
