<template>
  <div>
    <MyButton />
    <div>hoge</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '../components/Atom/MyButton.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    MyButton,
  },
  setup() {},
})
</script>
