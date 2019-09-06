<template>
    <div>
        <p v-for="(comment, index) in comments" :key="index">
            {{comment.content}}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comments: {},    
        }
    },
    methods: {
        
    },
    async created() {
        const page = this.$route.query.page;
        console.log(page);
        const token = localStorage.token;
        console.log(token)
        const url = token?"/api/comments?token="+token+"&offset="+(page-1)+"&limit=15":"/api/comments?"+"offset="+(page-1)+"&limit=15"
        console.log(url)
        const res = await this.$http.get(url);
        this.comments = res.data;
    },
}
</script>

<style lang="css">
    
</style>