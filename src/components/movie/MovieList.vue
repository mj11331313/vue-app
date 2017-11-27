<template>
  <div class="movie-list">
    <!--电影列表：-->
    <ul>
      <li @click="goDetail(item.id)" v-for="item in movieList" :key="item.id" class="movies">
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
   <!--加载动图：-->
    <div class="loading" v-show="isLoading">
        <img src="../../assets/img/loading.gif" alt="">
    </div>
    <!--本地文件数据加载到底提醒：-->
    <div class="end" v-show="isEnd">
        <h3>到底啦别拉啦!</h3>
    </div>
  </div>
</template>
<script>
// 只有引入了axios，才能通过vue发送ajax请求：
import Axios from 'axios'
export default {
  data() {  // 该处data必须写作一个方法
      return {
          movieList: [],
          isLoading: true,  // 控制加载动图是否显示
          isEnd: false  // 控制底部提示是否显示
      };
  },
  mounted() { // mounted：当dom结构都加载完成后执行某些操作的钩子函数(发送ajax请求一般写在mounted里面)
        this.loadData();  // 发送ajax请求，先加载部分数据
        // 监听滚动条事件，当滚动条滚动到底部时就发送一次ajax请求：
        window.onscroll = () => {  // 使用箭头函数保证this指向当前vue的实例化对象
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
      // 将发送ajax请求加载数据的代码封装成一个函数：
      loadData(){
        // url1：使用代理服务器的地址：
        let url1= API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="+ this.movieList.length;
        // url2：服务器代理失败，为完成项目而使用本地有限数据文件的地址：
        let url2= '/static/movidata.json';
        // 代理服务器可用时，将url2换成url2即可：
        Axios.get(url1).then(res => {  // 使用axios发送ajax请求，then表示请求成功时进入的操作，res：请求返回的对象
            let data = res.data.data.movies;  //.slice(this.movieList.length,this.movieList.length+10);  将本地文件的数据进行切割，分批显示，做成假分页          
            this.isLoading = false;  // 禁止显示加载动图
            /* if(data.length <10){  // 若某一次请求到的数据未达到预期的数量，说明本地文件里的数据已全部获取完毕
                this.isEnd = true;  // 显示到达底部的提醒
            } */
            // 不管本地文件是否已到达底部，都将当前请求获取的数据加入到数据列表中：
            this.movieList = this.movieList.concat(data); // arr1.concat(arr2)：将arr2数组追加到arr1数组后面           
        }).catch(() => {  // catch：请求失败时进入的操作
            console.log('获取失败');
        });
    },
    goDetail(movieId){
        // 通过在url后拼接变量的方法传参：
        this.$router.push('/moviedetail/'+ movieId);
    }
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
    background: orchid;
    color: #fff;
    border-radius: 3px;
    padding: 0 3px;
    width: 1.3rem;
    text-align: center;
}
.loading,.end{
    text-align: center;
}
</style>
