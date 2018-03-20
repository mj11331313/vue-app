<template>
  <div id="music">
        <common-header bgColor="rgb(0,150,136)">
          <span slot="header">iListen</span>
        </common-header>
        <!--渲染子组件：-->
        <router-view></router-view> 
        <common-footer bgColor="rgb(0,150,136)"></common-footer>       
    </div>
</template>
<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
export default {
  components: {
      CommonHeader,
      CommonFooter
  }
}
</script>
<style scoped>

</style>
