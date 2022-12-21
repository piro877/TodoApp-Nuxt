import MyInputForm from '~/components/Atom/MyInputForm'

export default {
  title: 'Atom/MyInputForm',
  component: MyInputForm,
}

const Template = () => ({
  components: { MyInputForm },
  template: '<myInputForm />',
})

export const Default = Template.bind({})
