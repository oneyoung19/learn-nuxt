<template>
  <el-dialog
    :modelValue="visible"
    @update:modelValue="handleVisible">
    <span>This is a message</span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleVisible (visible) {
      this.$emit('update:modelValue', visible)
    }
  }
}
</script>

<style scoped lang="less">
</style>

