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
import { TodoItemType, useTodoItems } from '~/components/modules/UseTodoItems'

const state = reactive({
  item: '',
  id: 4,
})

export default defineComponent({
  components: {
    ModalTemplate,
    TextInput,
    MyButton,
  },
  setup(_, { emit }) {
    const { item, id } = toRefs(state)
    const { setTodoItems } = useTodoItems()
    const registerItem = () => {
      // TODOリストの項目を追加する処理を書く
      const setItem = {
        id: id.value,
        label: item.value,
        isDelete: false,
        isDone: false,
      } as TodoItemType
      setTodoItems(setItem)
      emit('register')
      id.value++
    }
    const closeModal = () => {
      console.log('close')
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
