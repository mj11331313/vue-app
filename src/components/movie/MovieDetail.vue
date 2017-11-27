<template>
    <div class="movie">
        <!--加载动图：-->
        <div class="loading" v-if="isLoading">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
        <!--电影详情：-->
        <div class="movie-true" v-else>
            <div class="movie-content">
                <div class="movie-img">
                    <img :src="movie.img" alt="">
                </div>
                <div class="movie-detail">
                    <h4 class="movie-name">{{movie.nm}}</h4>
                    <p v-text="movie.sc+'分'"></p>
                    <p>{{movie.cat}}</p>
                    <p>{{movie.src}} / {{movie.dur}}分钟</p>
                    <p>{{movie.rt}}</p>
                </div>
            </div>
            <div class="movie-star">
                    <h2 class="movie-name">主演</h2>
                    <p>{{movie.star}}</p>
            </div>
            <div class="movie-produce">
                <h2 class="movie-name">简介</h2>
                <!--由于获取到的movie.dra字符串内自带p标签,这里使用v-html显示:-->
                <p v-html="movie.dra"></p>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from "axios";
export default {
  data(){
      return {
          movie: {},
          isLoading: true
      }
  },
  mounted(){
      // this.$route.params.movieId：获取url传的参数movieId
      let url1 = API_PROXY +'http://m.maoyan.com/movie/'+this.$route.params.movieId+'.json';
      let url2 = '/static/moviedetail.json';
      Axios.get(url1).then(res => {
          this.isLoading = false;
          this.movie = res.data.data.MovieDetailModel;
      }).catch( res => {

      });
      window.onload = () => {
          this.isLoading = true;
      }
  }
}
</script>
<style scoped>
.movie{
    margin: 1rem 0;
    padding:  0 .2rem;
}
.movie-content{
    display: flex;
}
.movie-img{
    flex-grow: 1;
    width: 0;
}
.movie-detail{
    flex-grow: 2;
    width: 0;
    padding: 0 .2rem;
}
.movie-star,.movie-detail{
    border-bottom: 1px solid #ccc;
}
.movie-name{
    font-weight: bolder;
}
.loading,.movie-name{
    text-align: center;
}
</style>
