<template>
  <div class="pic-list">
    <div v-for="item in picList" :key="item.id">
      <el-image 
        style="width: 100px; height: 100px"
        :src="item.icon" 
        :preview-src-list="[`http://fgo-cdn.vgtime.com/media/fgo/servant/card/${item.charid}A.png`,`http://fgo-cdn.vgtime.com/media/fgo/servant/card/${item.charid}B.png`,`http://fgo-cdn.vgtime.com/media/fgo/servant/card/${item.charid}C.png`,`http://fgo-cdn.vgtime.com/media/fgo/servant/card/${item.charid}D.png`]">
      </el-image>

      <!-- <img :src="item.icon" alt=""> -->
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/fate'
export default {
  data () {
    return {
      picList: [], // 卡图列表
      picTimer: null // 卡图循环定时器
    }
  },
  created () {
    var picIndex = 1
    getList({ pn:picIndex }).then(res => {
      if (res.data.data.length === 0) {
        clearInterval(this.picTimer)
      } else {
        this.picList.push(...res.data.data)
      }
    })
    this.picTimer = setInterval(() => {
      picIndex ++ 
      getList({ pn:picIndex }).then(res => {
        if (res.data.data.length === 0) {
          clearInterval(this.picTimer)
        } else {
          this.picList.push(...res.data.data)
        }
      }).catch(err => {
        clearInterval(this.picTimer)
      })
    }, 1000)
  }
}
</script>

<style scoped>
  .pic-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>