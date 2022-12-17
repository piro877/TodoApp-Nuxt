import MyTextField from '~/components/Atom/MyTextField.vue'

export default {
  title: 'Atom/MyTextField',
  component: MyTextField,
}

// exportすることでコンポーネントを登録
const Template = (args) => ({
  components: { MyTextField },
  setup() {
    return { args }
  },
  template: '<MyTextField v-bind="args"/>',
})

export const Default = Template.bind({})
