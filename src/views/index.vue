<style scoped lang="less">
    @import "../styles/index.less";
</style>
<style>
    .index-version .lkui-badge-count{
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
            <img :src="logoPath" class="logo"/>
            <cat ></cat>
            <Row   type="flex" justify="center" align="middle" style="position: relative;z-index: 3">
                <lk-col span="24" >
                    <h1>LK Cat</h1>
                    <h2>{{ $t('index.title') }}</h2>
                    <div class="list">

                        <router-link :to="'/guide/lkcat' + suffix">
                            <Button type="primary" shape="circle">{{ $t('index.guide') }}</Button>
                        </router-link>
                        <router-link :to="'/components/install' + suffix">
                            <Button type="ghost" shape="circle">{{ $t('index.component') }}</Button>
                        </router-link>
                        <a href="https://github.com/270247829/lkcat" target="_blank">
                            <Button  shape="circle">
                            <Icon type="social-github"></Icon>
                            GitHub
                            </Button>
                        </a>
                    </div>
                </lk-col>
            </Row>
        </div>
        <div id="indexLizi"></div>
        <!-- <div class="index-lang">
            <span @click="handleChangeLang">
                <template v-if="lang === 'zh-CN'">EN</template>
                <template v-else>中文</template>
            </span>
        </div> -->
    </div>
</template>
<script>
    import bus from '../../src/components/bus';
    import cat from './components/cat';
    import logo from '../images/logo.svg';
    export default {
        components: { cat },
        data () {
            return {
                lang: this.$lang,
                logoPath : logo
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
