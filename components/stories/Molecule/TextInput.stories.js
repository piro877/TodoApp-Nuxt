import TextInput from '~/components/Molecule/TextInput'

export default {
  title: 'Molecule/TextInput',
  component: TextInput,
}

const Template = (args) => ({
  components: { TextInput },
  setup() {
    return { args }
  },
  template: '<TextInput v-bind="args">',
})

export const Default = Template.bind({})
