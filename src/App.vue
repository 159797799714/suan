<template>
  <div id="app">
    <div class="head-title">{{ title }}</div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  // name: 'App',
  computed: {
    title: function () {
      console.log(this.$route)
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .head-title{
    height: .44rem;
    width: 100%;
    line-height: .44rem;
    text-align: center;
    color: #000000;
    font-size: .19rem;
    font-weight: bold;
    background: #F2F2F2;
  }
  .main{
    flex: 1;
    background: #ECECEC;
    overflow: auto;
    display: flex;
  }
}
</style>
