<template>
  <!--动态获取style值，其值必须为一个对象：-->
  <div class="header" :style="{background: bgColor}"> <!--bgColor为自定义1背景色变量-->
    <span class="home" @click="goHome">首页</span>
    <h1>
      <!--使用slot（插槽）标签,方便将来完成标题参数传递：-->
      <slot name="header">默认值</slot>
    </h1>
  </div>
</template>
<script>
export default {
  methods: {
    goHome(){
      this.$router.push('/movielist');
    }
  },
  // 组件间传值必须配置props,且其值为数组：
  props: ['bgColor']
  // 改变某个属性值使用props，改变内容使用slot
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
  background-color: transparent;
  margin-left: .2rem;
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
