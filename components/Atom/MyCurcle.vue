<template>
  <div :class="colorSelector(color)"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { colorSelector } from '~/components/modules/ColorSelector'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      colorSelector,
    }
  },
})
</script>

<style scoped>
div {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
</style>
