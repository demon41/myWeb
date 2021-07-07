<template>
  <div class="choose_box">
    <div class="choose_item" v-for="item in imgList" :key="item.id" @click="goPage(item.routeName)">
      <div class="choose_title">{{ item.title }}</div>
      <div class="choose_cover"></div>
      <img :src="item.url" alt="">
    </div>
  </div>
</template>

<script>
import { getChooseImage } from '@/api/login'
export default {
  data () {
    return {
      imgList: []
    }
  },
  created () {
    getChooseImage().then(res => {
      this.imgList = res.data.imgurls
      this.imgList.forEach(item => {
        item.url = process.env.VUE_APP_API_BASE_URL + item.url
      })
    })
  },
  methods: {
    goPage(name) {
      this.$router.push({ name })
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
  min-width: 600px;
  min-height: 900px;
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