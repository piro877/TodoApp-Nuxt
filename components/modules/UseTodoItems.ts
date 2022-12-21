import { reactive } from 'vue'

export type TodoItemType = {
  id: number
  label: String
  isDelete: Boolean
  isDone: Boolean
}

export type todoItemList = TodoItemType[]

export const useTodoItems = () => {
  const state = reactive({
    todoItems: [] as todoItemList,
  })
  // let todoItems: todoItemList = []
  const initTodoItems = () => {
    state.todoItems = [
      {
        id: 0,
        label: '',
        isDelete: false,
        isDone: false,
      } as TodoItemType,
    ]
  }
  const getTodoItems = () => {
    return state.todoItems
  }
  const setTodoItems = (item: TodoItemType) => {
    // 値がセットされない、、
    state.todoItems.push(item)
    console.log(state.todoItems)
  }
  const getTodoItemsTemplate = () => {
    const todoItemsTemplate = [
      {
        id: 1,
        label: '肉を焼く',
        isDelete: false,
        isDone: false,
      },
      {
        id: 2,
        label: '玉ねぎを切る',
        isDelete: false,
        isDone: false,
      },
      {
        id: 3,
        label: 'たくさん食べる',
        isDelete: false,
        isDone: false,
      },
    ] as todoItemList
    return todoItemsTemplate
  }
  return {
    initTodoItems,
    getTodoItems,
    setTodoItems,
    getTodoItemsTemplate,
  }
}
