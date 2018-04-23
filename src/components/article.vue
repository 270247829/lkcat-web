<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="17">
                        <div class="wrapper-content lkui-article">
                            <slot></slot>
                        </div>
                    </i-col>
                    <i-col span="3">
                        <Affix :offset-top="75">
                            <div class="catalogue" v-show="list.length">
                                <card dis-hover>
                                    <div class="catalogue-title">
                                        <template v-if="lang === 'zh-CN'">目录</template>
                                        <template v-else>Catalogue</template>
                                    </div>
                                    <div class="catalogue-content">
                                        <ul>
                                            <li v-for="item in list">
                                                <a :href="'#' + item.path" @click.stop.prevent="handleClickLink(item.path)">{{ item.title }}</a>
                                            </li>
                                            <li v-if="need_api">
                                                <a href="#API" @click.stop.prevent="handleClickLink('API')">API</a>
                                            </li>
                                        </ul>
                                    </div>
                                </card>
                            </div>

                            <template v-if="lang === 'zh-CN'">
                                <div style="margin-top: 20px"></div>
                            </template>
                        </Affix>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="footer">
            <div class="footer-main">
                <Row>
                    <i-col span="5">
                        <h4>
                            <Icon type="social-github"></Icon>
                            GitHub
                        </h4>
                        <ul>
                            <li>
                                <a href="https://github.com/lkcat/lkcat" target="_blank">LKCat</a>
                            </li>
                            <li>
                                <a href="https://github.com/lkcat/lkcat-cli" target="_blank">LKCat Cli</a>
                            </li>
                            <li>
                                <a href="https://github.com/lkcat/lkcat-admin" target="_blank">LKCat Admin</a>
                            </li>
                            <li>
                                <a href="https://github.com/lkcat/lkcat-doc" target="_blank">LKCat Doc</a>
                            </li>
                            <li>
                                <a href="https://github.com/lkcat/lkcat-project" target="_blank">LKCat Project</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5">
                        <h4>
                            <Icon type="link"></Icon>
                            {{ $t('index.links') }}
                        </h4>
                        <ul>
                            <li>
                                <a href="https://www.LANKEGP.com/" target="_blank">LANKEGP</a> - {{ $t('index.td') }}
                            </li>
                            <li>
                                <a href="http://mi.LANKEGP.com/" target="_blank">Marketing Intelligence</a> - {{ $t('index.td_mi') }}
                            </li>
                            <li>
                                <a href="https://github.com/LANKEGP/inmap/" target="_blank">inMap</a> - {{ $t('index.inmap') }}
                            </li>
                            <li>
                                <a href="https://github.com/LANKEGP/Fregata" target="_blank">Fregata</a> - {{ $t('index.Fregata') }}
                            </li>
                            <li>
                                <a href="https://github.com/LANKEGP/Myna" target="_blank">Myna</a> - {{ $t('index.Myna') }}
                            </li>
                            <li>
                                <a href="https://github.com/LANKEGP/owl" target="_blank">OWL</a> - {{ $t('index.OWL') }}
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <h4>
                            <Icon type="chatbubbles"></Icon>
                            {{ $t('index.community') }}
                        </h4>
                        <ul>
                            <li>
                                <a href="https://github.com/lkcat/lkcat/issues" target="_blank">{{ $t('index.feedback') }}</a>
                            </li>
                            <li>
                                <a href="https://www.lkcatui.com/new-issue" target="_blank">{{ $t('index.bug') }}</a>
                            </li>
                            <li>
                                <a href="https://gitter.im/lkcat/lkcat" target="_blank">{{ $t('index.chat') }}</a>
                            </li>
                            <li>
                                <a href="https://segmentfault.com/t/lkcat" target="_blank">SegmentFault</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <div class="footer-aside">

                        </div>
                    </i-col>
                </Row>
            </div>
        </div>

        <Modal v-model="donate" title="与 LKCat 合作，有效触达技术人群" @on-ok="handleModalClose" @on-cancel="handleModalClose" width="600" class-name="vertical-center-modal">
            <div class="lkui-article">

            </div>
        </Modal>

        <Modal v-model="ask" title="免费加入 LKCat 官方QQ群参与讨论" class-name="vertical-center-modal">
            <div class="lkui-article">
                <p>免费加入官方QQ讨论群，交流 LKCat 技术问题。</p>
                <p>群号：<strong>270247829</strong></p>
                <p>
                    <Alert show-icon>仅限开发者加入，请勿讨论与技术无关的问题，比如发招聘信息等。</Alert>
                </p>
            </div>
        </Modal>

    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';
    import bus from './bus';

    export default {
        components: {
            Navigate,
            navMenu
        },
        data () {
            return {
                list: [],
                need_api: false,
                donate: false,
                ask: false,
                activeKey: '',
                lang: this.$lang,
                adCarousel: 0,
                ad_index: 1  // 随机广告索引，更好地显示一类广告
            }
        },
        methods: {
            handleModalClose () {
                this.donate = false;
            },
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/install-en',
                    '/docs/guide/start',
                    '/docs/guide/start-en',
                    '/docs/guide/i18n',
                    '/docs/guide/i18n-en',
                    '/docs/guide/theme',
                    '/docs/guide/theme-en',
                    '/docs/guide/lkcat-loader',
                    '/docs/guide/lkcat-loader-en',
                    '/overview',
                    '/overview-en',
                    '/docs/guide/update',
                    '/docs/guide/update-en'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.activeKey = 'live';
                }  else {
                    this.activeKey = 'guide';
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            },
            // 控制锚点跳转
            handleClickLink (id) {
                const top = document.getElementById(id).offsetTop;
                window.location.hash = id;
                let scroll_top = top + 15;
                if (id === 'API') scroll_top -= 150;
                window.scrollTo(0, scroll_top);
            },
            handleAsideAd (name, isQQGroup = false) {
                _hmt.push(['_trackEvent', name, 'click']);
                if (isQQGroup) {
                    this.ask = true;
                }
            }
        },
        created () {
            this.lang = this.$lang;
        },
        mounted () {
            // 随机广告索引
            this.ad_index = Math.floor(Math.random () * 2 + 1);


            this.updateActiveNav();

            const examples = this.$slots.default[0].elm.querySelectorAll('.example');

            // 有示例时，显示示例的目录，没有，显示标题为目录
            if (examples.length) {
                this.need_api = true;
                for (let i = 0; i < examples.length; i++) {
                    const title = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                    this.list.push({
                        title: title,
                        path: title
                    });
                }
            } else {
                this.need_api = false;
                const headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
                for (let i = 0; i < headers.length; i++) {
                    const title = headers[i].querySelectorAll('h2')[0];
                    if (title) {
                        const title_name = title.innerHTML;
                        const path = headers[i].querySelectorAll('h2')[0].getAttribute('id');
                        this.list.push({
                            title: title_name,
                            path: path
                        });
                    }
                }
            }

            bus.$on('on-donate-show', () => {
                this.donate = true;
            })
        }
    }
</script>