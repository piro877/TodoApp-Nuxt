<template>
  <div>
    <ModalTemplate>
      <div>TODOを入力</div>
      <TextInput v-model="item" text="TODO"/>
      <MyButton text="登録" @click="registerItem()">
    </ModalTemplate>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import ModalTemplate from '~/components/Atom/ModalTemplate.vue'
import TextInput from '~/components/Molecule/TextInput.vue'
import MyButton from '~/components/Atom/MyButton.vue'

const state = reactive({
  item: ""
})

export default defineComponent({
  components: {
    ModalTemplate,
    TextInput,
    MyButton
  },
  setup(props, context) {
    const {item} = toRefs(state)
    const registerItem = () => {
      console.log(item)
      context.emit("closeModal")
    }
    return {
      item,
      registerItem
    }
  },
})
</script>
