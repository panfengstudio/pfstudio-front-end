<template>
    <div class="contain">
        <p class="text">登陆中，请稍等</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        async fetchToken() {
            const code = this.$route.query.code;
            const state = this.$route.query.state;
            const url = "/api/githubcallback?code="+code+"&state="+state;
            const res = await this.$http.get(url);
            localStorage.token = res.data;
            while (true) {
                if (localStorage.token !== null) {
                    location.href = "/?token="+localStorage.token;
                    return;
                }
            }
        }
    },
    created() {
        this.fetchToken();
    },
}
</script>

<style lang="css">
    .text {
        margin: 1rem auto;
        padding-bottom: 1rem;
        width: 8rem;

    }
</style>