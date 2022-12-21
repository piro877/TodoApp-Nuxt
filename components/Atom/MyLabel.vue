<template>
  <div class="label" :class="fontSize()">{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  setup(props) {
    const fontSize = () => {
      if (props.size === 'small') {
        return 'label-small'
      } else if (props.size === 'large') {
        return 'label-large'
      }
      return ''
    }
    return {
      fontSize,
    }
  },
})
</script>

<style scoped>
.label {
  width: fit-content;
  height: fit-content;
  color: #696969;
  border-bottom: solid 2px #696969;
  font-size: 18px;
}
.label-small {
  font-size: 14px;
}
.label-large {
  font-size: 20px;
}
</style>
