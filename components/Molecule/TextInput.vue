<template>
  <div class="text-input">
    <MyLabel :text="text" />
    <div class="input-form">
      <input
        type="text"
        :value="value"
        @input="updateValue($event.target.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyLabel from '~/components/Atom/MyLabel.vue'

export default defineComponent({
  components: {
    MyLabel,
  },
  props: {
    text: {
      type: String,
      default: 'label',
    },
    value: {
      type: String,
      default: '',
    },
  },
  setup(_, { emit }) {
    const updateValue = (value: string) => {
      emit('update:value', value)
    }
    return { updateValue }
  },
})
</script>

<style scoped>
.text-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
  width: fit-content;
  margin-bottom: 10px;
}
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
