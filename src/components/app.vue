<style scoped>
    @import "../styles/common.css";
    .icon-loading{
        position: fixed;
        top: 10px;
        right: 10px;
        color: #0099e5;
        animation: ani-app-loading 1s linear infinite;
    }
    @keyframes ani-app-loading {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
</style>
<template>
    <div>
        <router-view></router-view>
        <Back-top><Icon type="android-arrow-dropup-circle" color="#8c8c8c" size="50"></Icon></Back-top>
        <transition name="fade">
            <div class="loading" v-show="loading">
                <Icon type="load-c" size="18" class="icon-loading"></Icon>
            </div>
        </transition>
    </div>
</template>
<script>
    import bus from './bus';

    export default {
        data () {
            return {
                liveVisible: false,
                LKCatVisible: false,
                lang: this.$lang,
                fee: true
            }
        },
        computed: {
            loading () {
                return bus.loading;
            }
        },
        mounted () {
            this.lang = this.$lang;
            if (window.localStorage.getItem('liveModalTime')) {
                const time = parseInt(window.localStorage.getItem('liveModalTime'));
                const today = this.getTodayUnix();
                if ((today - time) > 86400000 * 5) this.liveVisible = true;
            } else {
                this.liveVisible = true;
            }

            if (this.liveVisible && this.$lang === 'zh-CN') {

            } else if (this.liveVisible && this.$lang === 'en-US') {

            }

        },
        methods: {
            getTodayUnix () {
                const date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                date.setMilliseconds(0);
                return date.getTime();
            },
            handleLive () {
                const today = this.getTodayUnix();
                window.localStorage.setItem('liveModalTime', today);
            },
            feeclose () {
                this.fee = false;
            },
            gotofee () {
                window.open('https://live.bilibili.com/1353202');
            }
        }
    }
</script>
