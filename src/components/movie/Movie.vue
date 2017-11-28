<template>
    <div id="movie">
        <common-header bgColor="saddlebrown">
            <!--将原头部组件的slot位置用span待替，使用slot属性对应slot标签name值完成替换:-->
            <span slot="header">Movie</span>
        </common-header>
        <router-view></router-view> 
        <common-footer  bgColor="saddlebrown"></common-footer>       
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
