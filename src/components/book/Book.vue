<template>
  <div id="book">
        <common-header bgColor="palevioletred">
            <span slot="header">Book</span>
        </common-header>
        <swipe class="my-swipe" :speed="100">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
        <common-footer bgColor="palevioletred"></common-footer>       
    </div>
</template>
<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  components: {
      CommonHeader,
      CommonFooter,
      Swipe,
      SwipeItem
  }
}
</script>
<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: 1rem;
}

.slide1 {
  background-image: url('https://img3.doubanio.com/lpic/s24468373.jpg');
  color: #fff;
}

.slide2 {
  background-image: url('https://img3.doubanio.com/lpic/s6989253.jpg');
  color: #000;
}

.slide3 {
  background-image: url('https://img3.doubanio.com/lpic/s27102925.jpg');
  color: #fff;
}
</style>
