<template>
    <div class="changeNickname">
      <div class="panel">
        <input class="name" type="text" placeholder="输入当前密码">
      </div>
      <div class="panel newpsw">
        <input class="name" type="text" placeholder="输入新密码，至少六位数，由数字字母共同组成" />
        <input class="name" type="text" placeholder="再次输入新密码" />
      </div>
      <button>保存</button>
    </div>
</template>

<script>
export default {
  name: 'changePswe',
  data () {
    return {
      // orderTime: '我的订单页面'
    }
  }
}
</script>

<style scoped lang="scss">
.changeNickname{
    margin: 10px 0 0 0;
    .panel{
      .name {
        padding: 0 0 0 20px;
        height: 50px;
        width: 100%;
        font-size: 16px;
        font-weight: 200;
      }
    }
    .newpsw{
      margin: 12px 0 0 0;
      input{
        border-bottom: 1px solid #f1f1f1;
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
    }
}

</style>