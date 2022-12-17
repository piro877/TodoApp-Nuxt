<template>
  <div class="list-item">
    <MyCheckBox/>
    <MyTextField :text="text"/>
    <MyButton text='削除' color="red" size="small">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyCheckBox from '~/components/Atom/MyCheckBox.vue'
import MyButton from '~/components/Atom/MyButton.vue'
import MyTextField from '~/components/Atom/MyTextField.vue'

export default defineComponent({
  components: {
    MyCheckBox,
    MyButton,
    MyTextField
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup() {
  },
})
</script>

<style scoped>
.list-item{
  display: flex;
  padding: 5px 7px;
  margin: 5px;
  align-items: center;
  background-color: #fff;
}
</style>
