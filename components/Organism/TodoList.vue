<template>
  <div>
    <ListTemplate>
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

export default defineComponent({
  components: {
    ListTemplate,
    ListItem,
    MySeparater,
  },
  setup() {
    const todoList = ['ご飯食べる', '焼肉食べる', 'ガパオライス食べる']
    return {
      todoList,
    }
  },
})
</script>
