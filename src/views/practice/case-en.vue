<style>
    .demo-case-img{
        width: 100%;
    }
    .demo-case-img img{
        width: 100%;
    }
</style>
<template>
    <lk-article>
        <article>
            <h1>Practical Cases</h1>
            <p>LKCat is a set of front-end solutions developed by <a href="https://www.LANKEGP.com/" target="_blank">LANKEGP</a> for intermediate and backend business, including engineering, theme customization, multi-language and other functions, greatly improving the development efficiency.</p>
            <p>Since late 2016, LKCat has been used in many new projects of LANKEGP, and even gradually used in refactoring of some core projects.</p>
            <p>LKCat has gradually become the design and development specification for LANKEGP.</p>
            <Anchor title="The Best Case" h2></Anchor>
            <Anchor title="App Analytics" h3></Anchor>
            <Row :gutter="32">
                <lk-col span="10">
                    <p>App analytics is the core product of LANKEGP. Due to historical reasons, the project has been precipitated for a long time. Compared with the traditional development model of the previous version, AppAnalytics has fully been refactored based on LKCat, and its visual effects and interaction has been greatly improved.</p>
                    <p><a href="https://www.LANKEGP.com/products.jsp?languagetype=zh_cn" target="_blank">Immediate access</a></p>
                </lk-col>
                <lk-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </lk-col>
            </Row>
            <Anchor title="Marketing Cloud" h3></Anchor>
            <Row :gutter="32">
                <lk-col span="10">
                    <p>Marketing Cloud is an integrated database marketing product, providing a 360-degree analysis service of customer characteristics and building a comprehensive user portrait based on big data.</p>
                    <p><a href="https://www.LANKEGP.com/product-MarketingCloud.jsp?languagetype=zh_cn" target="_blank">Immediate access</a></p>
                </lk-col>
                <lk-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </lk-col>
            </Row>
            <Anchor title="Geographic" h3></Anchor>
            <Row :gutter="32">
                <lk-col span="10">
                    <p>Geographic is a product which can provide the basis for decision-making in real estate investment policy and offline site selection, based on the online and offline behavior data of massive mobile devices combined with accurate location analysis model.</p>
                </lk-col>
                <lk-col span="14">
                    <Carousel dots="outside">
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                        <Carousel-item>
                            <div class="demo-case-img">
                                <img src="">
                            </div>
                        </Carousel-item>
                    </Carousel>
                </lk-col>
            </Row>
        </article>
    </lk-article>
</template>
<script>
    import lkArticle from '../../components/article.vue';
    import lkCode from 'lkCode';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            lkArticle,
            lkCode,
            Anchor
        },
        data () {
            return {

            }
        },
        methods: {

        }
    };
</script>