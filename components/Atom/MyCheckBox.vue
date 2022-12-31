<template>
  <div class="checkbox" :class="checkboxColor()" @click="checkMarkShow()">
    <span v-if="isChecked" class="material-icons check-icon"> done </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

const state = reactive({
  isChecked: true,
})

export default defineComponent({
  setup() {
    const { isChecked } = toRefs(state)
    const checkMarkShow = () => {
      // isChecked.value = !isChecked.value
    }
    const checkboxColor = () => {
      return isChecked.value
        ? 'background-color checkbox-true'
        : 'background-color--white checkbox-false'
    }
    return {
      checkMarkShow,
      checkboxColor,
      isChecked,
      state,
    }
  },
})
</script>

<style scoped>
.checkbox {
  width: 20px;
  height: 20px;
  padding: 3px 7px 7px 3px;
  cursor: pointer;
}
.checkbox-true {
  border: solid 1px #f08700;
}
.checkbox-false {
  border: solid 1px #d3d3d3;
}
.check-icon {
  width: 20px;
  height: 20px;
  text-align: center;
  color: #fff;
}
</style>
