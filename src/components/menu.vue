<style>
    .wrapper-header-nav .lkui-menu-item i{
        margin-right: 6px;
    }
    .wrapper-header .lkui-menu{
        z-index: 901;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
    }
</style>
<template>
    <Menu mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <div class="wrapper-header-nav">
            <a href="/" class="wrapper-header-nav-logo router-link-active">
                <img :src="logoPath">
            </a>
            <div class="wrapper-header-nav-search">
                <i-select
                    ref="select"
                    v-model="search"
                    filterable
                    :placeholder="searchText"
                    :not-found-text="notFoundText"
                    @on-change="handleSearch">
                    <i-option v-for="item in navigateList" :key="item.path" :value="item.path">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.title.split(' ')[0] }}</template>
                    </i-option>
                </i-select>
            </div>
            <div class="wrapper-header-nav-list">
                <Menu-item name="guide">
                    <Icon type="ios-navigate"></Icon>
                    {{ $t('index.guide') }}
                </Menu-item>
                <Menu-item name="component">
                    <Icon type="ios-keypad"></Icon>
                    {{ $t('index.component') }}
                </Menu-item>

                <ButtonGroup>
                    <Button type="ghost" size="small" icon="social-github" @click="handleGoToGitHub"></Button>
                    <!-- <Button type="ghost" size="small" @click="handleChangeLang" >
                        <template v-if="lang === 'zh-CN'">EN</template>
                        <template v-else>中文</template>
                    </Button> -->
                </ButtonGroup>
            </div>
        </div>
    </Menu>
</template>
<script>
    import navigate from '../config/navigate';
    import Config from '../config/config';
    import bus from './bus';
    import logo from '../images/logo.svg';
    export default {
        props: {
            activeKey: String
        },
        data () {
            return {
                search: '',
                navigateList: [],
                currentActiveKey: this.activeKey,
                searchText: this.$t('index.search'),
                notFoundText: this.$t('index.notFound'),
                lang: this.$lang,
                logoPath:logo
            };
        },
        watch: {
            activeKey (val) {
                 console.log(val);
                this.currentActiveKey = val;
            },
            currentActiveKey (val) {
                this.$emit('on-change', val);
            }
        },
        methods: {
            handleSearch (path) {
                if (this.lang === 'en-US') path += '-en';
                this.search = '';
                this.$refs.select.setQuery('');
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$router.push(path);
                    }, 300);
                });
            },
            handleSelect (type) {
                const pathSuffix = this.lang === 'zh-CN' ? '' : '-en';

                if (type === 'donate') {
                    bus.$emit('on-donate-show');
                } else if (type === 'github') {
                    window.open('https://github.com/270247829/lkcat');
                } else if (type === 'guide') {
                    this.$router.push(navigate.guide[0].path + pathSuffix);
                } else if (type === 'component') {
                    this.$router.push(navigate.beforeComponents[0].path + pathSuffix);
                } else if (type === 'lkcat-admin') {
                    window.open('https://github.com/lkcat/lkcat-pro');
                } 
                this.$nextTick(() => {
                    this.updateActiveNav();
                });
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/start',
                    '/docs/guide/i18n',
                    '/docs/guide/theme',
                    '/docs/guide/lkcat-loader',
                    '/overview',
                    '/docs/guide/update'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.currentActiveKey = 'component';
                } else {
                    this.currentActiveKey = 'guide';
                }
               
            },
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                const path = this.$route.path.indexOf('-en') > -1 ? this.$route.path.split('-en')[0] : this.$route.path + '-en';
                bus.$emit('on-change-lang', lang, '/#'+ path);
            },
            handleGoToGitHub () {
                _hmt.push(['_trackEvent', 'menu-go-github', 'click']);
                window.open('https://github.com/270247829/lkcat');
            }
        },
        created () {
            this.lang = this.$lang;
            let list = [];
            for (let i = 0; i < navigate.components.length; i++) {
                for (let j = 0; j < navigate.components[i].list.length; j++) {
                    list.push(navigate.components[i].list[j]);
                }
            }
            this.navigateList = list;
        }
    };
</script>