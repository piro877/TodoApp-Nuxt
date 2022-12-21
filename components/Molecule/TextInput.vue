<template>
  <div class="text-input">
    <MyLabel :text="text" />
    <MyInputForm @input="$emit(input)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyLabel from '~/components/Atom/MyLabel.vue'
import MyInputForm from '~/components/Atom/MyInputForm.vue'

export default defineComponent({
  components: {
    MyLabel,
    MyInputForm,
  },
  props: {
    text: {
      type: String,
      default: 'label',
    },
  },
  setup() {},
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
</style>
