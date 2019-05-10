<template>
  <div class="content">
    <div v-for="(item, index) in chatList" :key="index" class="item">
      <div class="user-img">
        <img :src="item.imgUrl" />
      </div>
      <div class="user-info">
        <div class="user-name">{{ item.name }}</div>
        <div class="chat-info">{{ item.chat_info }}</div>
      </div>
      <div class="last-time">{{ item.time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  title: '忘记',
  data () {
    return {
      chatList: [
        {
          imgUrl: require('@/assets/index/user.jpg'),
          name: '张三',
          chat_info: '很高心认识你',
          time: '上午10:30'
        }, {
          imgUrl: require('@/assets/index/user.jpg'),
          name: '张三',
          chat_info: '很高心认识你',
          time: '上午10:30'
        }, {
          imgUrl: require('@/assets/index/user.jpg'),
          name: '张三',
          chat_info: '很高心认识你',
          time: '上午10:30'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    .item{
      display: flex;
      align-items: center;
      height: .7rem;
      padding-left: .2rem;
      padding-right: .15rem;
      margin-bottom: 1px;
      background: #fff;
      .user-img{
        height: .5rem;
        width: .5rem;
        margin-right: .15rem;
        border-radius: 100%;
        overflow: hidden;
        &>img{
          height: 100%;
          width: 100%;
        }
      }
      .user-info{
        flex: 1;
        text-align: left;
        .user-name{
          font-size: .16rem;
          font-weight: 600;
          line-height: .3rem;
        }
        .chat-info{
          font-size: .12rem;
          line-height: .17rem;
        }
      }
      .last-time{
        font-size: .12rem;
      }
    }
  }
</style>
