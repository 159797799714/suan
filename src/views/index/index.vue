<template>
  <div class="content">
    <div class="main">
      <div class="swiper">
        <mt-swipe :auto="1000">
          <mt-swipe-item class="swiper1"></mt-swipe-item>
          <mt-swipe-item class="swiper2"></mt-swipe-item>
          <mt-swipe-item class="swiper3"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="menu1">
        <div v-for="(item, index) in menuList1" :key="index" class="menu-item">
          <img :src="item.imgUrl" class="menu-item-img"/>
          <div class="menu-item-name">{{ item.name }}</div>
        </div>
      </div>
      <div class="menu2">
        <div v-for="(item, index) in menuList2" :key="index" class="menu2-item">
          <img :src="item.imgUrl" class="menu-item-img"/>
          <div class="menu-item-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: '首页',
  data () {
    return {
      menuList1: [
        {
          imgUrl: require('@/assets/index/item1.png'),
          name: '婚恋情感'
        }, {
          imgUrl: require('@/assets/index/item2.png'),
          name: '事业财运'
        }, {
          imgUrl: require('@/assets/index/item3.png'),
          name: '居家风水'
        }, {
          imgUrl: require('@/assets/index/item4.png'),
          name: '企业风水'
        }, {
          imgUrl: require('@/assets/index/item5.png'),
          name: '流行运势'
        }, {
          imgUrl: require('@/assets/index/item6.png'),
          name: '宝宝起名'
        }, {
          imgUrl: require('@/assets/index/item7.png'),
          name: '黄道择日'
        }, {
          imgUrl: require('@/assets/index/item8.png'),
          name: '八字合婚'
        }
      ],
      menuList2: [
        {
          imgUrl: require('@/assets/index/menu2-1.png'),
          name: '每日星座'
        }, {
          imgUrl: require('@/assets/index/menu2-2.png'),
          name: '每日运势'
        }, {
          imgUrl: require('@/assets/index/menu2-3.png'),
          name: '黄历查询'
        }, {
          imgUrl: require('@/assets/index/menu2-4.png'),
          name: '周公解梦'
        }, {
          imgUrl: require('@/assets/index/menu2-5.png'),
          name: '姓名测算'
        }, {
          imgUrl: require('@/assets/index/menu2-6.png'),
          name: '姓氏起源'
        }, {
          imgUrl: require('@/assets/index/menu2-7.png'),
          name: '称骨算命'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  .swiper {
    height: 1.25rem;
    width: 100vw;
    .mt-swipe {
      height: 1.25rem;
    }
    .swiper1{
      background: #ccc;
    }
    .swiper2{
      background: #333;
    }
    .swiper3{
      background: #c31
    }
  }
  .menu1{
    display: flex;
    // justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    padding: .2rem 0;
    padding-bottom: 0;
    margin-bottom: .1rem;
    box-sizing: border-box;
    background: #fff;
    .menu-item{
      width: 0.92rem;
      margin-bottom: .2rem;
      &>img{
        height: 0.35rem;
        width: 0.35rem
      }
    }
  }
  .menu2{
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    .menu2-item{
      display: flex;
      width: 50%;
      height: .64rem;
      background: #fff;
      align-items: center;
      padding-left: .2rem;
      box-sizing: border-box;
      &>img{
        height: 0.4rem;
        width: 0.4rem;
        margin-right: .15rem;
      }
    }
  }
}
</style>
