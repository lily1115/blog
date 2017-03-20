<template>
  <button :disabled="disabled" class="y-button"
    @click="handleClick"
    :class="{'is-disabled': disabled}"
  >
  <slot></slot>
  </button>

</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (event) {
      this.$parent.$emit('btn-click', event.target)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/base/var";
.y-button{
  display: block;
  margin: 10px auto;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: $color-bg-white;
  background: $color-blue;
  border-radius: $border-radius;
  text-align: center;
  &.is-disabled{
    background-color: #ccc;
  }
}
</style>