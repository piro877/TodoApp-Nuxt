export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as AtomListTemplate } from '../../components/Atom/ListTemplate.vue'
export { default as AtomModalTemplate } from '../../components/Atom/ModalTemplate.vue'
export { default as AtomMyButton } from '../../components/Atom/MyButton.vue'
export { default as AtomMyCheckBox } from '../../components/Atom/MyCheckBox.vue'
export { default as AtomMyCurcle } from '../../components/Atom/MyCurcle.vue'
export { default as AtomMyInputForm } from '../../components/Atom/MyInputForm.vue'
export { default as AtomMyLabel } from '../../components/Atom/MyLabel.vue'
export { default as AtomMySeparater } from '../../components/Atom/MySeparater.vue'
export { default as AtomMyTextField } from '../../components/Atom/MyTextField.vue'
export { default as MoleculeListItem } from '../../components/Molecule/ListItem.vue'
export { default as MoleculeTextInput } from '../../components/Molecule/TextInput.vue'
export { default as OrganismRegisterModal } from '../../components/Organism/RegisterModal.vue'
export { default as OrganismTodoList } from '../../components/Organism/TodoList.vue'
export { default as ModulesColorSelector } from '../../components/modules/ColorSelector.ts'
export { default as ModulesUseTodoItems } from '../../components/modules/UseTodoItems.ts'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
