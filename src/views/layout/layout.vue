<template>
  <div class="content">
    <div class="center-main">
      <router-view></router-view>
    </div>
    <div class="footerNav">
      <div v-for="(item, index) in tabList" :key="index" :class="{navLi: true, selected: index === selectIndex}" @click="clickFooter(index)">
        <h2 :class="item.icon"></h2>
        <h3> {{ item.title}} </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabList: [
        {
          title: '首页',
          name: 'index',
          icon: 'icon iconshouye'
        }, {
          title: '聊天',
          name: 'chat',
          icon: 'icon iconliaotian'
        }, {
          title: '学堂',
          name: 'learnRoom',
          icon: 'icon iconwendang'
        }, {
          title: '我的',
          name: 'mine',
          icon: 'icon iconwode'
        }
      ],
      selectIndex: 0
    }
  },
  methods: {
    clickFooter (index) {
      this.$router.push({ name: this.tabList[index].name })
      this.selectIndex = index
    }
  }

}
</script>

<style lang="scss" scoped>
.content{
  flex: 1;
  display: flex;
  flex-direction: column;
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
  .center-main{
    flex: 1;
    background: #ECECEC;
    overflow: auto;
  }
  .footerNav{
    display: flex;
    height: .5rem;
    .navLi{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #A5A5A5;
      &>h2{
        font-size: .25rem;
      }
      &>h3{
        font-size: .1rem;
      }
    }
  }
}
</style>
