import { reactive } from 'vue'
import { TodoApi } from '~/types/typescript-axios'

export type TodoItemType = {
  id: number
  label: string
  isDelete: Boolean
  isDone: Boolean
}

export type todoItemList = TodoItemType[]

export const useTodoItems = () => {
  const state = reactive({
    todoItems: [] as todoItemList,
  })
  const api = new TodoApi()
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
  const getTodoItems = async () => {
    // TODO
    const res = [] as todoItemList
    const items = await api.apiTodoGet().then((res) => {
      return res.data
    })
    items.forEach((value) => {
      const item = {
        id: value.id,
        label: value.itemLabel,
        isDelete: value.isDelete,
        isDone: value.isDone,
      } as TodoItemType
      res.push(item)
    })
    return res
  }
  const setTodoItems = async (label: string) => {
    await api.apiTodoPost({
      label,
    })
  }
  const getTodoItemsTemplate = async () => {
    const items = await api.apiTodoTemplateGet().then((res) => {
      console.log(res)
      return res.data
    })
    items.forEach((value) => {
      const item = {
        id: value.id,
        label: value.itemLabel,
        isDelete: value.isDelete,
        isDone: value.isDone,
      } as TodoItemType
      state.todoItems.push(item)
      return item
    })
    return state.todoItems
  }
  const deleteTodoItem = async (id: number) => {
    const res = await api.apiTodoTodoIdDelete(id).then((res) => {
      return res.data
    })
    return res
  }
  const doneTodoItem = async (id: number) => {
    await api.apiTodoPut({
      id,
      isDone: true,
    })
  }
  return {
    initTodoItems,
    getTodoItems,
    setTodoItems,
    getTodoItemsTemplate,
    deleteTodoItem,
    doneTodoItem,
  }
}
