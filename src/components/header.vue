<template>
  <div id="header">
    <img class="header-img" src="../assets/logo.png" alt=""/>

    <div>
      <div>这是header页面</div>
      <div>店家详细介绍</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  /*  props: {
      seller: {
        type: object
      }
    }*/
  }
</script>
<style>
  #header {
    width: 110%;
    height: 70px;
    background-color: #fff;
    line-height: 32px;
    text-align: left;
  }

  .header-img {
    height: 100%;
    float: left;
  }

  #header > div {
    display: inline-block;
  }
</style>
