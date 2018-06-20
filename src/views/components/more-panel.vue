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
            <h1>MorePanel 更多条件面板</h1>
            <p>响应式地显示筛选条件。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="垂直分割线">
                <div slot="demo">
                    <div>
                        <MorePanel originalHeight="150">
                            <Form :model="formItem" :label-width="80" slot="form">
                                <FormItem label="Input">
                                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem label="Select">
                                    <Select v-model="formItem.select">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="DatePicker">
                                    <Row>
                                        <Col span="11">
                                            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                                        </Col>
                                        <Col span="2" style="text-align: center">-</Col>
                                        <Col span="11">
                                            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem label="Radio">
                                    <RadioGroup v-model="formItem.radio">
                                        <Radio label="male">Male</Radio>
                                        <Radio label="female">Female</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="Checkbox">
                                    <CheckboxGroup v-model="formItem.checkbox">
                                        <Checkbox label="Eat"></Checkbox>
                                        <Checkbox label="Sleep"></Checkbox>
                                        <Checkbox label="Run"></Checkbox>
                                        <Checkbox label="Movie"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                                <FormItem label="Switch">
                                    <i-switch v-model="formItem.switch" size="large">
                                        <span slot="open">On</span>
                                        <span slot="close">Off</span>
                                    </i-switch>
                                </FormItem>
                                <FormItem label="Slider">
                                    <Slider v-model="formItem.slider" range></Slider>
                                </FormItem>
                                <FormItem label="Text">
                                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary">Submit</Button>
                                    <Button type="ghost" style="margin-left: 8px">Cancel</Button>
                                </FormItem>
                            </Form>
                        </MorePanel>
                    </div>
                </div>
                <div slot="desc">
                    <p>最简单的用法，缩放窗口大小。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="MorePanel props" h3></Anchor>
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
                            <td>original-height</td>
                            <td>收起时morepanel的高度</td>
                            <td>number</td>
                            <td>34</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="MorePanel slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>default</td>
                            <td>默认的slot会位于面板的右侧</td>
                        </tr>
                        <tr>
                            <td>form</td>
                            <td>form slot会位于面板的左侧，一般是搜索的表单区域</td>
                        </tr>
                        <tr>
                            <td>control</td>
                            <td>control slot会跟在form slot后面，一般可以放置一些按钮，比如查询之类</td>
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
    import Code from '../../code/more-panel';
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
                percent: 0,
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
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
