<template>
  <div class="button-style button-color">
    <div class="button">{{ text }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyButton',
  props: {
    text: {
      type: String,
      default: 'button',
    },
  },
  setup(props) {
    return {
      props,
    }
  },
})
</script>

<style>
.button {
  color: #fff;
  width: auto;
  text-align: center;
  vertical-align: baseline;
}
.button-style {
  padding: 10px 20px;
  border-radius: 6px;
  width: fit-content;
}
.button-color {
  background-color: aqua;
}
</style>
