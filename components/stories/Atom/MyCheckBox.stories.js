import MyCheckBox from '~/components/Atom/MyCheckBox'

export default {
  title: 'Atom/MyCheckBox',
  component: MyCheckBox,
}

const Template = (args) => ({
  components: { MyCheckBox },
  setup() {
    return { args }
  },
  template: '<MyCheckBox v-bind="args"/>',
})
export const Default = Template.bind({})
