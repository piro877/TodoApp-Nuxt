<template>
  <div>
    <ModalTemplate @closeModal="closeModal()">
      <div>TODOを入力</div>
      <TextInput :value.sync="item" text="TODO" />
      <MyButton text="登録" @click="registerItem()" />
    </ModalTemplate>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import ModalTemplate from '~/components/Atom/ModalTemplate.vue'
import TextInput from '~/components/Molecule/TextInput.vue'
import MyButton from '~/components/Atom/MyButton.vue'
import { useTodoItems } from '~/components/modules/UseTodoItems'

const state = reactive({
  item: '',
})

export default defineComponent({
  components: {
    ModalTemplate,
    TextInput,
    MyButton,
  },
  setup(_, { emit }) {
    const { item } = toRefs(state)
    const { setTodoItems } = useTodoItems()
    const registerItem = async () => {
      // TODOリストの項目を追加する処理を書く
      await setTodoItems(item.value)
      item.value = ''
      emit('register')
    }
    const closeModal = () => {
      emit('closeModal')
    }
    return {
      item,
      registerItem,
      closeModal,
    }
  },
})
</script>
