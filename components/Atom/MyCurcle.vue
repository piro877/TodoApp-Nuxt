<template>
  <div :class="colorSelector()"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const colorSelector = () => {
      if (props.color === 'red') {
        return 'curcle-color--red'
      } else if (props.color === 'blue') {
        return 'curcle-color--blue'
      } else {
        return 'curcle-color'
      }
    }
    return {
      colorSelector,
    }
  },
})
</script>

<style scoped>
div {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.curcle-color {
  background-color: #f08700;
}
.curcle-color--blue {
  background-color: #23c9ff;
}
.curcle-color--red {
  background-color: #de3c4b;
}
</style>
