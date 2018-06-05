<style lang="less">
    @import '../styles/demo.less';
.btn-toggle {
    position: absolute;
    right: 16px;
    bottom: 17px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    font-size: 18px;
    line-height: 18px;
    color: #999;
}
   
</style>
<template>
    <Row class="example" :class="{'example-vertical': vertical}" :id="title">
            <header class="example-header">
                <span>
                    {{ title }}
                    <a :href="`#${title}`">#</a>
                </span>
            </header>
            <div class="example-desc">
                <slot name="desc"></slot>
            </div>
        <i-col class="example-demo" :span="vertical ? 24 : 12">
            <div class="example-case">
                <slot name="demo"></slot>
            </div>
            <div style="height: 20px;margin: 10px;">
            <span class="btn-toggle" @click="showCode = !showCode">
                <Icon type="ios-plus-outline" v-show="!showCode&&!show"></Icon>
                <Icon type="ios-minus-outline" v-show="showCode&&!show"></Icon>
            </span>
            </div>
        </i-col>
        <!-- <div class="example-split"></div> -->
        <i-col class="example-code" :style="codeHeight" :span="vertical ? 24 : 12" v-show="showCode">
            <div :style="style"><slot name="code"></slot></div>
            
            <div class="example-code-more" v-if="showMore" @click="showCode = !showCode" v-show="false">
                <Icon type="ios-arrow-down" v-show="!showCode&&!show"></Icon>

                <Icon type="ios-arrow-up" v-show="showCode&&!show"></Icon>
                 
                <!-- <i-button type="text" v-show="hideCode && !showCode">
                    <transition name="slide-fade">
                        <span v-if="show">显示代码</span>
                    </transition>
                </i-button>
                <i-button type="text" v-show=" showCode">
                    <transition name="slide-fade">
                        <span v-if="show">隐藏代码</span>
                    </transition>
                </i-button> -->
            </div>
        </i-col>
    </Row>
</template>
<script>

    export default {
        name: 'Demo',
        props: {
            title: {
                type: String,
                default: ''
            },
            vertical: {
                type: Boolean,
                default: true
            },
            hideCode: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                showCode: false,
                showMore: true,
                demo_height: 0,
                code_height: 0,
                ready: false,
                lang: this.$lang,
                show: false
            }
        },
        computed: {
            codeHeight () {
                let style = {};

                // if (this.ready) {
                //     if (this.showCode) {
                //         style.height = `${this.code_height}px`;
                //     } else {
                //         style.height = `${this.demo_height}px`;
                //     }
                // }

                return style;
            },
            style () {
                let style = {
                    opacity: 1
                };
                if (this.hideCode && !this.showCode) {
                    style.opacity = 0;
                }
                return style;
            }
        },
        mounted () {
            this.$nextTick(() => {
                const demo_height = this.$children[0].$children[0].$el.clientHeight;
                const code_height = this.$children[0].$children[1].$el.clientHeight + 20;

                this.code_height = code_height;

                if ((code_height <= demo_height) && !this.hideCode) {
                    this.showMore = false;
                }

                this.demo_height = this.hideCode ? 30 : demo_height;
                this.ready = true;
            });

        }
    }
</script>
