import MyLabel from '~/components/Atom/MyLabel'

export default {
  title: 'Atom/MyLabel',
  component: MyLabel,
  argTypes: {
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

const Template = (args) => ({
  components: { MyLabel },
  setup() {
    return { args }
  },
  template: '<MyLabel v-bind="args">',
})

export const Default = Template.bind({})
