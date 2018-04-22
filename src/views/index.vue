<style scoped lang="less">
    @import "../styles/index.less";
</style>
<style>
    .index-version .ivu-badge-count{
        box-shadow: none;
        right: 0;
        top: -3px;
        color: #f50;
        background: transparent;
    }
</style>
<template>
    <div>
        <div class="index">
            <Row   type="flex" justify="center" align="middle" style="position: relative;z-index: 3">
                <i-col span="24" >
                    <h1>LK Cat</h1>
                    <h2>{{ $t('index.title') }}</h2>
                    <div class="list">

                        <router-link :to="'/docs/guide/introduce' + suffix">
                            <Button type="primary" shape="circle">{{ $t('index.guide') }}</Button>
                        </router-link>
                        <router-link :to="'/docs/guide/install' + suffix">
                            <Button type="ghost" shape="circle">{{ $t('index.component') }}</Button>
                        </router-link>
                        <a href="https://github.com/270247829/lkcat" target="_blank">
                            <Icon type="social-github"></Icon>
                            GitHub
                        </a>
                    </div>
                </i-col>
            </Row>
        </div>
        <div id="indexLizi"></div>
        <div class="index-lang">
            <span @click="handleChangeLang">
                <template v-if="lang === 'zh-CN'">EN</template>
                <template v-else>中文</template>
            </span>
        </div>
    </div>
</template>
<script>
    import THREE from '../libs/three/three';
    import bus from '../../src/components/bus';

    export default {
        data () {
            return {
                lang: this.$lang
            }
        },
        computed: {
            suffix () {
                return this.lang === 'zh-CN' ? '' : '-en';
            }
        },
        methods: {
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                bus.$emit('on-change-lang', lang, '/');
            }
        },
        mounted () {
            this.lang = this.$lang;
        },
        beforeDestroy () {
            if (this.interval) clearInterval(this.interval);
        }
    }
</script>
