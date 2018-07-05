<template>
    <lk-article>
        <article>
            <h1>Rate</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>A quick rating operation on something or show evaluation.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Rate v-model="value"></Rate>
                </div>
                <div slot="desc">
                    <p>The simplest usage.</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.base }}</lk-code>
            </Demo>
            <Demo title="Half star">
                <div slot="demo">
                    <Rate allow-half v-model="valueHalf"></Rate>
                </div>
                <div slot="desc">
                    <p>Set the attribute <code>allow-half</code> to select the half star.</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.half }}</lk-code>
            </Demo>
            <Demo title="Show copywriting">
                <div slot="demo">
                    <Row>
                        <Col span="12">
                            <Rate show-text v-model="valueText"></Rate>
                        </Col>
                        <Col span="12">
                            <Rate show-text allow-half v-model="valueCustomText">
                                <span style="color: #f5a623">{{ valueCustomText }}</span>
                            </Rate>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>Set the property <code>show-text</code> to display the prompt text.</p>
                    <p>The prompt can also be customized via the slot.</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.text }}</lk-code>
            </Demo>
            <Demo title="Read only">
                <div slot="demo">
                    <Rate disabled v-model="valueDisabled"></Rate>
                </div>
                <div slot="desc">
                    <p>Set the property <code>disabled</code> to open read-only mode, unable to interact.</p>
                </div>
                <lk-code lang="html" slot="code">{{ code.disabled }}</lk-code>
            </Demo>

            

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Rate props" h3></Anchor>
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
                            <td>count</td>
                            <td>Star count.</td>
                            <td>Number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>Current value. Use v-model to enable a two-way binding.</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>allow-half</td>
                            <td>Whether to allow semi selection.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Read only, unable to interact.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-text</td>
                            <td>Whether to display a prompt text.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Rate events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>Emitted when rate changing.</td>
                            <td>value</td>
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
    import Code from '../../code/rate';
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
                value: 0,
                valueHalf: 2.5,
                valueText: 3,
                valueCustomText: 3.8,
                valueDisabled: 2
            }
        },
        methods: {

        }
    };
</script>