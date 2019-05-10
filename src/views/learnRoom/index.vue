<template>
  <div class="content">
    <div class="head-nav white">
      <li v-for="(item, index) in headNavList" :key="index" :ref="'item'" :class="{'nav-li': true, selected: headIndex === index}" @click="clickHeadNav(index)"> {{ item }}</li>
      <div class="slipe" ref="slipe"></div>
    </div>
    <div v-for="(item, index) in articleList" :key="index" class="item white">
      <div class="article-img">
        <img :src="item.imgUrl" />
      </div>
      <div class="info">
        <div class="title">{{ item.title }}</div>
        <div class="time">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: '忘记',
  data () {
    return {
      headNavList: ['易经知识', '地理风水', '星座奇闻', '奇门术数', '命理学说'],
      headIndex: 0,
      articleList: [
        {
          imgUrl: require('@/assets/index/user.jpg'),
          title: '标题文字；我是渣渣辉，是兄弟就来啃我',
          time: '2018-01-01'
        }, {
          imgUrl: require('@/assets/index/user.jpg'),
          title: '标题文字；我是渣渣辉，是兄弟就来啃我',
          time: '2018-01-01'
        }, {
          imgUrl: require('@/assets/index/user.jpg'),
          title: '标题文字；我是渣渣辉，是兄弟就来啃我',
          time: '2018-01-01'
        }, {
          imgUrl: require('@/assets/index/user.jpg'),
          title: '标题文字；我是渣渣辉，是兄弟就来啃我',
          time: '2018-01-01'
        }
      ]
    }
  },
  mounted  () {
    window.addEventListener('scroll', this.menu)
  },
  methods: {
    clickHeadNav (index) {
      this.headIndex = index
      this.$refs.slipe.style.left = this.$refs.item[index].offsetLeft + 'px'
    },
    menu () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.scroll)
    }
  }
}

</script>

<style lang="scss" scoped>
  .content {
    .head-nav{
      position: relative;
      display: flex;
      height: .46rem;
      font-size: .13rem;
      line-height: .46rem;
      &>li{
        width: .75rem;
        text-align: center;
      }
      .slipe{
        position: absolute;
        height: 2px;
        width: .75rem;
        bottom: 0;
        left: 0;
        background: #4FC5D8;
        transition: .5s;
      }
    }
    .item{
      display: flex;
      height: 1.1rem;
      padding: .18rem .15rem;
      margin-bottom: 1px;
      box-sizing: border-box;
      .article-img{
        width: 1.12rem;
        height: .74rem;
        margin-right: .1rem;
        &>img{
          height: 100%;
          width: 100%;
        }
      }
      .info{
        flex: 1;
        text-align: left;
        .title{
          font-size: .16rem;
          line-height: .22rem;
          height: .44rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .time{
          margin-top: .15rem;
          font-size: .13rem;
          line-height: .18rem;
        }
      }
    }
  }
</style>
