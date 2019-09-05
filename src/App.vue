<template>
  <div class="index-container">
    <div class="navigate">

      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/"><img src="https://upload-serve.oss-cn-beijing.aliyuncs.com/image/pflogo.png" class="icon">  攀峰工作室</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="http://docs.ayang818.top" target="_blank">工作室云盘</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right v-if="user.id" v-model="user">
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
            <img :src="user.avatarUrl" class="avatar">                
                {{user.name}}</template>
              <b-dropdown-item href="#">签到</b-dropdown-item>
              <b-dropdown-item href="#" @click="exit()">退出登陆</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item right v-if="!user.id" >
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em></em></template>
              <router-link to="/login" class="login">登陆</router-link>
            </b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            user: {},
        }
    },
    methods: {
        exit() {
          localStorage.clear();
          location.href="/";
        }
    },
    async created() {
        if (this.$route.query.token !== null && this.$route.query.token !== undefined) {
          localStorage.setItem("token", this.$route.query.token);
        }
        if (localStorage.token !== (null && undefined) ) {
          const token = localStorage.token;
          var json = {"token": token}
          const res = await this.$http.post("/api/users", json);
          this.user = res.data; 
        }
    },
}
</script>

<style lang="css">
  .login {
    color: #fff;
    text-decoration: none !important;
    outline: none;
    padding: 3px 10px;
    border: 1px solid #fff;
    border-radius: 100px;
  }

  .avatar {
    width: 38px;
    height: 38px;
    border-radius: 5px;
  }

  .nav-link {
    padding: 0px;
  }

  .icon {
    width: 38px;
    height: 38px;
  }
</style>