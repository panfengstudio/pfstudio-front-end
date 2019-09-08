<template>
  <div class="index-container">
    <div class="navigate">

      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand><router-link to="/" class="link-like-1"><img src="https://upload-serve.oss-cn-beijing.aliyuncs.com/image/pflogo.png" class="icon">攀峰工作室</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="http://docs.ayang818.top" target="_blank">工作室云盘</b-nav-item>
          </b-navbar-nav>

        
          <b-navbar-nav>
            <b-nav-item href='https://github.com/pfstudio' target="_blank">开源1.0</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item href='https://github.com/panfengstudio' target="_blank">开源2.0</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item @click="pushToComment()">留言板</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item href="https://baike.baidu.com/item/%E6%94%80%E5%B3%B0%E5%B7%A5%E4%BD%9C%E5%AE%A4/7920332?fr=aladdin" target="_blank">关于我们</b-nav-item>
          </b-navbar-nav>

           <b-navbar-nav class="ml-auto" v-if="user.id">
            <b-nav-item-dropdown right  v-model="user">
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
            <img :src="user.avatarUrl" class="avatar">                
                {{user.name}}</template>
              <b-dropdown-item @click="attend()">签到</b-dropdown-item>
              <b-dropdown-item @click="exit()">退出登陆</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" v-if="!user.id">
            <b-nav-item right>
              <!-- Using 'button-content' slot -->
              <router-link to="/login" class="login"><b-button>登陆</b-button></router-link>
            </b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
    <router-view></router-view>
    <div class="copyright">
      <div>
        <a href="https://github.com/panfengstudio" target="_blank">
        <span class="iconfont icon-git font" style="margin: 1rem;"></span>
        </a>
        <a href="mailto:ayang818@qq.com" target="_blank">
        <span class="iconfont icon-mail font" style="margin: 1rem;"></span>
        </a>
      </div>
      Copyright © 攀峰工作室 2019
    </div>
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
        },
        pushToComment() {
          this.$router.push({
            path: '/comments',
            query: {
              page: 1,
            }
          })
        },
        async attend() {
          const token = localStorage.token;
          const url = "/api/attend?token="+token
          const res = await this.$http.get(url);
          const urlGetTimes = "/api/attendtimes?token="+token;
          const resTimes = await this.$http.get(urlGetTimes);
          const attendTimes = res.data != null ? resTimes.data : "NAN";
          if (res.data === 1) {
            this.$notify({
                    title: '签到成功',
                    message: "累计签到 "+attendTimes + " 次",
                    type: 'success',
                    offset: 50
                });
            return;
          }     
          else if (res.data === "HAD_ATTENDED") {
            this.$notify({
                title: '今日已签到',
                message: "累计签到 "+ attendTimes + " 次",
                type: 'success',
                offset: 50
                });
            return;
          }
          else {
            this.$notify({
                title: '签到失败',
                message: "累计签到 "+ attendTimes + " 次",
                type: 'danger',
                offset: 50
                });
            return;
          }
        },
    },
    async created() {
        if (this.$route.query.token !== null && this.$route.query.token !== undefined) {
          localStorage.setItem("token", this.$route.query.token);
        }
        if (localStorage.token !== null && localStorage.token != undefined ) {
          const token = localStorage.token;
          const json = {"token": token}
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
    margin-right: 4px;
  }

  .link-like {
    color: rgba(255,255,255,.5);
  }

  .link-like-1 {
    color: rgba(255,255,255) !important;
  }

  .link-like-1:hover {
    color: rgba(255,255,255) !important;
  }
  
  .link-like:hover {
    color: rgba(255,255,255, .7);
  }
  .body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI", "Helvetica Neue","PingFang SC","Microsoft              YaHei", "Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC", "Source Han Sans CN","Noto Sans SC","Source Han Sans TC", "Noto Sans CJK TC","Hiragino Sans GB",sans-serif;
  }
</style>