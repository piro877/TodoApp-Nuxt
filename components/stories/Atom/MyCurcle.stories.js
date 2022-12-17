import MyCurcle from '~/components/Atom/MyCurcle'

export default {
  title: 'Atom/MyCurcle',
  component: MyCurcle,
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
  },
}

// exportすることでコンポーネントを登録
const Template = (args) => ({
  components: { MyCurcle },
  setup() {
    return { args }
  },
  template: '<MyCurcle v-bind="args"/>',
})

export const Default = Template.bind({})
Default.args = {
  color: 'default',
}
