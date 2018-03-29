<template>
  <div class="top-header clearfix">
      <div class="top-title">xxx系统</div>
      <div class="top-info">
          <span class="username">{{username}}</span>
          <span>|</span>
          <button class="logout-btn btn btn-link" @click="logout()">退出</button>
      </div>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                username: "admin",
            }
        },

        methods: {
            logout(){
                this.$router.push('/');
            }
        }
    }
</script>
<style>
    .clearfix::after {
        content: "";
        height: 0;
        display: block;
        clear: both;
    }
    .top-header {
        background-color: #0e0e0e;
        position: fixed;
        top: 0;
        height: 50px;
        width: 100%;
        box-shadow: 0px 3px 3px #191515;
        margin: auto;
    }

    .top-header .top-title {
        font-size: 25px;
        float: left;
        margin-left: 15px;
        margin-top: 7px;
    }

    .top-header .top-info {
        float: right;
        margin-top: 8px;
    }

    .top-header .logout-btn {
        padding-left: 0;
    }

    /*去除bootstrap默认button激活样式*/
    .btn:focus,
    .btn:active:focus,
    .btn.active:focus,
    .btn.focus,
    .btn:active.focus,
    .btn.active.focus { 
        outline: none;    
        border-color: transparent;    
        box-shadow:none;
    }

</style>

