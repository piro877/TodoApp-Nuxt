<template>
  <div class="todo-list">
    <ListTemplate>
      <div class="button-class">
        <MyButton text="登録する" @click="showModal" />
      </div>
      <div v-for="item in todoList" :key="item.id">
        <ListItem :text="item.label" />
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
    const { getTodoItemsTemplate, getTodoItems } = useTodoItems()
    todoList.value = getTodoItemsTemplate()
    // const todoListTemplate = ['ご飯食べる', '焼肉食べる', 'ガパオライス食べる']

    const showModal = () => {
      isShow.value = true
    }
    const closeModal = () => {
      isShow.value = false
    }
    const registerItem = () => {
      todoList.value = getTodoItems()
      // useの値を使いたいのにセットされない、、
      console.log(getTodoItems())
      console.log(todoList.value)
    }

    return {
      todoList,
      isShow,
      showModal,
      closeModal,
      registerItem,
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
