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
        return 'button-color--red'
      } else if (props.color === 'blue') {
        return 'button-color--blue'
      } else {
        return 'button-color'
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
.button-color {
  background-color: #f08700;
}
.button-color--blue {
  background-color: #23c9ff;
}
.button-color--red {
  background-color: #de3c4b;
}
</style>
