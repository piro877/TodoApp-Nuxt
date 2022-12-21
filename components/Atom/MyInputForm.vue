<template>
  <div class="input-form">
    <input
      type="text"
      :value="value"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  setup(_, { emit }) {
    const updateValue = (value: string) => {
      emit('update', value)
    }
    return { updateValue }
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
