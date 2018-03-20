<template>
  <div class="photo">
    <ul class="photo clearfix">
        <li v-for="(item,index) in photoList" :key="index">
            <router-link :to="'/photo/photodetail/'+index">
                <img :src="item.url" alt="">
            </router-link>
        </li>
    </ul>
    <div class="loading" v-show="isLoading">
        <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div class="end" v-show="isEnd">
        <h3>到底啦别拉啦!</h3>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data(){
      return {
          photoList:[],
          isLoading: true,  
          isEnd: false
      }
  }, 
  mounted(){
      this.loadPhotos();
      window.onscroll = () => {
          let heightView = document.documentElement.clientHeight;  // 获取浏览器当前窗口可视区域高度
                let heightScroll = document.documentElement.scrollTop || document.body.scrollTop;  // 获取滚动条高度（兼容性问题）
                let heightAll = document.documentElement.scrollHeight;  // 获取全部内容的高度
                if(heightView + heightScroll == heightAll){  // 若三者满足该等式关系，说明滚动条已到达底部
                    this.isLoading = true;
                    if(!this.isEnd){  // 滚动条未到达底部时加载数据
                        this.loadData();
                    }else{  // 若滚动条到达底部，禁止显示加载动图：
                        this.isLoading = false;
                    }
                }
      };
  },
  methods: {
      loadPhotos(){
          let url = 'http://gank.io/api/data/福利/'+this.photoList.length +'/1';
          Axios.get(url).then( res => {
              let data = res.data.results;
              this.isLoading = false;
              if(data.length <= 0) this.isEnd = true;
              this.photoList = this.photoList.concat(data);
              this.$store.commit('setPhotoList',{list:this.photoList});//调用mutaitions方法并传参
        }).catch( () => {
            console.log('请求失败');
        });
      }
  }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
.photo{
    margin: 1rem 0;
}
.photo li{
    float: left;
}
.photo a{
    display: block;
}
.photo li img{
    width: 100%;
}
</style>
<template>
  <div class="photo">
    <ul class="photo clearfix">
        <li v-for="(item,index) in photoList" :key="index">
            <router-link :to="'/photo/photodetail/'+index">
                <img :src="item.url" alt="">
            </router-link>
        </li>
    </ul>
    <div class="loading" v-show="isLoading">
        <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div class="end" v-show="isEnd">
        <h3>到底啦别拉啦!</h3>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data(){
      return {
          photoList:[],
          isLoading: true,  
          isEnd: false
      }
  }, 
  mounted(){
      this.loadPhotos();
      window.onscroll = () => {
          let heightView = document.documentElement.clientHeight;  // 获取浏览器当前窗口可视区域高度
                let heightScroll = document.documentElement.scrollTop || document.body.scrollTop;  // 获取滚动条高度（兼容性问题）
                let heightAll = document.documentElement.scrollHeight;  // 获取全部内容的高度
                if(heightView + heightScroll == heightAll){  // 若三者满足该等式关系，说明滚动条已到达底部
                    this.isLoading = true;
                    if(!this.isEnd){  // 滚动条未到达底部时加载数据
                        this.loadData();
                    }else{  // 若滚动条到达底部，禁止显示加载动图：
                        this.isLoading = false;
                    }
                }
      };
  },
  methods: {
      loadPhotos(){
          let url = 'http://gank.io/api/data/福利/'+this.photoList.length +'/1';
          Axios.get(url).then( res => {
              let data = res.data.results;
              this.isLoading = false;
              if(data.length <= 0) this.isEnd = true;
              this.photoList = this.photoList.concat(data);
              this.$store.commit('setPhotoList',{list:this.photoList});//调用mutaitions方法并传参
        }).catch( () => {
            console.log('请求失败');
        });
      }
  }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
.photo{
    margin: 1rem 0;
}
.photo li{
    float: left;
}
.photo a{
    display: block;
}
.photo li img{
    width: 100%;
}
</style>
<template>
  <div class="photo">
    <ul class="photo clearfix">
        <li v-for="(item,index) in photoList" :key="index">
            <router-link :to="'/photo/photodetail/'+index">
                <img :src="item.url" alt="">
            </router-link>
        </li>
    </ul>
    <div class="loading" v-show="isLoading">
        <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div class="end" v-show="isEnd">
        <h3>到底啦别拉啦!</h3>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data(){
      return {
          photoList:[],
          isLoading: true,  
          isEnd: false
      }
  }, 
  mounted(){
      this.loadPhotos();
      window.onscroll = () => {
          let heightView = document.documentElement.clientHeight;  // 获取浏览器当前窗口可视区域高度
                let heightScroll = document.documentElement.scrollTop || document.body.scrollTop;  // 获取滚动条高度（兼容性问题）
                let heightAll = document.documentElement.scrollHeight;  // 获取全部内容的高度
                if(heightView + heightScroll == heightAll){  // 若三者满足该等式关系，说明滚动条已到达底部
                    this.isLoading = true;
                    if(!this.isEnd){  // 滚动条未到达底部时加载数据
                        this.loadData();
                    }else{  // 若滚动条到达底部，禁止显示加载动图：
                        this.isLoading = false;
                    }
                }
      };
  },
  methods: {
      loadPhotos(){
          let url = 'http://gank.io/api/data/福利/'+this.photoList.length +'/1';
          Axios.get(url).then( res => {
              let data = res.data.results;
              this.isLoading = false;
              if(data.length <= 0) this.isEnd = true;
              this.photoList = this.photoList.concat(data);
              this.$store.commit('setPhotoList',{list:this.photoList});//调用mutaitions方法并传参
        }).catch( () => {
            console.log('请求失败');
        });
      }
  }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
.photo{
    margin: 1rem 0;
}
.photo li{
    float: left;
}
.photo a{
    display: block;
}
.photo li img{
    width: 100%;
}
</style>
