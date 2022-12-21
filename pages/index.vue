<template>
  <div>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from '~/components/Organism/TodoList.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    TodoList,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
