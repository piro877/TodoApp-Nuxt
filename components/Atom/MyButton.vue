<template>
  <div class="button-style" :class="colorSelector()">
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
    color: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const colorSelector = () => {
      if (props.color === 'red') {
        return 'background-color--red'
      } else if (props.color === 'blue') {
        return 'background-color--blue'
      } else {
        return 'background-color'
      }
    }
    return {
      props,
      colorSelector,
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
</style>
