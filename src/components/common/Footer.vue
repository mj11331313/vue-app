<template>
    <ul class="footer">
      <li>电影</li>
      <li>音乐</li>
      <li>书籍</li>
      <li>图片</li>
    </ul>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  background-color: rgb(33, 150, 243);
  color: #fff;
  display: flex;
  width: 100%;
}
.footer li{
  flex-grow: 1;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
</style>