<template>
    <div class="contain">
        <div v-for="(comment, index) in comments" :key="index" class="media-for comments-body">
            <div class="block flex">
                <el-avatar shape="square" :size="35" :src="comment.userMessage.avatarUrl"></el-avatar>
                <p class="name">{{comment.userMessage.name}}</p>
            </div>

            <div class="content-body">
                <p class="content">{{comment.content}}</p>

                <el-button type="danger" icon="el-icon-delete-solid" class="delete-button"
                    @click="deleteComment(comment.id)" v-if="comment.hasRight">删除</el-button>
            </div>
        </div>

        <div class="text-area">
            <h4 style="margin-left: 3rem;">评论 : </h4>
            <div> 
                <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 4}" placeholder="请输入评论内容" v-model="content"
                ></el-input>
                <el-button type="success" icon="el-icon-s-promotion" class="submit-button"
                    @click="submitMessage()">发送~</el-button>
            </div>
        </div>

        <div class="overflow-center navigation">
            <b-pagination-nav :link-gen="linkGen" :number-of-pages="pageNum" use-router v-if="pageNum!==null"></b-pagination-nav>
        </div>

    </div>
</template>

<script>
import { async } from 'q';
    export default {
        data() {
            return {
                comments: {},
                pageNum: {},
                content: '',
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
                this.load(1);
                this.$notify({
                    title: '删除成功',
                    message: '',
                    type: 'success',
                    offset: 50
                });
            },
            async load(routepage) {
                const token = localStorage.token;
                const url = token ? "/api/comments?token=" + token + "&offset=" + ((routepage - 1) * 10) +
                    "&limit=10" :
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
            },
            async submitMessage() {
                if (localStorage.token == null) {
                        this.$notify({
                        title: '请先登陆',
                        message: '',
                        type: 'warning',
                        offset: 50
                    });
                    return;
                }
                if (this.content === '') {
                    this.$notify({
                        title: '评论内容不能为空',
                        message: '',
                        type: 'warning',
                        offset: 50
                    });
                    return;
                }
                const url = "/api/comments?token="+localStorage.token
                const jsondata = {
                    content: this.content,
                }
                const res = await this.$http.post(url, jsondata);
                this.$notify({
                        title: '发送成功',
                        message: '',
                        type: 'success',
                        offset: 50
                });
                this.load(1);
            }
        },
        async created() {
            this.load(this.$route.query.page);
            this.countPage();
        },
        beforeRouteUpdate(to, from, next) {
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

    .comments-body {
        justify-content: space-around;
        margin: 2rem auto;
        max-width: 40 rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #f0f2f7;
        padding-left: 1rem;
    }

    .flex {
        display: flex;
    }

    .name {
        font-size: 15px;
        font-weight: lighter;
        color: rgba(0, 0, 0, .7);
        margin-left: 5px;
    }

    .navigation {
        display: flex;
        margin: 2rem auto;
        max-width: 15rem;
    }

    textarea {
        max-width: 80% !important;
        margin: 0 auto;
    }

    body {
        background: #f6f6f6;
    }

    .contain {
        background: white;
        width: 90%;
        margin: 1rem auto;
        margin-bottom: 0;
        border-radius: 1rem;
        height: auto !important;
        padding-top: 0.5rem;
    }

    .delete-button {
        float: right;
    }

    .content {
        margin: 0;
    }

    .content-body {
        margin: 0.7rem 0.5rem;
        justify-content: space-around;
        padding-bottom: 2rem;
        padding-left: 1rem;
    }
    .submit-button {
        margin: 1rem 10% !important;
    }
</style>