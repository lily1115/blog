<template>
  <transition name="move">
    <div class="tips" v-show="tipShow"><img class="icon" :src="src" alt="">{{ tips }}</div>
  </transition>
</template>
<script>
export default {
  props: {
    tipShow: {
      type: Boolean,
      default: false
    },
    tips: {
      type: String,
      default: '输入错误'
    },
    src: {
      type: String,
      default: '../../../assets/img/ic_wrong.png'
    }
  },
  data () {
    return {
      //
    }
  },
  methods: {
    //
  }
}
</script>
<style lang="scss" >

.tips{
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  color: #FF9400;
  font-size: 18px;
  transition: all .4s linear;
  .icon{
    display: inline-block;
    width: 20px;
    vertical-align: top;
    margin: 14px 8px 0 0;
  }
  &.move-transition{
    opacity: 1;
    transform: translate3d(0,-40px,0);
  }
  &.move-enter, &.move-leave-active{
    opacity: 0;
    transform: translate3d(0,0px,0);
  }
}
</style>