<template>
  <div class="button-style" :class="buttonClass()">
    <div class="button">{{ text }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { colorSelector } from '~/components/modules/ColorSelector'

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
    size: {
      type: String,
      default: 'medium',
    },
  },
  setup(props) {
    const sizeSelector = () => {
      if (props.size === 'small') {
        return 'button-small'
      } else if (props.size === 'large') {
        return 'button-large'
      } else {
        return ''
      }
    }
    const buttonClass = () => {
      return colorSelector(props.color) + ' ' + sizeSelector()
    }
    return {
      buttonClass,
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
  cursor: pointer;
}
.button-style:hover {
  opacity: 0.6;
}
.button-small {
  font-size: 14px;
  padding: 5px 7px;
  border-radius: 12px;
}
.button-large {
  font-size: 20px;
}
</style>
