<template>
  <div class="home">
    <div class="loading"></div>
    <div class="snow_all">
      <div v-for="item in snowNums" :key="item" class="snow"></div>
    </div>
    <div class="content" v-if="!showLogin">
        <div class="reveal">sword art online</div>
        <div class="botton_box" style=" visibility: hidden;" ref="linkStart">
            <button class="btn btn-primary btn-ghost btn-shine" @click="goLink()">
                link start
            </button>
        </div>
    </div>
    <div class="login_box" v-if="showLogin">
      <div class="login_box_log">sword art online</div>
      <el-input class="login_box_input" placeholder="用户名" v-model="login.name" clearable></el-input>
      <el-input class="login_box_input" placeholder="密码" v-model="login.password" clearable></el-input>
      <button class="btn btn-primary btn-ghost btn-shine" style="width: 100%" @click="submitForm">
          登录
      </button>
      
    </div>
  </div>
</template>

<script>
  import { login } from '../api/login'
  export default {
    data () {
      return {
        showLogin: false,
        login: {
          name: '',
          password: ''
        }
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
      goLink () {
        this.showLogin = true
        // this.$router.push({ name: routeName })
      },
      submitForm () {
        login(this.login).then(res => {
          if (res.data.code === 200) {
            this.$router.push({ name: 'Choose' })
          } else {
            alert(res.data.msg)
            // this.$message.error(res.data.msg)
          }
        })
      },
      resetForm () {

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
  .login_box {
    position: absolute;
    left:50%;
    top:50%;
    width: 400px;
    transform: translate(-50%, -50%);
  }
  .login_box_input {
    margin-bottom: 32px;
  }
  .login_box_log {
    color: #6ee1f5;
    font-size: 2em;
    font-family: Raleway, sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: pre;
    text-align: center;
    margin-bottom: 50px;
  }
</style>
<style>
  .login_box_input .el-input__inner {
    background-color: rgba(17, 23, 32, 0) !important;
    color: #fff;
    border: 1px solid rgb(0,185,209);
  }
</style>
