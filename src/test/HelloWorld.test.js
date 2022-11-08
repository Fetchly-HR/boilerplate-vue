import { mount } from '@vue/test-utils'
import { test } from 'vitest'
import HelloWorld from '../components/HelloWorld.vue'

test('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello World',
    },
  })

  expect(wrapper.text()).toContain('Hello World')
})