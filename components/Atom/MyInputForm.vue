<template>
  <div class="input-form">
    <input type="text" @input="$emit('input')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped>
.input-form {
  width: 350px;
  height: 24px;
}
input {
  border: 0px;
  width: 100%;
  font-size: 16px;
  outline: none;
  height: 100%;
  border: solid 2px #d3d3d3;
  border-radius: 3px;
  padding: 3px 0 0 3px;
}
</style>
