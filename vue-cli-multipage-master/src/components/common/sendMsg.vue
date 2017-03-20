<template>
  <div class="sendMsg">
  	<div class="phone">
  	  <label>手机</label>
  	  <input type="text" placeholder="输入被调查者手机号" v-model="phone" />
  	</div>
  	<div class="code">
  	  <div class="codeInput">
  	    <label>验证码</label>
  	    <input type="text" placeholder="输入短信验证码" v-model="code" @change="exportCode"/>
  	  </div>
  	  <input type="button" :value="codeBtn" :disable="checkSend" :class="{active: !checkSend}" class="codeBtn" @click="handleSendCode" />
  	</div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      phone: '',
      code: '',
      codeBtn: '获取短信验证码',
      count: 60
    }
  },
  computed: {
    checkSend () {
      if (this.phone === '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    isPhone () {
      var reg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
      if (reg.test(parseInt(this.phone))) {
        return true
      } else {
        return false
      }
    },
    exportCode () {
      this.$parent.$emit('import-code', this.code)
    },
    handleSendCode () {
      if (!this.isPhone(this.phone)) {
        this.$parent.$emit('send-tips')
      } else {
        this.codeBtn = this.count + 's'
        this.setTime()
        this.$parent.$emit('send-code', this.phone)
      }
    },
    setTime () {
      if (this.count === 0) {
        this.checkSend = false
        this.count = 60
        this.codeBtn = '获取短信验证码'
        return false;
      } else {
        this.checkSend = true
        this.count--
        this.codeBtn = this.count + 's'
      }
      var time = setTimeout(() => {
        this.setTime()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/base/var";
.sendMsg{
	  .phone{
	    margin: 24px auto 0;
	    width: 90%;
	    height: 40px;
	    line-height: 40px;
	    border: 1px solid #ccc;
	    border-radius: 3px;
	    background: #fff;
	    font-size: 14px;
	    label{
	      padding: 0 6px;
	      display: inline-block;
	      width: 16%;
	      color: #333;
	    }
	    input{
	      display: inline-block;
	      width: 60%;
	      height: 36px;
	      line-height: 38px;
	      font-size: 14px;
	    }
	  }
	  .code{
	  	display: flex;
	    width: 90%;
	    margin: 10px auto;
	    height: 40px;
	    line-height: 40px;
	    font-size: 14px;
	  	.codeInput{
	  		width: 90%;
		    border: 1px solid #ccc;
		    border-radius: 3px;
		    font-size: 14px;
		    background: #fff;
		    height: 40px;
		    line-height: 40px;
		    label{
		      padding: 0 6px;
		      display: inline-block;
		      color: #333;
		    }
		    input{
		    	font-size: 14px;
		    }
	  	}
	  	.codeBtn{
	  		width: 30%;
		    margin-left: 10px;
		    background: #fff;
		    color: #999;
		    border: 1px solid #ccc;
	      cursor: pointer;
	      &.active{
	      	border-color:  #45AEFF;
	      	color:  #45AEFF;
	      }
	  	}
	  }
}
</style>