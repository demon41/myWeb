<template>
  <div class="choose_box">
    <div class="choose_item" v-for="item in imgList" :key="item.id">
      <div class="choose_title">{{ item.title }}</div>
      <div class="choose_cover"></div>
      <img :src="item.url" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {
          id: 0,
          title: '游戏王',
          url: require('../assets/image/4444.jpg')
        },
        {
          id: 1,
          url: require('../assets/image/4444.jpg')
        },
        {
          id: 2,
          url: require('../assets/image/4444.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.choose_box{
  display: flex;
}
.choose_box .choose_item{
  width: calc(100% / 3);
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.54);
}
.choose_box .choose_item .choose_cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.85);
}
.choose_box .choose_item img{
  width: 100%;
  height: 100%;
  background-size: auto;
}
.choose_box .choose_item .choose_title {
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  color: pink
}
.choose_box .choose_item .choose_cover:hover{
  background-color: rgba(0, 0, 0, 0.2);
}
</style>