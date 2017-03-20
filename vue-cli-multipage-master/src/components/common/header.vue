<template>
  <nav class="navbar navbar-light navbar-light--skyblue">
    <div class="container">
      <!-- <a class="navbar-brand" href="/index.html">
          <img src="static/logo.png" class="navbar-brand__img align-top" alt="">
      </a> -->
      <div class="nav navbar-nav">
        <a class="nav-item nav-link" href="./user.html">开始调查</a>
        <ul class="list-nav">
          <li><a class="nav-item nav-link" href="/toRegister.html">去注册</a></li>
          <li><a class="nav-item nav-link" href="/register.html">注册</a></li>
          <li><a class="nav-item nav-link" href="/paySuccess.html">支付成功</a></li>
          <li><a class="nav-item nav-link" href="/showReport.html">背景报告</a></li>
        </ul>
        <hr>

        <a class="nav-item nav-link" href="./user.html">开始背调</a>
        <ul class="list-nav">
          <li><a href="/ybdInput.html">录入身份</a></li>
          <li><a href="/getCode.html">被调查人授权</a></li>
          <li><a href="/chooseType.html">选择背调套餐</a></li>
          <li><a href="/pay.html">支付订单</a></li>
        </ul>
        <hr>

        <a class="nav-item nav-link" href="./user.html">我的订单</a>
        <ul class="list-nav">
          <li><a href="/order.html?type=toAuthorize">待授权</a></li>
          <li><a href="/order.html?type=toChoose">待选择套餐</a></li>
          <li><a href="/order.html?type=toPay">待支付</a></li>
          <li><a href="/order.html?type=finish">已完成</a></li>
        </ul>
        <hr>

        <a class="nav-item nav-link" href="./user.html">用户中心</a>
        <ul class="list-nav">
          <li><a  class="nav-item nav-link" href="/user.html">用户中心</a></li>
          <li><a  class="nav-item nav-link" href="/changeNick.html">修改昵称</a></li>
          <li><a  class="nav-item nav-link" href="/changPSW.html">修改密码</a></li>
        </ul>
        <a class="nav-item nav-link" href="./aboutYBD.html">易背调</a>
        <hr>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar-light--skyblue {
    background-color: #e3f2fd;
  }
  .navbar-brand__img{
    width: 30px;
    height: 30px;
  }
  .list-nav{
    li{
        padding: 0 0 0 20px;
    }
  }
</style> 