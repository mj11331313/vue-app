<template>
  <div>
      <ul class="movie-list">
      <li v-for="item in movieList" :key="item.id" class="movies">
          <div class="movie-img">
            <img :src="item.img" alt="">              
          </div>
          <div class="movie-detail">
              <p>
                  <span class="movie-name">{{item.nm}}</span>
                  <span class="movie-score">评分：{{item.sc}}</span>
              </p>
              <p>{{item.ver}}</p>
              <p>主演：{{item.star}}</p>
              <p>{{item.rt}}</p>
          </div>
      </li>
  </ul>
  <div class="loading" v-show="isLoading">
      <img src="../../assets/img/loading.gif" alt="">
  </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
      return {
          movieList: [],
          isLoading: true
      };
  },
  mounted() {
      Axios.get(global.API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=" + this.movieList.length).then((res) => {
          this.movieList = res.data.data.movies;
          this.isLoading = false;
      }).catch((res) => {

      });
  }
}
</script>
<style scoped>
.movie-list{
    margin: 1rem 0;
}
.movies{
    display: flex;
    padding: .2rem;
    border-bottom: 1px solid #ccc;
}
.movies .movie-img{
    width: 0; /*防止原尺寸影响弹性盒模型效果*/
    flex-grow: 1;
    margin-right: .2rem;
}
.movies .movie-img img{
    width: 100%;
}
.movies .movie-detail{
    flex-grow: 2;
    width: 0; /*防止原尺寸影响弹性盒模型效果*/
}
.movie-name{
    font-weight: bold;
}
.movie-score{
    float: right;
    display: block;
    background: orange;
    color: #fff;
    border-radius: 3px;
    padding: 0 3px;
    width: 1.3rem;
    text-align: center;
}
.loading{
    text-align: center;
}
</style>
