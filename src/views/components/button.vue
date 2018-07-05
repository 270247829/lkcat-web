<template>
    <lk-article>
        <article>
            <h1>Button 按钮</h1>
            <p>按钮用于开始一个即时操作。</p>
            <Anchor title="何时使用" h2></Anchor>
            <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
            <Anchor title="代码示例" h2></Anchor>
            <!-- <Row gutter="16">
                <Col span="12"> -->
                    <Demo title="按钮样式" >
                        <div slot="demo">
                            <Row>
                                <Button>默认按钮</Button>
                                <Button type="primary">主要按钮</Button>
                                <Button type="info">信息按钮</Button>
                                <Button type="success">成功按钮</Button>
                                <Button type="warning">警告按钮</Button>
                                <Button type="error">危险按钮</Button>
                                <Button type="ghost">幽灵按钮</Button>
                                <Button type="dashed">虚线按钮</Button>
                            </Row>
                            <Row>
                                <Button type="primary" shape="circle" icon="ios-search"></Button>
                                <Button type="primary" shape="circle">圆角按钮</Button>
                                <Button type="primary" icon="ios-search">图标带文字按钮</Button>
                                <Button type="primary" shape="circle" icon="ios-search">圆角图标带文字按钮</Button>
                            </Row>
                            <Row>
                                <Button type="primary" size="large">大尺寸</Button>
                                <Button type="primary">默认尺寸</Button>
                                <Button type="primary" size="small">小尺寸</Button>
                            </Row>
                            <Row>
                                 <Button type="primary" disabled>禁用状态</Button>
                            </Row>
                        </div>
                        <div slot="desc">
                            <p><span class="info">按钮类型</span>：通过设置<code>type</code>为<code>primary</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>ghost</code>、<code>dashed</code>
                            定义按钮样式，不设置为默认样式。</p>
                            <p><span class="info">按钮图标</span>：通过设置<code>icon</code> 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 <code>icon</code> 属性。</p>
                            <p><span class="info">按钮形状</span>：通过设置<code>shape</code>属性为<code>circle</code>，可将按钮置为圆的形状。</p>
                            <p><span class="info">按钮尺寸</span>：通过设置<code>size</code>为<code>large</code>和<code>small</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                            <p><span class="info">按钮状态</span>：通过添加<code>disabled</code>属性可将按钮设置为不可用状态。</p>
                        </div>
                        <lk-code lang="html" slot="code">{{ code.type }}</lk-code>
                    </Demo>
                    <Demo title="加载中状态">
                        <div slot="demo">
                            <Button type="primary" loading>Loading...</Button>
                            <Button type="primary" :loading="loading" @click="toLoading">
                                <span v-if="!loading">Click me!</span>
                                <span v-else>Loading...</span>
                            </Button>
                            <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
                                <span v-if="!loading2">Click me!</span>
                                <span v-else>Loading...</span>
                            </Button>
                        </div>
                        <div slot="desc">
                            <p>通过添加<code>loading</code>属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。</p>
                        </div>
                        <lk-code lang="html" slot="code">{{ code.loading }}</lk-code>
                    </Demo>
                    <Demo title="按钮组合">
                        <div slot="demo">
                            <h4>Basic</h4>
                            <br><br>
                            <ButtonGroup>
                                <Button>Cancel</Button>
                                <Button type="primary">Confirm</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button disabled>Yesterday</Button>
                                <Button disabled>Today</Button>
                                <Button disabled>Tomorrow</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="primary">L</Button>
                                <Button>M</Button>
                                <Button type="ghost">M</Button>
                                <Button type="dashed">R</Button>
                            </ButtonGroup>
                            <br><br>
                            <h4>Icons</h4>
                            <br><br>
                            <ButtonGroup>
                                <Button type="primary">
                                    <Icon type="chevron-left"></Icon>
                                    Backward
                                </Button>
                                <Button type="primary">
                                    Forward
                                    <Icon type="chevron-right"></Icon>
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="primary" icon="ios-skipbackward"></Button>
                                <Button type="primary" icon="ios-skipforward"></Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="ghost" icon="ios-color-wand-outline"></Button>
                                <Button type="ghost" icon="ios-sunny-outline"></Button>
                                <Button type="ghost" icon="ios-crop"></Button>
                                <Button type="ghost" icon="ios-color-filter-outline"></Button>
                            </ButtonGroup>
                            <br><br>
                            <h4>Circle</h4>
                            <br><br>
                            <ButtonGroup shape="circle">
                                <Button type="primary">
                                    <Icon type="chevron-left"></Icon>
                                    Backward
                                </Button>
                                <Button type="primary">
                                    Forward
                                    <Icon type="chevron-right"></Icon>
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup shape="circle">
                                <Button type="primary" icon="ios-skipbackward"></Button>
                                <Button type="primary" icon="ios-skipforward"></Button>
                            </ButtonGroup>
                            <ButtonGroup shape="circle">
                                <Button type="ghost" icon="ios-color-wand-outline"></Button>
                                <Button type="ghost" icon="ios-sunny-outline"></Button>
                                <Button type="ghost" icon="ios-crop"></Button>
                                <Button type="ghost" icon="ios-color-filter-outline"></Button>
                            </ButtonGroup>
                            <br><br>
                            <h4>Size</h4>
                            <br><br>
                            <ButtonGroup size="large">
                                <Button type="ghost">Large</Button>
                                <Button type="ghost">Large</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="ghost">Default</Button>
                                <Button type="ghost">Default</Button>
                            </ButtonGroup>
                            <ButtonGroup size="small">
                                <Button type="ghost">Small</Button>
                                <Button type="ghost">Small</Button>
                            </ButtonGroup>
                            <br><br>
                            <ButtonGroup size="large" shape="circle">
                                <Button type="ghost">Large</Button>
                                <Button type="ghost">Large</Button>
                            </ButtonGroup>
                            <ButtonGroup shape="circle">
                                <Button type="ghost">Default</Button>
                                <Button type="ghost">Default</Button>
                            </ButtonGroup>
                            <ButtonGroup size="small" shape="circle">
                                <Button type="ghost">Small</Button>
                                <Button type="ghost">Small</Button>
                            </ButtonGroup>
                        </div>
                        <div slot="desc">
                            <p>将多个<code>Button</code>放入<code>ButtonGroup</code>内，可实现按钮组合的效果。</p>
                            <p>通过设置<code>ButtonGroup</code>的属性<code>size</code>为<code>large</code>和<code>small</code>，可将按钮组尺寸设置为大和小，不设置<code>size</code>，则为默认（中）尺寸。</p>
                            <p>通过设置<code>ButtonGroup</code>的属性<code>shape</code>为<code>circle</code>，可将按钮组形状设置为圆角。</p>
                        </div>
                        <lk-code lang="html" slot="code">{{ code.group }}</lk-code>
                    </Demo>
                    <Demo title="按钮组纵向排列">
                        <div slot="demo">
                            <ButtonGroup vertical>
                                <Button type="ghost" icon="social-facebook"></Button>
                                <Button type="ghost" icon="social-twitter"></Button>
                                <Button type="ghost" icon="social-googleplus"></Button>
                                <Button type="ghost" icon="social-tumblr"></Button>
                            </ButtonGroup>
                        </div>
                        <div slot="desc">
                            <p>通过设置<code>ButtonGroup</code>的属性<code>vertical</code>，可以使按钮组纵向排列。</p>
                        </div>
                        <lk-code lang="html" slot="code">{{ code.vertical }}</lk-code>
                    </Demo>
                <!-- </Col> -->
            <!-- </Row> -->
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Button props" h3></Anchor>
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
                            <td>type</td>
                            <td>按钮类型，可选值为<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>按钮大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>按钮形状，可选值为<code>circle</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>long</td>
                            <td>开启后，按钮的长度为 100%</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>html-type</td>
                            <td>设置<code>button</code>原生的<code>type</code>，可选值为<code>button</code>、<code>submit</code>、<code>reset</code></td>
                            <td>String</td>
                            <td>button</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置按钮为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>设置按钮为加载中状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>设置按钮的图标类型</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="ButtonGroup props" h3></Anchor>
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
                            <td>size</td>
                            <td>按钮组合大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>按钮组合形状，可选值为<code>circle</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>是否纵向排列按钮组</td>
                            <td>Boolean</td>
                            <td>false</td>
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
    import Code from '../../code/button';
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
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
