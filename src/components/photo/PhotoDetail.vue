<template>
  <v-touch class="detail" :style="styleObj" @swipeleft="swipeleft" @swiperight="swiperight" @tap="tap"></v-touch>
</template>
<script>
export default {
  data(){
      return {
          nowIndex:0,  // 存放当前显示图片的下标
      }
  },
  // 由于每次photoList的下标都会改变，将其写在computed里：
  computed:{
      styleObj() {
          return {
              // this.$store.state.photoList：获取状态池里的photoList
              background: `#000 url(${this.$store.state.photoList[this.nowIndex].url}) no-repeat center/contain` 
              // background-size属性要写在background属性集里，必须以position/size的形式             
          }
        }
  },
  mounted () {
      // nowIndex的初值为点击图片时所传的值：
      this.nowIndex = this.$route.params.index;
  },
  methods: {
      swipeleft(){
          this.nowIndex--;
          if(this.nowIndex == -1){
              this.nowIndex = this.$store.state.photoList.length-1;
          }
      },
      swiperight(){
          this.nowIndex++;
          if(this.nowIndex == this.$store.state.photoList.length){
              this.nowIndex = 0;
          }
      },
      tap(){
          this.$router.go(-1);
      }
  }
}
</script>
<style scoped>
.detail{
    margin: 1rem 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
