<template>
    <div class="container">
            <div class="icon-container">
                <a href="https://github.com/login/oauth/authorize?client_id=8dda2f97a3f7ef156172&redirect_uri=http://pfstudio.ayang818.top/githubcallback&scope=user&state=dedede"
                    class="link"><span class="iconfont icon-git" id="github-icon"></span>
                    <p style="text-align: center;">Github登陆</p>
                </a>
            </div>
            <div class="icon-container">
                <a href="#" class="link">
                    <span class="iconfont icon-QQ qq-icon" id="qq-icon">
                    </span>
                    <p style="text-align: center;">QQ登陆(未完善)</p>
                </a>
            </div>
    </div>    
</template>

<script>
    export default {
        props: {

        },
        data() {
            return {
                user: {},
            }
        },
        methods: {

        },
        created() {
            
        },
    }
</script>

<style lang="css">
    .icon-font {
        height: fit-content;
    }

    a {
        text-decoration: none !important;
        color: black;
    }

    #github-icon {
        font-size: 8rem;
        color: black;
    }

    #qq-icon {
        font-size: 8rem;
        color: #0084ff;
    }

    .container {
        max-width: 350px;
        margin: 200px auto;
        display: flex;
        justify-content: space-between;
        border-radius: 2rem;
        background: white;
    }
</style>