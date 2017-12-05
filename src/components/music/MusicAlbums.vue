<template>
    <div class="albums">
        <!--这里必须使用v-if,让播放组件在数据准备好之前先不显示，否则会报错！-->
        <a-player v-if="isShow" :showlrc="3" :autoplay="true" :music="songs"></a-player>       
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
        // location.href = to.fullPath;
        next();        
    }),
    mounted(){
        Axios.get('/static/data/musicdata.json').then(res => {
            let list = res.data.musicData;
            list.forEach(element => {
                this.songs.push({
                    title: element.title,
                    author: element.author,
                    url : element.src,
                    pic : element.musicImgSrc,
                    lrc : '/static/'+element.lrc
                });
            });
            this.isShow = true;
        })
    }
}
</script>
<style scoped>
.albums{
    margin: 1rem .2rem;
}
</style>
