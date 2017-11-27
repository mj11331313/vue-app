import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
Vue.use(Router)

export default new Router({
  mode: 'history', //   去掉url中的#
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie,
      children: [
        {
          path: 'movielist',
          component: MovieList
        }, {
          path: 'moviedetail/:movieId',  // 通过url传参
          component: MovieDetail
        }
      ]
    }
  ]
})
