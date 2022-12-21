import ModalTemplate from '~/components/Atom/ModalTemplate'

export default {
  title: 'Atom/ModalTemplate',
  component: ModalTemplate,
}

const Template = () => ({
  components: { ModalTemplate },
  template: '<ModalTemplate />',
})

export const Default = Template.bind({})
