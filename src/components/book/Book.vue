<template>
  <div id="book">
        <common-header bgColor="palevioletred">
            <span slot="header">Book</span>
        </common-header>
        <h1>book</h1> 
        <common-footer bgColor="palevioletred"></common-footer>       
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