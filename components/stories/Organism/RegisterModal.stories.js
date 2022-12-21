import RegisterModal from '~/components/Organism/RegisterModal'

export default {
  title: 'Organism/RegisterModal',
  component: RegisterModal,
}

const Template = () => ({
  components: { RegisterModal },
  template: '<RegisterModal />',
})

export const Default = Template.bind({})
