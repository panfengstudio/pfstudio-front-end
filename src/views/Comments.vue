<template>
    <div class="contain">
        <div v-for="(comment, index) in comments" :key="index" class="media-for flex">
            <img :src="comment.userMessage.avatarUrl" alt="" class="avatar">
            <p class="name">{{comment.userMessage.name}}</p>
            <p>{{comment.content}}</p>
            <b-button variant="outline-primary" v-if="comment.hasRight" @click="deleteComment(comment.id)" size="sm">
                删除留言</b-button>
        </div>

        <div class="overflow-auto">
            <b-pagination-nav :link-gen="linkGen" :number-of-pages="pageNum" use-router></b-pagination-nav>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                comments: {},
                pageNum: {},
            }
        },
        methods: {
            async deleteComment(id) {
                const token = localStorage.token;
                const url = "/api/comments?token=" + token + "&id=" + id;
                const res = await this.$http.delete(url);
                this.$router.push({
                    path: '/comments',
                    query: {
                        page: 1,
                    }
                })
                this.load();
            },
            async load(routepage) {
                const token = localStorage.token;
                const url = token ? "/api/comments?token=" + token + "&offset=" + ((routepage - 1) * 10) + "&limit=10" :
                    "/api/comments?" + "offset=" + ((routepage - 1) * 10) + "&limit=10"
                const res = await this.$http.get(url);
                this.comments = res.data;
            },
            linkGen(pageNum) {
                return {
                    path: '/comments',
                    query: {
                        page: pageNum,
                    }
                }
            },
            async countPage() {
                const res = await this.$http.get("/api/comments/count");
                this.pageNum = res.data;
            }
        },
        async created() {
            this.load(this.$route.query.page);
            this.countPage();
        },
        beforeRouteUpdate(to,from,next){
            this.load(to.query.page);
            next();
        },
        computed: {

        }
    }
</script>

<style lang="css">
    .contain {
        height: 100vh;
    }

    .media-for {
        margin: 10px;
    }

    .avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.4rem;
    }

    .flex {
        display: flex;

    }

    .name {
        font-size: 15px;
        font-weight: lighter;
        color: rgba(0, 0, 0, .7)
    }
</style>