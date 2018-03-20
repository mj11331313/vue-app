<template>
    <div class="albums">
        <!--这里必须使用v-if,让播放组件在数据准备好之前先不显示，否则会报错！-->
        <a-player v-if="isShow" autoplay mutex ref="player" :music="songs"></a-player>       
    </div>
</template>
<script>
// 引入vue-aplayer插件：
import VueAplayer from "vue-aplayer"
import Axios from "axios"
export default {
    data(){
        return {
            songs: [],
            isShow: false,
        }
    },
    components: {
        // 使用a-play播放器组件：
        'a-player': VueAplayer  // 使用vue-aplayer的标签名为a-player
    },
    beforeRouteLeave: ((to, from, next) => {
        next();        
    }),
    mounted(){
        Axios.get( API_PROXY2 + 'song?id='+this.$route.params.music).then(res => {
                // console.log(res.data.data);
                this.songs.push({
                    title: res.data.data.name,
                    author: res.data.data.ar[0].name,
                    url : res.data.data.mp3.url,
                    pic : res.data.data.al.picUrl,
                });
                this.isShow = true;     
            }).catch(() => {
                console.log('请求失败');
        });
    }
}
</script>
<style scoped>
.albums{
    margin: 1rem .2rem;
}
</style>
