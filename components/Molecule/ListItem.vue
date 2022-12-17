<template>
  <div class="list-item">
    <MyCurcle />
    <MyTextField :text="text" />
    <MyButton text="Done" color="blue" size="small" />
    <MyButton text="削除" color="red" size="small" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyCurcle from '~/components/Atom/MyCurcle.vue'
import MyButton from '~/components/Atom/MyButton.vue'
import MyTextField from '~/components/Atom/MyTextField.vue'

export default defineComponent({
  components: {
    MyCurcle,
    MyButton,
    MyTextField,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>

<style scoped>
.list-item {
  display: flex;
  padding: 5px 7px;
  align-items: center;
  background-color: #fff;
}
.list-item * {
  margin: 5px;
}
</style>
