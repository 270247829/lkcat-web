<style lang="less">
    .overview{
        a, a:hover{
            color: #666;
        }
        .lkui-card{
            margin: 10px;
        }

        &-card-img{
            img{
                width: 100%;
                height: auto !important;
            }
        }
    }
</style>
<template>
    <lk-article>
        <div class="overview" v-for="item in navigate.components">
            <h3>{{ item.title + ' ' + item.type }}</h3>
            <Row>
                <lk-col v-for="component in item.list" :span="span" :key="component.path">
                    <router-link :to="component.path">
                        <Card>
                            <p slot="title">{{ component.title }}</p>
                            <div class="overview-card-img">
                                <img :src="filePath + component.img">
                            </div>
                        </Card>
                    </router-link>
                </lk-col>
            </Row>
        </div>
    </lk-article>
</template>
<script>
    import Config from '../../config/config';
    import navigate from '../../config/navigate';
    import lkArticle from '../../components/article.vue';

    export default {
        components: {
            iArticle
        },
        props: {
        
        },
        data () {
            return {
                navigate: navigate,
                filePath: Config.filePath,
                span: 8
            }
        },
        computed: {
        
        },
        mounted () {
            this.updateSpin();
            window.addEventListener('resize', this.updateSpin, false);
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.updateSpin, false);
        },
        methods: {
            updateSpin () {
                const width = document.body.clientWidth;
                if (width > 1440) {
                    this.span = 6;
                } else {
                    this.span = 8;
                }
            }
        }
    }
</script>