<template>
  <div class="index-container">
    <div class="navigate">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">攀峰工作室</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="http://docs.ayang818.top" target="_blank">工作室云盘</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            
            <b-nav-item-dropdown right v-if="!token" v-model="token">
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item right v-if="token" >
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
    props: {

    },
    data() {
      return {
        token: {},
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="css">
  .login {
    color: #fff;
    text-decoration: none;
    outline: none;
  }
</style>