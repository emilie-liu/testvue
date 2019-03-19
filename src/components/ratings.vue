<template>
  <div>
    <!--<v-prodetails></v-prodetails>-->
    <v-productdetails></v-productdetails>
  </div>
</template>
<style>

</style>
<script type="text/ecmascript-6">
  import productdetails from './productdetails.vue'
//  import prodetails from './prodetails.vue'
  export default {
    components: {
//      'v-prodetails':prodetails,
      'v-productdetails': productdetails
    }
  }
</script>
