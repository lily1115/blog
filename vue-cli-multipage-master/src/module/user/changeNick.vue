<template>
    <div class="changeNick">
      <div class="panel nickname">
        <input class="name" type="text" placeholder="输入昵称，不能使用特殊符号" v-model="nickname" @click="isActive = true">
      </div>
      <button :class="{active: isActive}" @click="sendNick">保存</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'changeNick',
  data () {
    return {
      nickname: '',
      isActive: false
    }
  },
  computed: {
  },
  methods: {
    sendNick () {
      axios.post(`${this.httpRoot}api/user/changeNick`, {nickname: this.nickname})
      .then(res => {
        if (res.status === 200) {
          console.log('fanhui')
          // window.history.back()
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.changeNick{
    margin: 10px 0 0 0;
    .panel{
      .name {
        background: #fff;
        height: 50px;
        width: 100%;
        font-size: 16px;
        padding: 0 0 0 20px;
      }
    }
    button {
      display: block;
      margin: 40px auto 0;
      width: 90%;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #fff;
      background: #B3B3B3;
      border-radius: 2px;
      text-align: center;
      &.active {
        background: #45AEFF;
      }
    }
}

</style>