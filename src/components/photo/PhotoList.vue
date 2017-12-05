<template>
  <ul class="photo clearfix">
      <li v-for="(item,index) in photoList" :key="index">
          <router-link :to="'/photo/photodetail/'+index">
            <img :src="item.src" alt="">
          </router-link>
      </li>
  </ul>
</template>
<script>
import Axios from "axios";
export default {
  data(){
      return {
          photoList:[]
      }
  }, 
  mounted(){
      Axios.get('/static/data/photodata.json').then( res => {
          this.photoList = res.data.photoData;
          // 将photoList存到state里面：
          this.$store.dispatch('setPhotoList',res.data.photoData);
      }).catch();
  }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
.photo{
    margin: 1rem 0;
}
.photo li{
    width: 50%;
    float: left;
}
.photo li img{
    width: 100%;
}
</style>
