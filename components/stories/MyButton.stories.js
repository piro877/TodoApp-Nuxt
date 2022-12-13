import MyButton from '~/components/Atom/MyButton.vue'

export default {
  title: 'Atom/MyButton',
  component: MyButton,
  argTypes: {},
}

// exportすることでコンポーネントを登録
export const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args }
  },
  template: '<MyButton/>',
})

export const FirstStory = Template.bind({})
