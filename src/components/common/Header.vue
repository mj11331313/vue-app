<template>
  <div class="header">
    <button class="home">首页</button>
    <h1>Movie</h1>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.header{
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(33, 150, 243);
  height: 1rem;  
  line-height: 1rem;  
}
.home{
  background-color: rgb(33, 150, 243);
  border: none;
}
.home,.header h1{
  color: #fff;
}
.header h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
