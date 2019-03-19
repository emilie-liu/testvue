<template>
  <div id="app">
<v-header :seller="seller"></v-header>
<ul class="tab">
  <router-link class="tab-item" to="/goods" tag="li">医生列表</router-link>
  <router-link class="tab-item" to="/ratings" tag="li">评论</router-link>
  <router-link class="tab-item" to="/seller" tag="li">商家</router-link>
</ul>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
    <!--<router-view/>-->
  </div>
</template>

<script type="text/ecmascript-6">
  /*引入header组件文件*/
  import header from '@/components/header.vue'
  export default {
/*注册header文件组件*/
    components: {
      'v-header': header
    }
  }
</script>

<style>
  li{
    list-style: none;
    display: inline-block;
  }
  body{
    margin: 0;
    background-color: #F4F4F4;
  }
  .tab{
    background-color: #fff;
    line-height: 40px;
    width: 110%;
    margin-left: -14%;
    /*margin: 0 0 -14%;*/
  }
  .tab .tab-item{
    width: 30%;
  }
  .tab-item.active{
    color: #41D7A6;
    border-bottom: 3px solid #41D7A6;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
