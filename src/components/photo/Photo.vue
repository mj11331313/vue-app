<template>
  <div id="photo">
        <common-header bgColor="blueviolet">
            <span slot="header">Photo</span>
        </common-header>
        <router-view></router-view> 
        <common-footer bgColor="blueviolet"></common-footer>       
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
