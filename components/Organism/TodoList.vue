<template>
  <div class="todo-list">
    <ListTemplate>
      <div class="button-class">
        <MyButton text="登録する" @click="showModal" />
      </div>
      <div v-for="item in todoList" :key="item.id">
        <ListItem
          v-show="!item.isDelete && !item.isDone"
          :text="item.label"
          :is-done="item.isDone"
          @delete="deleteItem(item.id)"
          @done="doneItem(item.id)"
        />
        <MySeparater />
      </div>
      <div v-show="todoList.length === 0" class="no-todo">
        TODOはありません。
      </div>
    </ListTemplate>
    <RegisterModal
      v-show="isShow"
      @closeModal="closeModal"
      @register="registerItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import ListTemplate from '~/components/Atom/ListTemplate.vue'
import ListItem from '~/components/Molecule/ListItem.vue'
import MySeparater from '~/components/Atom/MySeparater.vue'
import MyButton from '~/components/Atom/MyButton.vue'
import RegisterModal from '~/components/Organism/RegisterModal.vue'
import { todoItemList, useTodoItems } from '~/components/modules/UseTodoItems'

const state = reactive({
  todoList: [] as todoItemList,
  isShow: false,
})

export default defineComponent({
  components: {
    ListTemplate,
    ListItem,
    MySeparater,
    MyButton,
    RegisterModal,
  },
  setup() {
    const { todoList, isShow } = toRefs(state)
    const { getTodoItems, deleteTodoItem, doneTodoItem } = useTodoItems()

    // テンプレート取得
    const getList = async () => {
      todoList.value = await getTodoItems()
    }
    getList()
    // const todoListTemplate = ['ご飯食べる', '焼肉食べる', 'ガパオライス食べる']

    const showModal = () => {
      isShow.value = true
    }
    const closeModal = () => {
      isShow.value = false
    }
    const registerItem = async () => {
      state.todoList = await getTodoItems()
    }

    const deleteItem = async (id: number) => {
      await deleteTodoItem(id)
      state.todoList = await getTodoItems()
    }

    const doneItem = async (id: number) => {
      await doneTodoItem(id)
      state.todoList = await getTodoItems()
    }

    return {
      todoList,
      isShow,
      showModal,
      closeModal,
      registerItem,
      deleteItem,
      doneItem,
    }
  },
})
</script>

<style scoped>
.button-class {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  height: fit-content;
  margin-bottom: 10px;
}
.todo-list {
  display: block;
  width: 100%;
  height: 100%;
}
.no-todo {
  width: 685.53px;
  height: 100px;
}
</style>
