import Vue from 'vue'
import { action } from '@storybook/addon-actions'

import PButton from './PButton.vue'

Vue.component('PButton', PButton)

export default {
  title: 'Button'
}

export const text = () => ({
  components: { PButton },
  template: '<p-button @click="action">Hello Button</p-button>',
  methods: { action: action('clicked') }
})
