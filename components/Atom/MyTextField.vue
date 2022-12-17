<template>
  <div>{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return props
  },
})
</script>

<style scoped>
div {
  width: 500px;
  padding: 5px 10px;
  background-color: #fff;
  vertical-align: center;
  font-size: 20px;
}
</style>
