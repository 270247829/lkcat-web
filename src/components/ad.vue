<template>
    <div v-if="lang === 'zh-CN'">

        <div class="advertisement">

        </div>
    </div>
</template>
<script>
    import adSend from './ad-send.vue';
    import bus from './bus';

    export default {
        components: { adSend },
        data () {
            return {
                lang: this.$lang,
                ad_index: 1  // 随机广告索引，更好地显示一类广告
            }
        },
        methods: {
            handleAd (name) {
                _hmt.push(['_trackEvent', name, 'click']);
            },
            handleSendAd () {
                bus.$emit('on-donate-show');
            }
        },
        mounted () {
            this.lang = this.$lang;
            // 随机广告索引
            this.ad_index = Math.floor(Math.random () * 2 + 1);
        }
    }
</script>
<style lang="less">
    .advertisement{
        margin: 32px 0;
        padding: 6px;
        border: 1px solid #dddee1;
        border-radius: 6px;

        &-main{
            position: relative;
            padding: 8px;
        }

        a{
            opacity: 0.8;
            transition: opacity .2s ease-in-out;
        }
        a:hover{
            opacity: 1;
        }
        a:after{
            display: none;
        }
        img{
            width: 100%;
        }
    }
</style>