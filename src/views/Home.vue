<template>
  <div class="home">
    <div class="loading"></div>
    <div class="snow_all">
      <div v-for="item in snowNums" :key="item" class="snow"></div>
    </div>
    <div class="content">
        <div class="reveal">sword art online</div>
        <div class="botton_box" style=" visibility: hidden;" ref="linkStart">
            <button class="btn btn-primary btn-ghost btn-shine" @click="goLink('fateList')">
                link start
            </button>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      // 初始动画渲染
      init() {
        let duration = 0.8
        let delay = 0.3
        let revealText = document.querySelector(".reveal")
        let bottonBox = document.querySelector(".botton_box")
        let letters = revealText.textContent.split("")
        revealText.textContent = ""
        let middle = letters.filter(e => e !== " ").length / 2
        letters.forEach((letter, i) => {
        let span = document.createElement("span")
        span.textContent = letter
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`
        revealText.append(span)
        })
        setTimeout(() => {
            bottonBox.style.visibility = ''
        }, 4000)
      },
      goLink (routeName) {
        this.$router.push({ name: routeName })
      }
    },
    computed: {
      snowNums() {
        let arr = []
        for (let i = 0;i<=100;i++) {
          arr.push(i)
        }
        return arr
      }
    }
  }
</script>
<style scoped>
  @import "../assets/css/home/index.css";
  @import "../assets/css/home/font.css";
  @import "../assets/css/home/moon.css";
  @import "../assets/css/home/snow.min.css";
  .content{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .botton_box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
</style>
