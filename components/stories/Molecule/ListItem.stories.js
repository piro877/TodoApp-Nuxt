import ListItem from '~/components/Molecule/ListItem'

export default {
  title: 'Molecule/ListItem',
  component: ListItem,
}

const Template = (args) => ({
  components: { ListItem },
  setup() {
    return { args }
  },
  template: '<ListItem :text="`todo`"/>',
})

export const Default = Template.bind({})
