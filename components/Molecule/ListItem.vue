<template>
  <div :class="listItemClass()">
    <MyCurcle v-if="!isDone" />
    <MyCheckBox v-else />
    <MyTextField :text="text" />
    <MyButton text="Done" color="blue" size="small" @click="$emit('done')" />
    <MyButton text="削除" color="red" size="small" @click="$emit('delete')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyCurcle from '~/components/Atom/MyCurcle.vue'
import MyButton from '~/components/Atom/MyButton.vue'
import MyTextField from '~/components/Atom/MyTextField.vue'
import MyCheckBox from '~/components/Atom/MyCheckBox.vue'

export default defineComponent({
  components: {
    MyCurcle,
    MyButton,
    MyTextField,
    MyCheckBox,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const listItemClass = () => {
      return props.isDone ? 'list-item-done' : 'list-item'
    }
    return {
      listItemClass,
    }
  },
})
</script>

<style scoped>
.list-item {
  display: flex;
  padding: 5px 7px;
  align-items: center;
  background-color: #fff;
}
.list-item-done {
  display: flex;
  padding: 5px 7px;
  align-items: center;
  background-color: #d4d4d4;
}
.list-item * {
  margin: 5px;
}
</style>
