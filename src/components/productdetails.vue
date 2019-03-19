<template>
  <div class="product-details">
    <ul class="tabs">
      <li class="tab-item" @click="curId=0" :class="{'cur':curId===0}">支持诊所</li>
      <li class="tab-item" @click="curId=1" :class="{'cur':curId===1}">产品详情</li>
      <li class="tab-item" @click="curId=2" :class="{'cur':curId===2}">预约须知</li>
    </ul>
    <div class="clinic" v-show="curId===0">
      <v-prodetails></v-prodetails>
    </div>
    <div v-show="curId===1">
      <h1>产品详情tab</h1>
    </div>
    <div v-show="curId===2">
      <h1>预约须知tab</h1>
    </div>
    <div class="re-div">
      <span class="re-name">最低价格：</span>
      <span class="re-price">¥338.00</span>
      <button class="btn">立即预约</button>
    </div>
  </div>
</template>
<style>
  .tabs {
    margin-left: -10.6%;
    background-color: #fff;
  }

  .tab-item {
    width: 32.4%;
    line-height: 40px;
  }

  .tab-item.cur {
    color: #41D7A6;
    border-bottom: 2px solid #41D7A6;
  }

  .clinic .porduct-details {
    margin-bottom: 1px;
  }
  .re-div{
    line-height: 50px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    text-align: left;
    padding: 0 8px;
  }
  .re-name{
    font-size: 12px;
    color: #999999;
  }
  .re-price{
    font-size: 22px;
    color: #F4B43E;
  }
  .re-div .btn{
    border: none;
    background-color: #06C7C5;
    color: #fff;
    line-height: 52px;
    padding: 0 20px;
    position: absolute;right: 54px;
  }
</style>
<script type="text/ecmascript-6">
  import prodetails from './prodetails.vue'
  export default{
    data(){
    return {
      curId: 0
    }
  },
  components: {
    'v-prodetails'
  :
    prodetails
  }
  }
</script>
