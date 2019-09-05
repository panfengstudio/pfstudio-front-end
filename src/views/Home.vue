<template>
    <div style="height: 100xh;">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
            </b-carousel-slide>
        </b-carousel>
        <b-row class="introduce">
            <b-col>
                <h2 style="text-align: center;">这里有</h2>
            </b-col>
        </b-row>
        <b-row class="introduce">
            <b-col class="flex"  style="background: blue;"><em>多面的研究方向(数据处理, 机器学习, Web开发, 数学建模)</em></b-col>
            <b-col class="flex" style="background: pink;"><em></em></b-col>
            <b-col class="flex" style="background: red;"><em></em></b-col>
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

        },
    }
</script>

<style lang="css">
    .introduce {
        margin: 1rem 4rem;
    }

    .flex {
        display: flex;
        text-align: center ;
    }
</style>