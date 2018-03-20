<template>
  <div class="list">
      <div class="main-list">
            <!-- <router-link :to="'/music/musicalbums/'+music.id"> -->
                <img :src="music.coverImgUrl" alt="">
            <!-- </router-link> -->
            <div class="list-detail">
                <span class="mname">{{music.name}}</span>
            </div>
      </div>
     <div class="music-list">
        <ul class="musics">
            <li class="play-list clearfix" v-for="(play,index) in playList" :key='index'>
                <router-link class="clearfix" :to="'/music/musicalbums/'+play.id">
                    <div class="play-number">{{index+1}}</div>
                    <div class="play-detail">
                        <div class="sing">{{play.name}}</div>
                        <div class="singer">{{play.ar[0].name}} - {{play.al.name}}</div>
                    </div> 
                </router-link>
                <!-- 时长：{{timeToString(play.dt)}} 专辑：{{play.al.name}} -->
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import Axios from "axios"
export default {
    data(){
        return {
            music: {},
            playList:[]
        };
    },
    mounted(){
        Axios.get( API_PROXY2 + 'playlist?id=2108339599').then(res => {
            this.music = res.data.playlist;
            this.playList = this.music.tracks;
        }).catch(() => {
            console.log('预请求失败');
        })
    },
    methods: {
        timeToString(time){
            var date = new Date(time);
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            minutes=(minutes<10?'0'+ minutes:minutes);
            seconds=(seconds<10?'0'+ seconds:seconds);
            return minutes + ":" + seconds;
        }
    }
}
</script>
<style scoped>
@import url('../../assets/css/common.css');
img{ 
    border: 0 none; 
}
a,a:hover,a:active,a:visited{
    color: #fff;    
}
.list{
    margin: .9rem 0;
    color: #fff;     
    background-image: url('../../assets/img/kawayi.jpg');
    background-attachment: fixed ;
    background-clip:padding-box;
    background-position: center;
}
.main-list{
    display: flex;   
    margin: .2rem; 
    padding: .35rem .2rem 0;
}
.main-list img{
    width: 50%;
    height: 50%;
}
.main-list a{
    width: 50%;
}
.list>a{
    display: block;
    width: 45%;
}
.list-detail{
    flex-grow: 1;
    margin-left: .3rem;
    padding-top: .7em;
}
.mname{
    font-size: .3rem;
}
.musics{
    border-top: 1px solid #ccc;
}
.music-list{
    margin-top: 1rem;
}
.play-list{
    height: 1rem;
}
.play-number{
    width: 15%;
    float: left;
    height: 100%;
    text-align: center;
    line-height: 1rem;
}
.play-detail{
    float: right;
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.play-detail>div{
    flex-grow: 1;
}
.play-number,.play-detail .singer{
    opacity: .7;
}
.play-detail .sing,.play-number{
    font-size: .26rem;
}
.play-detail .singer{
    border-bottom: 1px solid #ccc;
    padding-bottom: .2rem;
    width: 100%;
    overflow: hidden ;
    text-overflow: ellipsis ;
    white-space: nowrap ;
}
</style>
