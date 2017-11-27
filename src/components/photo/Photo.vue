<template>
  <div id="photo">
        <common-header bgColor="blueviolet">
            <span slot="header">Photo</span>
        </common-header>
        <h1>photo</h1> 
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