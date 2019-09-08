<template>
    <div style="height: 100xh;" class="contain-home">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            img-width="1024" img-height="512" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <!-- <b-carousel-slide caption="First slipage-component__scrollde" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide> -->

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://upload-serve.oss-cn-beijing.aliyuncs.com/background/mountains-1.png">
                <h1>Welcome to pfstudio! </h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="广告位招租！" img-blank img-alt="Blank image">
                <p>
                    
                </p>
            </b-carousel-slide>
        </b-carousel>
        <b-row class="introduce">
            <b-col>
                <h2 style="text-align: center;">这里有</h2>
            </b-col>
        </b-row>
        <b-row class="introduce">
            <b-col cols="12"  md="3" class="d-block block">
                <span class="iconfont icon-yanjiufangxiang" id="search"></span>
                <em><br>多元的研究方向(机器学习, Web开发, 数学建模等等)</em>
            </b-col>
            <b-col cols="12"  md="3" class="d-block block">
                <span class="iconfont icon-fenxiang" id="share"></span>
                <em><br>两周一次的技术分享报告会</em>
            </b-col>
            <b-col cols="12"  md="3" class="d-block block">
                <span class="iconfont icon-jishurenyuan" id="dalao"></span>
                <em><br>热爱编程的技术大佬(鼠)</em>
            </b-col>
            <b-col cols="12"  md="3" class="d-block block">
                <span class="iconfont icon-more" id="more"></span>
                <em><br>欢迎加入我们 ! </em>
            </b-col>
        </b-row>
        
    </div>
</template>


<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        },
        created() {
            if (this.$route.query.token!==null) {
                this.$router.push("/");
            }
        },
    }
</script>

<style lang="css">
    .introduce {
        margin: 1rem 4rem;
    }

    .block {
        text-align: center;
    }
    #search, #share, #dalao, #more {
        font-size: 8rem;
        text-align: center;
    }
    #search:hover, #share:hover, #dalao:hover, #more:hover {
        font-size: 9rem;
    }
    
    #search {
        color: #0084ff;
    }
    #share {
        color: pink;
    }
    #dalao {
        color: orange;
    }
    #more {

    }
    .contain-home {
        background: white;
        width: 90%;
        margin: 0 auto;
        border-radius: 1rem;
        height: auto !important;
        padding-top: 0;
        padding-bottom: 2rem;
    }
    .copyright {
        text-align: center;
        height: auto;
    }
    .font {
        font-size: 2rem!important;
    }
</style>