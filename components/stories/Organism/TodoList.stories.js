import TodoList from '~/components/Organism/TodoList'

export default {
  title: 'Organism/TodoList',
  component: TodoList,
}

const Template = () => ({
  components: { TodoList },
  template: '<TodoList />',
})

export const Default = Template.bind({})
