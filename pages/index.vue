<template>
  <div>
    <TodoList @register="showModal" />
    <RegisterModal v-show="isShow" @closeModal="closeModal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import TodoList from '~/components/Organism/TodoList.vue'
import RegisterModal from '~/components/Organism/RegisterModal.vue'

const state = reactive({
  isShow: false,
})

export default defineComponent({
  name: 'IndexPage',
  components: {
    TodoList,
    RegisterModal,
  },
  setup() {
    const { isShow } = toRefs(state)
    const showModal = () => {
      isShow.value = true
    }
    const closeModal = () => {
      isShow.value = false
    }
    return { isShow, showModal, closeModal }
  },
})
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
