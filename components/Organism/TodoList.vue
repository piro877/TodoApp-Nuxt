<template>
  <div class="todo-list">
    <ListTemplate>
      <div class="button-class">
        <MyButton text="登録する" />
      </div>
      <div v-for="item in todoList" :key="item">
        <ListItem :text="item" />
        <MySeparater />
      </div>
    </ListTemplate>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListTemplate from '~/components/Atom/ListTemplate.vue'
import ListItem from '~/components/Molecule/ListItem.vue'
import MySeparater from '~/components/Atom/MySeparater.vue'
import MyButton from '~/components/Atom/MyButton.vue'

export default defineComponent({
  components: {
    ListTemplate,
    ListItem,
    MySeparater,
    MyButton,
  },
  setup() {
    const todoList = ['ご飯食べる', '焼肉食べる', 'ガパオライス食べる']
    return {
      todoList,
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
</style>
