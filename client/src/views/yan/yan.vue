<template>
  <div class="pic-list">
    <div v-for="item in picList" :key="item.id">
      <el-image 
        style="width: 100px"
        :src="item.img" 
      >
      </el-image>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/fate'
import { getImages } from '@/api/yan.js'
export default {
  data () {
    return {
      picList: [], // 卡图列表
    }
  },
  created () {
    getImages().then(res => {
      this.picList = this.getRedImg(res.data)
    })
  },
  methods: {
    getRedImg (string) {
      let imgs = []
      let reg = /li style="width: 160px;" id=".*?".*?img src=".*?" style="margin-left: 0px;"/g
      let reg1 = /id="p(.*?)".*?src="(.*?)"/
      let a = string.match(reg)
      a.forEach(item => {
        console.log(reg1.exec(item))
        imgs.push({
          id: reg1.exec(item)[1],
          img: reg1.exec(item)[2]
        })
      })
      return imgs
    }
  }
}
</script>

<style scoped>
  .pic-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>