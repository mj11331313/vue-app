import Vue from 'vue'
import Router from 'vue-router'
import Movie from'@/components/movie/Movie'
import MovieList from'@/components/movie/MovieList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie,
      children: [
        {
          path: 'movielist',
          component: MovieList
        }
      ]
    }
  ]
})
