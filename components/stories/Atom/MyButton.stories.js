import MyButton from '~/components/Atom/MyButton.vue'

export default {
  title: 'Atom/MyButton',
  component: MyButton,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['default', 'red', 'blue'],
        labels: {
          // ここでラベルを指定する
          default: 'default',
          red: 'red',
          blue: 'blue',
        },
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
        labels: {
          small: 'small',
          medium: 'medium',
          large: 'large',
        },
      },
    },
  },
}

// exportすることでコンポーネントを登録
const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args }
  },
  template: '<MyButton v-bind="args"/>',
})

export const Default = Template.bind({})
Default.args = {
  color: 'default',
}
