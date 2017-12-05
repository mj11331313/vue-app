import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicAlbums from '@/components/music/MusicAlbums'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import PhotoList from '@/components/photo/PhotoList'
import PhotoDetail from '@/components/photo/PhotoDetail'
Vue.use(Router)

export default new Router({
  mode: 'history', //   去掉url中的#
  routes: [
    {
      path: '/',
      name: 'Movie',
      redirect: '/movielist',
      component: Movie,
      children: [
        {
          path: 'movielist',
          name:'movielist',
          component: MovieList
        }, {
          path: 'moviedetail/:movieId',  // 通过url传参
          component: MovieDetail
        }
      ]
    }, {
      path: '/music',
      name: 'music',
      component: Music,
      redirect: '/music/musiclist',
      children: [
        {
          path: 'musiclist',
          component: MusicList
        }, {
          path: 'musicalbums/:musicId',
          component: MusicAlbums
        }
      ]
    }, {
      path: '/book',
      name: 'book',
      component: Book
    }, {
      path: '/photo',
      component: Photo,
      children: [
        {
          path: 'photolist',
          component: PhotoList
        }, {
          path: 'photodetail/:index',
          component: PhotoDetail
        }
      ]
    }
  ]
})

