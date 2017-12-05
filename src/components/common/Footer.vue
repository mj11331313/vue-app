<template>
    <ul class="footer" :style="{background: bgColor}">
      <li><router-link to="/movielist">电影</router-link></li>
      <li><router-link to="/music">音乐</router-link></li>
      <li><router-link to="/book">书籍</router-link></li>
      <li><router-link to="/photo/photolist">图片</router-link></li>
    </ul>
</template>
<script>
export default {
  props: ['bgColor']
}
</script>
<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
}
.footer li{
  flex-grow: 1;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.footer li a{
  color: darkgray;
  outline: none;
}
/*vue会自动给当前点击的链接添加class="router-link-active"：*/
.footer li a.router-link-active{
  color: #fff;
}
</style>